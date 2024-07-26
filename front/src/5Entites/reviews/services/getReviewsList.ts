import {createAsyncThunk} from "@reduxjs/toolkit";
import {IReviewsListResponse} from "../types/reviewsList";
import {$api} from "../../../6Shared/api";

export const getReviewsList = createAsyncThunk<IReviewsListResponse, void, { rejectValue: string }>(
    "getReviewsList",
    async (_, thunkAPI) => {
        try {
            const response = await $api.get<IReviewsListResponse>(`/api/v1/practicum/reviews/?limit=300`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue("Ошибка при получение новостей");
        }
    }
);

