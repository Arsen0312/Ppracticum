import { contactsReducerName, contactsReducer, contactsActions, IContactsState } from "./slice/contactsSlice";
import { TContact } from "./types/contacts";

export {
    contactsReducerName,
    contactsReducer,
    contactsActions
};

export type {
    IContactsState,
    TContact
};
