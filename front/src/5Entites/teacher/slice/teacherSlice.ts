import {ITeacherByIdResponse} from "../types/teacherById";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getTeacherById} from "../services/getTeacherById";
import {ITeacherListResponse} from "../types/teacherList";
import {getTeacherList} from "../services/getTeacherList";

export interface ITeacherState {
    isLoading: boolean;
    errors: string[] | [];
    responseList: ITeacherListResponse;
    response: ITeacherByIdResponse;
}

const initialState: ITeacherState = {
    isLoading: false,
    errors: [],
    responseList: {
        count: 0,
        next: null,
        previous: null,
        results: []
    },
    response: {
        id: 0,
        contacts: {
            id: 0,
            created_at: "",
            updated_at: "",
            facebook: "",
            instagram: "",
            whatsapp: "",
            telegram: "",
            phone: "",
            email: "",
        },
        created_at: '',
        updated_at: '',
        first_name: '',
        last_name: '',
        patronymic: '',
        rating: 0,
        avatar: '',
        role: '',
        description: '',
        experience: '',
        courses: [],
    }
}

export const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTeacherById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTeacherById.fulfilled, (state, action: PayloadAction<ITeacherByIdResponse>) => {
                state.isLoading = false;
                state.response = action.payload;
                state.errors = [];
            })
            .addCase(getTeacherById.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ? [action.payload] :["ошибка при получения ошибки из action.payload"];
            });
        builder
            .addCase(getTeacherList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTeacherList.fulfilled, (state, action: PayloadAction<ITeacherListResponse>) => {
                state.isLoading = false;
                state.responseList = action.payload;
                state.errors = [];
            })
            .addCase(getTeacherList.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload ? [action.payload] :["ошибка при получения ошибки из action.payload"];
            });
    }
})

export const {
    name: teacherReducerName,
    reducer: teacherReducer,
    actions: teacherActions
} = teacherSlice