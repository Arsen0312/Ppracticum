import React from 'react';
import cls from "./WatchATrialLesson.module.scss"

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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bbPQSJJKULY?si=NH42Ktz_f5g16O_h"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>
    );
};

export default WatchATrialLesson;