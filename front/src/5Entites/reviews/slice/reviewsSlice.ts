import { IReviewsListResponse } from "../types/reviewsList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getReviewsList } from "../services/getReviewsList";

// Определяем интерфейс состояния
export interface IReviewsState {
    isLoading: boolean;
    errors: string[];
    responseList: IReviewsListResponse;
}

// Инициализация начального состояния
const initialState: IReviewsState = {
    isLoading: false,
    errors: [],
    responseList: {
        count: 0,
        next: null,
        previous: null,
        results: []
    },
};

// Создаем срез
export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReviewsList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getReviewsList.fulfilled, (state, action: PayloadAction<IReviewsListResponse>) => {
                state.isLoading = false;
                state.responseList = action.payload;
            })
            .addCase(getReviewsList.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                // Если action.payload - это объект ошибки, используйте его сообщение
                state.errors = action.payload ? [...state.errors, action.payload.message || "Ошибка при получении данных"] : [...state.errors, "Ошибка при получении данных"];
            });
    }
});

export const {
    name: reviewsReducerName,
    reducer: reviewsReducer,
    actions: reviewsActions
} = reviewsSlice;
