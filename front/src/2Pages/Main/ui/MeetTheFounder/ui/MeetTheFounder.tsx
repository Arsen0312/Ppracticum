import React from 'react';
import cls from "./MeetTheFounder.module.scss"
import {IoCheckmark} from "react-icons/io5";

const MeetTheFounder = () => {
    return (
        <section className={cls.main}>
            <h2>
                Встречайте!<br/>
                Омурзакова Бактыгуль Урманбетовна
            </h2>
            <div className={cls.wrapperFullContent}>
                <div className={cls.wrapperForAvatarForFounder}>
                    <img src="/assets/img/avatarFounder.jpg" alt=""/>
                </div>
                <div className={cls.wrapperDescription}>
                    <ul>
                        <li>
                            <span className={cls.wrapperIcons}>
                                <IoCheckmark size={52}/>
                            </span>
                            <span>
                                Основатель "Практикума", Бактыгуль Урманбетовна, привносит в компанию более 38 лет опыта, в
                            том числе роли главного бухгалтера и специалиста по бухучету в здравоохранении
                            </span>
                        </li>
                        <hr/>
                        <li>
                            <span className={cls.wrapperIcons}>
                                <IoCheckmark size={52}/>
                            </span>
                            Эксперт в МСФО и 1С Бухгалтерия, предлагая услуги от налогового учета до финансовой
                            отчетности. Бактыгуль Урманбетовна стремится к финансовой стабильности клиентов через
                            качественные бухгалтерские и аудиторские услуги, позволяя им сфокусироваться на развитии
                            бизнеса. Она также ведет курсы для финансистов и бухгалтеров, поддерживая профессиональное
                            развитие
                        </li>
                        <hr/>
                        <li>
                            <span className={cls.wrapperIcons}>
                                <IoCheckmark size={52}/>
                            </span>
                            <span>
                                "Практикум" под ее руководством – это не только услуги высшего качества, но и
                            образовательная платформа, способствующая росту и развитию специалистов в финансах
                            </span>
                        </li>
                        <hr/>
                        <li>
                            <span className={cls.wrapperIcons}>
                                <IoCheckmark size={52}/>
                            </span>
                            <span>
                                Добро пожаловать в мир, где ваш успех подкреплен опытом и знаниями Бактыгуль Урманбетовны
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cls.ancillaryDescription}>
                <p>
                    Практикум под ее руководством – это не только услуги высшего качества, но и образовательная
                    платформа, способствующая росту и развитию специалистов в финансах. Добро пожаловать в мир, где ваш
                    успех подкреплен опытом и знаниями Бактыгуль Урманбетовны.
                </p>
            </div>
        </section>
    );
};

export default MeetTheFounder;