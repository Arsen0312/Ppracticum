import { createAsyncThunk } from "@reduxjs/toolkit";

import { $api } from "../../../../6Shared/api";
import { IFeedback } from "../type/typeFeedback";


export const postFeedback = createAsyncThunk<string, IFeedback, { rejectValue: string }>(
    "postFeedback",
    async (dateFeedback, thunkAPI) => {
        try {
            await $api.post<boolean>(`/api/v1/practicum/lead/`, dateFeedback);
            return thunkAPI.fulfillWithValue("успешно отправлены данные для помощи");
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("Ошибка при отправки данных для помощи");
        }
    }
);

