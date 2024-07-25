import React from 'react'
import cls from "./Probnik.module.scss";

const Probnik = () => {

    return (
        <section className={cls.ProbnikSection}>
            <div className={cls.ProbnikContainer}>
                <h1 className={cls.ProbnikTitle}>Смотреть пробный урок</h1>
                <p className={cls.ProbnikDesc}>Мы предлагаем не просто теоретические знания, но и практические навыки, <br /> которые вы сможете применять каждый день.</p>
                <button className={cls.ProbnikBtn}>СМОТРЕТЬ</button>
            </div>
        </section>
    )
}

export default Probnik