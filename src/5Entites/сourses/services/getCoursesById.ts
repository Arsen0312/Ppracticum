import { createAsyncThunk } from "@reduxjs/toolkit";

import { $api } from "../../../6Shared/api";
import { ICoursesByIdResponse } from "../types/coursesById";

export const getCoursesById = createAsyncThunk<ICoursesByIdResponse, number, { rejectValue: string }>(
    "getCoursesById",
    async (id, thunkAPI) => {
        try {
            const response = await $api.get<ICoursesByIdResponse>(`/api/v1/academy/courses/${id}/`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("Ошибка при получение курса");
        }
    }
);

