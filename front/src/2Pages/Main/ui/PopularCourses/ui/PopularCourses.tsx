import React from 'react';
import cls from "./PopularCourses.module.scss"
import {CurdAdvantages} from "../../../../../4Features/CurdAdvantages";

const PopularCourses = () => {
    return (
        <div className={cls.main}>
            <section className={cls.section1}>
                <div className={cls.title}>
                    <h1>Наши <br/>самые популярные курсы</h1>
                </div>
                <div className={cls.wrapperContent}>
                    <div className={cls.contentLeft}>
                        <div className={cls.wrapperImg}>
                            <img src="/assets/img/top_courses.jpg" alt=""/>
                        </div>
                        <div className={cls.description}>
                            <p>
                                Мы предлагаем обучающие курсы, которые помогут вам и вашему персоналу повысить уровень знаний и навыков в области бухгалтерии и компьютерной грамотности.
                            </p>
                        </div>
                    </div>
                    <div className={cls.contentRight}>
                        <ul className={cls.listExcellencies}>
                            <li>
                                Курс практической бухгалтерии: Работа с 1С Предприятие
                            </li>
                            <hr/>
                            <li>
                                Курс практической бухгалтерии: Работа с 1С Предприятие
                            </li>
                            <hr/>
                            <li>
                                Эффективное управление с 1С 8.3 УНФ: Подготовка для бизнеса в Кыргызстане
                            </li>
                            <hr/>
                            <li>
                                Программирование для школьников (01 юниор)
                            </li>
                            <hr/>
                            <li>
                                Введение в цифровой мир: Основы компьютерной грамотности
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={cls.section2}>
                <div className={cls.wrapperImgs}>
                    <div className={cls.wrapperOneImg}>
                        <div className={cls.wrapperFirst}><img src="/assets/img/1.jpeg" alt=""/></div>
                        <div className={cls.wrapperLast}><img src="/assets/img/2.jpeg" alt=""/></div>
                    </div>
                    <div className={cls.wrapperTwoImg}>
                        <div className={cls.wrapperFirst}><img src="/assets/img/3.jpeg" alt=""/></div>
                        <div className={cls.wrapperLast}><img src="/assets/img/4.jpeg" alt=""/></div>
                    </div>
                    <div className={cls.blueBackground}></div>
                </div>
            </section>
            <section className={cls.section3}>
                <div>
                    <h2>
                        Откройте для себя уникальные преимущества<br/> обучения и развития в "Практикуме"
                    </h2>
                </div>
                <div className={cls.scrollBarAdvantages}>
                        <CurdAdvantages className={cls.wrapperCurd} title={'ПОДДЕРЖКА НА ПУТИ К КАРЬЕРНОМУ РОСТУ'} description={'Мы гордимся тем, что предоставляем нашим выпускникам поддержку в трудоустройстве - выдающееся достижение среди компаний Кыргызстана. Более 500 учеников уже воспользовались этой уникальной возможностью для старта и развития своих карьер.'}/>
                        <CurdAdvantages className={cls.wrapperCurd} title={'ПОДДЕРЖКА НА ПУТИ К КАРЬЕРНОМУ РОСТУ'} description={'Мы гордимся тем, что предоставляем нашим выпускникам поддержку в трудоустройстве - выдающееся достижение среди компаний Кыргызстана. Более 500 учеников уже воспользовались этой уникальной возможностью для старта и развития своих карьер.'}/>
                        <CurdAdvantages className={cls.wrapperCurd} title={'ПОДДЕРЖКА НА ПУТИ К КАРЬЕРНОМУ РОСТУ'} description={'Мы гордимся тем, что предоставляем нашим выпускникам поддержку в трудоустройстве - выдающееся достижение среди компаний Кыргызстана. Более 500 учеников уже воспользовались этой уникальной возможностью для старта и развития своих карьер.'}/>
                        <CurdAdvantages className={cls.wrapperCurd} title={'ПОДДЕРЖКА НА ПУТИ К КАРЬЕРНОМУ РОСТУ'} description={'Мы гордимся тем, что предоставляем нашим выпускникам поддержку в трудоустройстве - выдающееся достижение среди компаний Кыргызстана. Более 500 учеников уже воспользовались этой уникальной возможностью для старта и развития своих карьер.'}/>
                        <CurdAdvantages className={cls.wrapperCurd} title={'ПОДДЕРЖКА НА ПУТИ К КАРЬЕРНОМУ РОСТУ'} description={'Мы гордимся тем, что предоставляем нашим выпускникам поддержку в трудоустройстве - выдающееся достижение среди компаний Кыргызстана. Более 500 учеников уже воспользовались этой уникальной возможностью для старта и развития своих карьер.'}/>
                        <CurdAdvantages className={cls.wrapperCurd} title={'ПОДДЕРЖКА НА ПУТИ К КАРЬЕРНОМУ РОСТУ'} description={'Мы гордимся тем, что предоставляем нашим выпускникам поддержку в трудоустройстве - выдающееся достижение среди компаний Кыргызстана. Более 500 учеников уже воспользовались этой уникальной возможностью для старта и развития своих карьер.'}/>
                        <CurdAdvantages className={cls.wrapperCurd} title={'ПОДДЕРЖКА НА ПУТИ К КАРЬЕРНОМУ РОСТУ'} description={'Мы гордимся тем, что предоставляем нашим выпускникам поддержку в трудоустройстве - выдающееся достижение среди компаний Кыргызстана. Более 500 учеников уже воспользовались этой уникальной возможностью для старта и развития своих карьер.'}/>
                        <CurdAdvantages className={cls.wrapperCurd} title={'ПОДДЕРЖКА НА ПУТИ К КАРЬЕРНОМУ РОСТУ'} description={'Мы гордимся тем, что предоставляем нашим выпускникам поддержку в трудоустройстве - выдающееся достижение среди компаний Кыргызстана. Более 500 учеников уже воспользовались этой уникальной возможностью для старта и развития своих карьер.'}/>
                </div>
            </section>
        </div>
    );
};

export default PopularCourses;