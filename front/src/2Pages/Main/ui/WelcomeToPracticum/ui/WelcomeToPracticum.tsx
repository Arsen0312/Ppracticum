import React from 'react';
import cls from "./WelcomeToPracticum.module.scss"
import {Link} from "react-router-dom";

const WelcomeToPracticum = () => {

    return (
        <div className={cls.main}>
            <div className={cls.overlay}></div>
            <div className={cls.wrapperContent}>
                <h1>
                    Добро пожаловать в Практикум
                </h1>
                <p>
                    Наши услуги
                </p>
                <div className={cls.wrapperNavigation}>
                    <Link to={''}>
                        Аутсорсинг бухгалтерии
                    </Link>
                    <Link to={''}>
                        Бухгалтерия для начинающих
                    </Link>
                    <Link to={''}>
                        1C предприятие
                    </Link>
                    <Link to={''}>
                        Подготовка бизнеса
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomeToPracticum;