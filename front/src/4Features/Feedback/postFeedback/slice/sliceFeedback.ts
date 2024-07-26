import { IFeedback } from "../type/typeFeedback";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postFeedback } from "../service/postFeedback";

interface IFeedbackState {
    isLoading: boolean;
    response: string[] | [];
    body: IFeedback;
}

const initialState: IFeedbackState = {
    isLoading: false,
    response: [],
    body: {
        full_name: "",
        phone: "",
        email: ""
    }
};

export const feedbackSlice = createSlice({
    name: "feedbackSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postFeedback.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postFeedback.fulfilled, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.response = [action.payload];
            })
            .addCase(postFeedback.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.response = [action.payload || "Ошибка при отправки данных для помощи"];
            });
    }
});

export const {
    name: feedbackReducerName,
    reducer: feedbackReducer,
    actions: feedbackActions
} = feedbackSlice;
