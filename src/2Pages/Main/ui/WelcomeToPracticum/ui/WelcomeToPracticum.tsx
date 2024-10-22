import React, { useState, useEffect } from 'react';
import { GrCatalogOption } from "react-icons/gr";
import { PiBooksBold } from "react-icons/pi";
import { Link } from "react-router-dom";

import bgMain1 from "./images/bgMain1.webp";
import bgMain2 from "./images/bgMain2.webp";
import bgMain3 from "./images/bgMain3.webp";
import bgMain4 from "./images/bgMain4.webp";
import cls from "./WelcomeToPracticum.module.scss";
import { RootState } from "../../../../../1App/Providers/StoreProvider/config/store";
import { useAppSelector } from "../../../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";

const images = [bgMain1, bgMain2, bgMain3, bgMain4];

const WelcomeToPracticum = () => {
    const courses = useAppSelector((state: RootState) => state.courses.responseList.results);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [progressBars, setProgressBars] = useState<number[]>(new Array(images.length).fill(0));
    const [resetProgress, setResetProgress] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressBars((prevProgressBars) => {
                const updatedProgressBars = [...prevProgressBars];

                if (updatedProgressBars[currentIndex] >= 100) {
                    const nextIndex = (currentIndex + 1) % images.length;
                    setCurrentIndex(nextIndex);

                    if (nextIndex === 0) {
                        setResetProgress(true);
                    }

                    return updatedProgressBars;
                }

                updatedProgressBars[currentIndex] += 1; // Увеличиваем на 1% за интервал
                return updatedProgressBars;
            });
        }, 100); // Интервал в 100 мс

        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        if (resetProgress) {
            setProgressBars(new Array(images.length).fill(0));
            setResetProgress(false);
        }
    }, [resetProgress]);

    return (
        <section className={cls.main}>
            <div className={cls.description}>
                <div className={cls.header}>
                    <Link className={cls.Practicum} to="##">
                        Practicum
                    </Link>
                    <button type="button">
                        <GrCatalogOption/>
                        каталог
                    </button>
                    <Link className={cls.a} to="##">
                        <PiBooksBold/>
                        для детей
                    </Link>
                </div>
                <div className={cls.wrapperH1}>
                    <h1>
                        Hайди себя и новую профессию в Practicum
                    </h1>
                    <div className={cls.progressBarContener}>
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={cls.wrapperProgressBar}
                            >
                                <div
                                    className={`${cls.progressBar} ${resetProgress ? cls.noTransition : ''}`}
                                    style={{ width: `${progressBars[index]}%` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cls.boxImages}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`${cls.l} ${index === currentIndex ? cls.opacityFull : ''}`}
                        alt=""
                    />
                ))}
            </div>
        </section>
    );
};

export default WelcomeToPracticum;
