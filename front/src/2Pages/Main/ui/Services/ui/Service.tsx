import React from 'react';
import cls from "./Service.module.scss"
import {Link} from "react-router-dom";

const Service = () => {

    return (
        <div className={cls.main}>
            <div className={cls.wrapperFull}>
                <div className={cls.wrapperImgTop}>
                    <img src="/assets/img/serviceImg1.jpg" alt=""/>
                </div>
                <div className={cls.wrapperImgBottom}>
                    <div className={cls.wrapperDescription}>
                        <h2>
                            Наши услуги включают:
                        </h2>
                        <p>
                            Аутсорсинг бухгалтерии
                            Восстановление бухгалтерии: Не дайте прошлым ошибкам помешать вашему будущему росту. Мы
                            поможем
                            вам начать с чистого листа.
                            Годовой баланс: Предоставим полный и точный отчет о финансовом состоянии вашего бизнеса за
                            год.
                            Сдача и подготовка отчетов: Будьте уверены в своевременности и точности всех необходимых
                            отчетов.
                            Бухгалтерское обслуживание: От частичной помощи до полного ведения бухгалтерии – выберите
                            оптимальный вариант для вашего бизнеса.
                        </p>
                        <Link to={""}>
                            <button>
                                Узнать больше
                            </button>
                        </Link>
                    </div>
                    <div className={cls.wrapperImgForImgBottom}>
                        <img src="/assets/img/serviceImg2.jpeg" alt=""/>
                    </div>
                </div>
                <div className={cls.backgroundBlue}></div>
            </div>
        </div>
    );
};

export default Service;