import { createAsyncThunk } from "@reduxjs/toolkit";

import { $api } from "../../../6Shared/api";
import { ICoursesListResponse } from "../types/coursesList";

export const getCoursesList = createAsyncThunk<ICoursesListResponse, void, { rejectValue: string }>(
    "getCoursesList",
    async (_, thunkAPI) => {
        try {
            const response = await $api.get<ICoursesListResponse>(`/api/v1/academy/courses/`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("Ошибка при получение курсов");
        }
    }
);

