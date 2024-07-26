import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {benefitsReducer} from "../../../../5Entites/benefits";
import {coursesReducer} from "../../../../5Entites/сourses";
import {feedbackReducer} from "../../../../4Features/Feedback/postFeedback";
import {teacherReducer} from "../../../../5Entites/teacher";

const rootReducer = combineReducers({
    benefits: benefitsReducer,
    courses: coursesReducer,
    feedback: feedbackReducer,
    teacher: teacherReducer

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
