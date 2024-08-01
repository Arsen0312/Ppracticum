import React from 'react';

import cls from "./NewsList.module.scss";
import { INewsList } from "../../../../../5Entites/news";

type TNewsList = {
    allNews: INewsList[]
}

const NewsList = (props: TNewsList) => {
    const { allNews } = props;

    return (
        <div className={cls.main}>
            {allNews.map(news => (
                <div className={cls.wrapperNews} key={news.id}>
                    <div className={cls.wrapperImg}>
                        <img src={news.image} alt=""/>
                    </div>
                    <div className={cls.news}>
                        <div className={cls.titleAndCreate}>
                            <h2>
                                {news.title}
                            </h2>
                            <h5>
                                {news.created_at}
                            </h5>
                        </div>
                        <p>
                            {news.body}
                        </p>
                    </div>
                </div>
            )
            )}
        </div>
    )
    ;
};

export default NewsList;