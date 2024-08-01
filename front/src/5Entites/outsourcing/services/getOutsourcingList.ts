import { createAsyncThunk } from "@reduxjs/toolkit";

import { $api } from "../../../6Shared/api";
import { IOutsourcingListResponse } from "../types/outsourcingList";

export const getOutsourcingList = createAsyncThunk<IOutsourcingListResponse, void, { rejectValue: string }>(
    "getOutsourcingList",
    async (_, thunkAPI) => {
        try {
            const response = await $api.get<IOutsourcingListResponse>(`/api/v1/outsourcing/outsourcing_benefits/?limit=4`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("Ошибка при получение аутсорсинга");
        }
    }
);

