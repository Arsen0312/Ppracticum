import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {INewsListResponse} from "../types/newsList";
import {getNewsList} from "../services/getNewsList";

export interface INewsState {
    isLoading: boolean;
    errors: string[] | [];
    responseList: INewsListResponse;
}

const initialState: INewsState = {
    isLoading: false,
    errors: [],
    responseList: {
        count: 0,
        next: null,
        previous: null,
        results: []
    }
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNewsList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getNewsList.fulfilled, (state, action: PayloadAction<INewsListResponse>) => {
                state.isLoading = false;
                state.responseList = action.payload;
                state.errors = [];
            })
            .addCase(getNewsList.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ? [action.payload] :["ошибка при получения ошибки из action.payload"];
            });
    }
})

export const {
    name: newsReducerName,
    reducer: newsReducer,
    actions: newsActions
} = newsSlice