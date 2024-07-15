import { AxiosInstance } from "axios";
import { benefitsReducerName } from "../../../../5Entites/benefits";
import {IBenefitsResponse} from "../../../../5Entites/benefits/types/benefits";

export interface StateSchema {
    [benefitsReducerName]: IBenefitsResponse,

}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema
}
