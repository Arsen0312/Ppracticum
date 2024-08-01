import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCoursesById } from "../services/getCoursesById";
import { getCoursesList } from "../services/getCoursesList";
import { ICoursesByIdResponse } from "../types/coursesById";
import { ICoursesListResponse } from "../types/coursesList";

export interface IBenefitsState {
    isLoading: boolean;
    errors: string[] | [];
    responseList: ICoursesListResponse;
    responseById: ICoursesByIdResponse
}

const initialState: IBenefitsState = {
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

export const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCoursesList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCoursesList.fulfilled, (state, action: PayloadAction<ICoursesListResponse>) => {
                state.isLoading = false;
                state.responseList = action.payload;
            })
            .addCase(getCoursesList.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ? [...state.errors, action.payload] : [...state.errors, "ошибка при получения ошибки из action.payload"];
            });
        builder
            .addCase(getCoursesById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCoursesById.fulfilled, (state, action: PayloadAction<ICoursesByIdResponse>) => {
                state.isLoading = false;
                state.responseById = action.payload;
            })
            .addCase(getCoursesById.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ? [...state.errors, action.payload] : [...state.errors, "ошибка при получения ошибки из action.payload"];
            });

    }
});

export const {
    name: coursesReducerName,
    reducer: coursesReducers,
    actions: coursesActions
} = coursesSlice;