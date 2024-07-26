import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITeacherResponse} from "../types/teacher";
import {$api} from "../../../6Shared/api";

export const getTeacherById = createAsyncThunk<ITeacherResponse, number, { rejectValue: string }>(
    "getTeacherById",
    async (id, thunkAPI) => {
        try {
            const response = await $api.get<ITeacherResponse>(`/api/v1/account/teachers/${id}/`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue("Ошибка при ценностей информации о учителе");
        }
    }
);
