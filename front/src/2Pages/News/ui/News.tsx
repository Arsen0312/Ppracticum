import React, {useEffect} from 'react';
import cls from "./News.module.scss"
import NewsList from "./NewsList/ui/NewsList";
import {useAppDispatch, useAppSelector} from "../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";
import {RootState} from "../../../1App/Providers/StoreProvider/config/store";
import { getNewsList } from '../../../5Entites/news/services/getNewsList';

const News = () => {
    const dispatch = useAppDispatch()
    const dateNews = useAppSelector((state : RootState) => state.news.responseList.results)

    useEffect(() =>{
        dispatch(getNewsList())
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
            <NewsList allNews={dateNews} key={dateNews.length}/>
        </div>
    );
};

export default News;