import {createAsyncThunk} from "@reduxjs/toolkit";
import {IBenefitsResponse} from "../types/benefits";
import {$api} from "../../../6Shared/api";

export const getBenefitsList = createAsyncThunk<IBenefitsResponse, void, { rejectValue: string }>(
    "getBenefitsList",
    async (_, thunkAPI) => {
        try {
            const response = await $api.get<IBenefitsResponse>(`/api/v1/practicum/benefits/`);
            console.log(response)
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue("Ошибка при ценностей компании");
        }
    }
);
