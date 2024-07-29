import React, {useEffect} from 'react';
import cls from "./PopularCourses.module.scss"
import {CardAdvantages} from "../../../../../4Features/CardAdvantages";
import Slider from '../../../../../6Shared/simpleComponents /Slider/Slider';
import {getBenefitsList} from "../../../../../5Entites/benefits/services/getBenefitsList";
import {RootState} from "../../../../../1App/Providers/StoreProvider/config/store";
import {getCoursesList} from "../../../../../5Entites/сourses/services/getCoursesList";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";

const PopularCourses = () => {
    const dispatch = useAppDispatch()
    const result = useAppSelector((state: RootState) => state.benefits.response.results)
    const cursesList = useAppSelector((state: RootState) => state.courses.responseList.results)

    useEffect(() => {
        dispatch(getBenefitsList())
        dispatch(getCoursesList())
    }, []);

    return (
        <div className={cls.main}>
            <section className={cls.section1}>
                <div className={cls.title}>
                    <h1>Наши <br/>самые популярные курсы</h1>
                </div>
                <div className={cls.wrapperContent}>
                    <div className={cls.contentLeft}>
                        <div className={cls.wrapperImg}>
                            <img src="/assets/img/top_courses.jpg" alt=""/>
                        </div>
                        <div className={cls.description}>
                            <p>
                                Мы предлагаем обучающие курсы, которые помогут вам и вашему персоналу повысить уровень
                                знаний и навыков в области бухгалтерии и компьютерной грамотности.
                            </p>
                        </div>
                    </div>
                    <div className={cls.contentRight}>
                        <ul className={cls.listExcellencies}>
                            {cursesList.map((courses, id) => (
                                id + 1 == cursesList.length
                                    ? <Link to={`courses/${courses.id}`}>
                                        <li key={courses.id}>{courses.title}</li>
                                    </Link>
                                    : <><Link to={`courses/${courses.id}`}>
                                        <li key={courses.id}>{courses.title}</li>
                                    </Link><hr/>
                                    </>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className={cls.section2}>
                <div className={cls.wrapperImgs}>
                    <div className={cls.wrapperOneImg}>
                        <div className={cls.wrapperFirst}><img src="/assets/img/1.jpeg" alt=""/></div>
                        <div className={cls.wrapperLast}><img src="/assets/img/2.jpeg" alt=""/></div>
                    </div>
                    <div className={cls.wrapperTwoImg}>
                        <div className={cls.wrapperFirst}><img src="/assets/img/3.jpeg" alt=""/></div>
                        <div className={cls.wrapperLast}><img src="/assets/img/4.jpeg" alt=""/></div>
                    </div>
                    <div className={cls.blueBackground}></div>
                </div>
            </section>
            <section className={cls.section3}>
                <div>
                    <h2>
                        Откройте для себя уникальные преимущества<br/> обучения и развития в "Практикуме"
                    </h2>
                </div>
                <Slider>
                    {result.map(benefit => (
                        <CardAdvantages key={benefit.id} className={cls.wrapperCurd} title={benefit.title}
                                        description={benefit.description}/>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export default PopularCourses;