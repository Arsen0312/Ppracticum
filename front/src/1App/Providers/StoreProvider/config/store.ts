import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {benefitsReducer} from "../../../../5Entites/benefits";

const rootReducer = combineReducers({
    benefits: benefitsReducer

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
