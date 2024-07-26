import { AxiosInstance } from "axios";
import { benefitsReducerName } from "../../../../5Entites/benefits";
import {IBenefitsResponse} from "../../../../5Entites/benefits";
import {coursesReducerName, IBenefitsState} from "../../../../5Entites/сourses";
import {feedbackReducerName, IFeedback} from "../../../../4Features/Feedback/postFeedback";
import {ITeacherResponse, teacherReducerName} from "../../../../5Entites/teacher";
import {IReviewsState, reviewsReducerName} from "../../../../5Entites/reviews";

export interface StateSchema {
    [benefitsReducerName]: IBenefitsResponse,
    [coursesReducerName]: IBenefitsState,
    [feedbackReducerName]: IFeedback,
    [teacherReducerName]: ITeacherResponse,
    [reviewsReducerName]: IReviewsState

}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema
}
