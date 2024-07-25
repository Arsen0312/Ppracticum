import {ITeacherResponse} from "../types/teacher";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getTeacherById} from "../services/getTeacherById";

interface IBenefitsState {
    isLoading: boolean;
    errors: string[] | [];
    response: ITeacherResponse;
}

const initialState: IBenefitsState = {
    isLoading: false,
    errors: [],
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
            .addCase(getTeacherById.fulfilled, (state, action: PayloadAction<ITeacherResponse>) => {
                state.isLoading = false;
                state.response = action.payload;
                state.errors = [];
            })
            .addCase(getTeacherById.rejected, (state, action) => {
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