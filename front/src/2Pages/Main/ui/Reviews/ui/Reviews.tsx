import React, {useEffect} from 'react';
import cls from "./Reviews.module.scss"
import Slider from "../../../../../6Shared/simpleComponents /Slider/Slider";
import {CardReviews} from "../../../../../4Features/CardReviews";
import {useAppDispatch, useAppSelector} from "../../../../../6Shared/lib/hooks/useAppReduxToolkitTools/redux";
import {RootState} from "../../../../../1App/Providers/StoreProvider/config/store";
import {getReviewsList} from "../../../../../5Entites/reviews/services/getReviewsList";

const Reviews = () => {
    const dispatch = useAppDispatch()
    const dateNews = useAppSelector((state : RootState) => state.news.responseList.results)

    useEffect(() =>{
        dispatch(getReviewsList())
    }, [dispatch])

    return (
        <section className={cls.main}>
            <h2 className={cls.title}>
                Наши отзывы
            </h2>
            <h3 className={cls.titleDop}>
                говорят сами за себя
            </h3>
            <p className={cls.descriptionTitle}>
                Успехи наших студентов и их положительные отзывы - наша гордость и подтверждение высокого качества
                обучения в "Практикуме". Мы всегда рады помочь вам в достижении ваших профессиональных и личных целей.
            </p>
            <Slider>
                {dateNews.map(review => (
                    <CardReviews name={review.author} description={review.body} className={cls.curdReviews}/>
                ))}
            </Slider>
        </section>
    );
};

export default Reviews;