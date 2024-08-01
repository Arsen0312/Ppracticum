import React from 'react';

import cls from "./DescriptionCourses.module.scss";
import { IAdvantages } from "../../../../../5Entites/сourses";


type TDescriptionCourses = {
    purpose: string,
    advantages: IAdvantages[],
    duration: string
}

const DescriptionCourses = (props: TDescriptionCourses) => {
    const { purpose, advantages, duration } = props;

    return (
        <section className={cls.wrapperMain}>
            <div className={cls.main}>
                <div className={cls.leftContent}>
                    <ul>
                        <h2>ЧТО ВАС ЖДЕТ?</h2>
                        <li>
                            <h3>Главная цель курса</h3>
                            <p>
                                {purpose}
                            </p>
                        </li>
                        <li className={cls.coursesPeriod}>
                            <h3>Продолжительность курса</h3>
                            <p>
                                {duration.split("  ").map(elem => (
                                    <div>{elem}</div>
                                ))}
                            </p>
                        </li>
                    </ul>
                </div>
                <hr/>
                <div className={cls.rightContent}>
                    <ul>
                        <h2>НА ПРОТЯЖЕНИИ НАШЕГО КУРСА ВЫ ОСВОИТЕ:</h2>
                        {advantages.map(advantage => (
                            <li>
                                <h3>{advantage.title}</h3>
                                <p>{advantage.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DescriptionCourses;