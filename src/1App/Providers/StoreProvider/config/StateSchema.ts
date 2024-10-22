import { AxiosInstance } from "axios";

import { feedbackReducerName, IFeedback } from "../../../../4Features/Feedback/postFeedback";
import { IBenefitsResponse, benefitsReducerName } from "../../../../5Entites/benefits";
import { contactsReducerName, IContactsState } from "../../../../5Entites/contacts";
import { founderReducerName, IFounderState } from "../../../../5Entites/founder";
import { INewsState, newsReducerName } from "../../../../5Entites/news";
import { IOutsourcingState, outsourcingReducerName } from "../../../../5Entites/outsourcing";
import { IReviewsState, reviewsReducerName } from "../../../../5Entites/reviews";
import { ITeacherState, teacherReducerName } from "../../../../5Entites/teacher";
import { coursesReducerName, IBenefitsState } from "../../../../5Entites/сourses";


export interface StateSchema {
    [benefitsReducerName]: IBenefitsResponse,
    [coursesReducerName]: IBenefitsState,
    [feedbackReducerName]: IFeedback,
    [teacherReducerName]: ITeacherState,
    [reviewsReducerName]: IReviewsState,
    [founderReducerName]: IFounderState,
    [newsReducerName]: INewsState,
    [outsourcingReducerName]: IOutsourcingState,
    [contactsReducerName]: IContactsState

}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema
}
