import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {benefitsReducer} from "../../../../5Entites/benefits";
import {feedbackReducer} from "../../../../4Features/Feedback/postFeedback";
import {teacherReducer} from "../../../../5Entites/teacher";
import {coursesReducers} from "../../../../5Entites/сourses";
import {reviewsReducer} from "../../../../5Entites/reviews";
import {founderReducer} from "../../../../5Entites/founder";
import {newsReducer} from "../../../../5Entites/news";

const rootReducer = combineReducers({
    benefits: benefitsReducer,
    courses: coursesReducers,
    feedback: feedbackReducer,
    teacher: teacherReducer,
    reviews: reviewsReducer,
    founder: founderReducer,
    news: newsReducer

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
