import React from 'react';

import cls from "./WatchATrialLesson.module.scss";

const WatchATrialLesson = () => {
    return (
        <section className={cls.main}>
            <h2>
                Смотреть пробный урок
            </h2>
            <p>
                Мы предлагаем не просто теоретические знания, но и
                практические навыки, которые вы сможете применять
                каждый день.
            </p>
            <button>
                Смотреть
            </button>
        </section>
    );
};

export default WatchATrialLesson;