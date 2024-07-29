import { AxiosInstance } from "axios";
import { benefitsReducerName } from "../../../../5Entites/benefits";
import {IBenefitsResponse} from "../../../../5Entites/benefits";
import {coursesReducerName, IBenefitsState} from "../../../../5Entites/сourses";
import {feedbackReducerName, IFeedback} from "../../../../4Features/Feedback/postFeedback";
import {ITeacherState, teacherReducerName} from "../../../../5Entites/teacher";
import {IReviewsState, reviewsReducerName} from "../../../../5Entites/reviews";
import {founderReducerName, IFounderState} from "../../../../5Entites/founder";
import {INewsState, newsReducerName} from "../../../../5Entites/news";


export interface StateSchema {
    [benefitsReducerName]: IBenefitsResponse,
    [coursesReducerName]: IBenefitsState,
    [feedbackReducerName]: IFeedback,
    [teacherReducerName]: ITeacherState,
    [reviewsReducerName]: IReviewsState,
    [founderReducerName]: IFounderState,
    [newsReducerName]: INewsState

}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema
}
