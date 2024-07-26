import React, {useEffect} from 'react';
import cls from "./News.module.scss"
import NewsList from "./NewsList/ui/NewsList";
import {useAppDispatch, useAppSelector} from "../../../6Shared/lib/hooks/useAppReduxToolkitTools/redux";
import {RootState} from "../../../1App/Providers/StoreProvider/config/store";
import {getReviewsList} from "../../../5Entites/reviews/services/getReviewsList";

const News = () => {
    const dispatch = useAppDispatch()
    const dateNews = useAppSelector((state : RootState) => state.news.responseList.results)

    useEffect(() =>{
        dispatch(getReviewsList())
    }, [dispatch])

    return (
        <div className={cls.main}>
            <div className={cls.wrapperTitle}>
                <div className={cls.wrapperSolidLeft}>
                    <div className={cls.solidTop}></div>
                    <div className={cls.solidBottom}></div>
                </div>
                <h3>НОВОСТИ - ПРАКТИКУМ</h3>
                <div className={cls.wrapperSolidRight}>
                    <div className={cls.solidTop}></div>
                    <div className={cls.solidBottom}></div>
                </div>
            </div>
            <NewsList allNews={dateNews}/>
        </div>
    );
};

export default News;