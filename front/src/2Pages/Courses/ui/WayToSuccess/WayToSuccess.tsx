import React from 'react'
import cls from "./WayToSuccess.module.scss";

const WayToSuccess = () => {
  return (
    <section className={cls.WayToSuccessSection}>
        <div className={cls.WayToSuccessContainer}>
            <h1>Ваш путь к успеху <br /> начинается здесь!</h1>
            <p>Не упустите шанс стать частью курса «Курс практической бухгалтерии: Работа с 1С Предприятие». Расширьте свои горизонты и откройте новые возможности для карьерного и личностного роста. <br /> <strong>Записывайтесь сейчас и начните свой путь к успеху <br /> вместе с нами!</strong></p>
            <button>СВЯЗАТЬСЯ С НАМИ</button>
        </div>
    </section>
  )
}

export default WayToSuccess