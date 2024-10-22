import {
    outsourcingReducerName,
    outsourcingReducer,
    outsourcingActions,
    IOutsourcingState
} from "./slice/outsourcingSlice";
import { IAdvantages } from "./types/outsourcingById";
import { IOutsourcing } from "./types/outsourcingList";

export {
    outsourcingReducerName,
    outsourcingActions,
    outsourcingReducer
};

export type {
    IOutsourcingState,
    IAdvantages,
    IOutsourcing
};