import React from 'react';

import cls from "./JoinUs.module.scss";
import { Feedback } from "../../../../../4Features/Feedback";

const JoinUs = () => {

    return (
        <section className={cls.main}>
            <div className={cls.wrapper}>
                <h2 className={cls.title}>Присоединяйтесь к нам в Практикум!</h2>
                <p className={cls.description}>
                    Приходите за новыми знаниями и навыками.
                    Мы всегда открыты и готовы поддержать вас на каждом этапе
                    обучения и развития вашей карьеры.
                    Ваши цели - наш приоритет.</p>
                <div className={cls.wrapperFeedback}>
                    <Feedback/>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;