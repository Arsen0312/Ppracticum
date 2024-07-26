import {IBenefitsResponse} from "../types/benefits";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getBenefitsList} from "../services/getBenefitsList";

interface IBenefitsState {
    isLoading: boolean;
    errors: string[] | [];
    response: IBenefitsResponse;
}

const initialState: IBenefitsState = {
    isLoading: false,
    errors: [],
    response: {
        count: 0,
        next: null,
        previous: null,
        results: []
    }
}

export const benefitsSLice = createSlice({
    name: "benefits",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBenefitsList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBenefitsList.fulfilled, (state, action: PayloadAction<IBenefitsResponse>) => {
                state.isLoading = false;
                state.response = action.payload;
                state.errors = [];
            })
            .addCase(getBenefitsList.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ? [action.payload] :["ошибка при получения ошибки из action.payload"];
            });
    }
})

export const {
    name: benefitsReducerName,
    reducer: benefitsReducer,
    actions: benefitsActions
} = benefitsSLice