import React from 'react';
import cls from "./WelcomeToPracticum.module.scss"

const WelcomeToPracticum = () => {

    return (
        <div className={cls.main}>
            <div className={cls.overlay}></div>
            <h1>
                Добро пожаловать в Практикум
            </h1>
            <div className={cls.wrapper}>

            </div>
        </div>
    );
};

export default WelcomeToPracticum;