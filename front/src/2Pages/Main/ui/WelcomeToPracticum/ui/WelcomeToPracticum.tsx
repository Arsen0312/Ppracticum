import React from 'react';
import { Link } from "react-router-dom";

import cls from "./WelcomeToPracticum.module.scss";

const WelcomeToPracticum = () => {

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
                    <Link to="">
                        Бухгалтерия для начинающих
                    </Link>
                    <Link to="">
                        1C предприятие
                    </Link>
                    <Link to="">
                        Подготовка бизнеса
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WelcomeToPracticum;