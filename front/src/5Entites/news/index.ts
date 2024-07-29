import { newsReducerName, newsReducer, newsActions, INewsState } from "./slice/newsSlice";

import { INewsList } from "./types/newsList"

export {
    newsReducerName,
    newsActions,
    newsReducer

}

export type {
    INewsState,
    INewsList
}