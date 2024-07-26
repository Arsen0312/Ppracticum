import React from 'react';
import cls from "./NewsList.module.scss"
import {IReviews} from "../../../../../5Entites/reviews/types/reviewsList";

type TNewsList = {
    allNews: IReviews[]
}

const NewsList = (props: TNewsList) => {
    const {allNews} = props

    return (
        <div className={cls.main}>
            {allNews.map(news => (
                <div className={cls.news}>
                    <h2>
                        {news.author}
                    </h2>
                    <p>
                        {news.body}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default NewsList;