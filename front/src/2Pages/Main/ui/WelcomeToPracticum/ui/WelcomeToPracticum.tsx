import React from 'react';
import { Link } from "react-router-dom";

import cls from "./WelcomeToPracticum.module.scss";
import { RootState } from "../../../../../1App/Providers/StoreProvider/config/store";
import { useAppSelector } from "../../../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";

const WelcomeToPracticum = () => {
    const courses = useAppSelector((state: RootState) => state.courses.responseList.results);

    return (
        <section className={cls.main}>
            <div className={cls.overlay}/>
            <div className={cls.wrapperContent}>
                <h1>
                    Добро пожаловать в Практикум
                </h1>
                <p>
                    Наши услуги
                </p>
                <div className={cls.wrapperNavigation}>
                    <Link to="/outsourcing">
                        Аутсорсинг бухгалтерии
                    </Link>
                    {courses.map((course, id) => (
                        id <= 2
                            ? <Link to={`/courses/${course.id}`}>
                                {course.title}
                            </Link>
                            : null
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WelcomeToPracticum;