import { createAsyncThunk } from "@reduxjs/toolkit";

import { $api } from "../../../6Shared/api";
import { IFounderResponse } from "../types/founder";

export const getFounder = createAsyncThunk<IFounderResponse, void, { rejectValue: string }>(
    "getFounder",
    async (_, thunkAPI) => {
        try {
            const response = await $api.get<IFounderResponse>(`/api/v1/practicum/founder_section/?limit=900`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("Ошибка при ценностей информации о основателе");
        }
    }
);
