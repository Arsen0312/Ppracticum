import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITeacherListResponse} from "../types/teacherList";
import {$api} from "../../../6Shared/api";

export const getTeacherList = createAsyncThunk<ITeacherListResponse, void, { rejectValue: string }>(
    "getTeacherList",
    async (_, thunkAPI) => {
        try {
            const response = await $api.get<ITeacherListResponse>(`/api/v1/account/teachers/?limit=900`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue("Ошибка при ценностей информации о учителе");
        }
    }
);
