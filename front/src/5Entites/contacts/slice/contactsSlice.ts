import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchContacts } from "../services/fetchContacts"; // Импортируйте ваш экшен
import { TContact } from "../types/contacts"; // Импортируйте типы из вашего файла типов

export interface IContactsState {
    isLoading: boolean;
    errors: string[] | [];
    contacts: TContact;
}

const initialState: IContactsState = {
    isLoading: false,
    errors: [],
    contacts: {
        id: 0,
        created_at: '',
        updated_at: '',
        facebook: '',
        instagram: '',
        whatsapp: '',
        telegram: '',
        phone: '',
        email: '',
        address: '',
    },
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<TContact>) => {
                state.isLoading = false;
                state.contacts = action.payload;
                state.errors = [];
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ? [action.payload] : ["Ошибка при загрузке данных"];
            });
    },
});

export const {
    name: contactsReducerName,
    reducer: contactsReducer,
    actions: contactsActions,
} = contactsSlice;
