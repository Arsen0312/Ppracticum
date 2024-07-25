import { AxiosInstance } from "axios";
import { benefitsReducerName } from "../../../../5Entites/benefits";
import {IBenefitsResponse} from "../../../../5Entites/benefits";
import {coursesReducerName} from "../../../../5Entites/сourses";
import {IBenefitsState} from "../../../../5Entites/сourses";
import {feedbackReducerName, IFeedback} from "../../../../4Features/Feedback/postFeedback";

export interface StateSchema {
    [benefitsReducerName]: IBenefitsResponse,
    [coursesReducerName]: IBenefitsState,
    [feedbackReducerName]: IFeedback

}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema
}
