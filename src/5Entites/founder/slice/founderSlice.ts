import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getFounder } from "../services/getFounder";
import { IFounderResponse } from "../types/founder";

export interface IFounderState {
    isLoading: boolean;
    errors: string[] | [];
    response: IFounderResponse;
}

const initialState: IFounderState = {
    isLoading: false,
    errors: [],
    response: {
        count: 0,
        next: null,
        previous: null,
        results: [{
            full_name: "",
            image: "",
            description: "",
            paragraphs: []
        }]
    }
};

export const founderSlice = createSlice({
    name: "founder",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFounder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFounder.fulfilled, (state, action: PayloadAction<IFounderResponse>) => {
                state.isLoading = false;
                state.response = action.payload;
                state.errors = [];
            })
            .addCase(getFounder.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ? [action.payload] : ["ошибка при получения ошибки из action.payload"];
            });
    }
});

export const {
    name: founderReducerName,
    reducer: founderReducer,
    actions: founderActions
} = founderSlice;