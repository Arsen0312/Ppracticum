import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getOutsourcingById } from "../services/getOutsourcingById";
import { getOutsourcingList } from "../services/getOutsourcingList";
import { ICoursesByIdResponse } from "../types/outsourcingById";
import { IOutsourcingListResponse } from "../types/outsourcingList";

export interface IOutsourcingState {
    isLoading: boolean;
    errors: string[] | [];
    responseList: IOutsourcingListResponse;
    responseById: ICoursesByIdResponse
}

const initialState: IOutsourcingState = {
    isLoading: false,
    errors: [],
    responseList: {
        count: 0,
        next: null,
        previous: null,
        results: []
    },
    responseById: {
        id: 0,
        skills: [],
        advantages: [],
        teachers: [],
        created_at: "",
        updated_at: "",
        title: "",
        description: "",
        purpose: "",
        duration: "",
        tag: null,
        icon: "",
        rating: 0,
        trial_lesson: null,
        background_person: ""
    }
};

export const outsourcingSlice = createSlice({
    name: "outsourcing",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOutsourcingList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOutsourcingList.fulfilled, (state, action: PayloadAction<IOutsourcingListResponse>) => {
                state.isLoading = false;
                state.responseList = action.payload;
            })
            .addCase(getOutsourcingList.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ? [...state.errors, action.payload] : [...state.errors, "ошибка при получения ошибки из action.payload"];
            });
        builder
            .addCase(getOutsourcingById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOutsourcingById.fulfilled, (state, action: PayloadAction<ICoursesByIdResponse>) => {
                state.isLoading = false;
                state.responseById = action.payload;
            })
            .addCase(getOutsourcingById.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ? [...state.errors, action.payload] : [...state.errors, "ошибка при получения ошибки из action.payload"];
            });

    }
});

export const {
    name: outsourcingReducerName,
    reducer: outsourcingReducer,
    actions: outsourcingActions
} = outsourcingSlice;