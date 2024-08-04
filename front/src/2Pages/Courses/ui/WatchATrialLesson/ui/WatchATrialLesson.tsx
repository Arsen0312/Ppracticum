import React from 'react';

import cls from "./WatchATrialLesson.module.scss";

type TWatchATrialLessonProps = {
    src: string
}

const WatchATrialLesson = (props: TWatchATrialLessonProps) => {
    const { src } = props;

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
            <div className={cls.videoContainer}>
                <iframe src={src}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write;
                    encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
            </div>
        </section>
    );
};

export default WatchATrialLesson;
