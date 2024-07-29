import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../../6Shared/api";
import {INewsListResponse} from "../types/newsList";

export const getNewsList = createAsyncThunk<INewsListResponse, void, { rejectValue: string }>(
    "getNewsList",
    async (_, thunkAPI) => {
        try {
            const response = await $api.get<INewsListResponse>(`/api/v1/practicum/news/?limit=900`);
            console.log(response)
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue("Ошибка при ценностей информации о новостей");
        }
    }
);
