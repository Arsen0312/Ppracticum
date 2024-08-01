import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { feedbackReducer } from "../../../../4Features/Feedback/postFeedback";
import { benefitsReducer } from "../../../../5Entites/benefits";
import { founderReducer } from "../../../../5Entites/founder";
import { newsReducer } from "../../../../5Entites/news";
import { outsourcingReducer } from "../../../../5Entites/outsourcing";
import { reviewsReducer } from "../../../../5Entites/reviews";
import { teacherReducer } from "../../../../5Entites/teacher";
import { coursesReducers } from "../../../../5Entites/сourses";

const rootReducer = combineReducers({
    benefits: benefitsReducer,
    courses: coursesReducers,
    feedback: feedbackReducer,
    teacher: teacherReducer,
    reviews: reviewsReducer,
    founder: founderReducer,
    news: newsReducer,
    outsourcing: outsourcingReducer

});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
