import { createAsyncThunk } from "@reduxjs/toolkit";

import { $api } from "../../../6Shared/api";
import { ITeacherByIdResponse } from "../types/teacherById";

export const getTeacherById = createAsyncThunk<ITeacherByIdResponse, number, { rejectValue: string }>(
    "getTeacherById",
    async (id, thunkAPI) => {
        try {
            const response = await $api.get<ITeacherByIdResponse>(`/api/v1/account/teachers/${id}/`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("Ошибка при ценностей информации о учителе");
        }
    }
);
