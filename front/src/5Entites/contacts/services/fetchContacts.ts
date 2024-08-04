import { createAsyncThunk } from "@reduxjs/toolkit";

import { $api } from "../../../6Shared/api";
import { TContact } from "../types/contacts"; // Импортируйте типы из вашего файла типов

type TContactsData = {
    count: number;
    next: string | null;
    previous: string | null;
    results: TContact[];
};

export const fetchContacts = createAsyncThunk<TContact, void, { rejectValue: string }>(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await $api.get<TContactsData>("/api/v1/account/contacts/?limit=900");
            return response.data.results[0];
        } catch (error) {
            console.error("Error fetching contact data:", error);
            return thunkAPI.rejectWithValue("Ошибка при получении данных контактов");
        }
    }
);
