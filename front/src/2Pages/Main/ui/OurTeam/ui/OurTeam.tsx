import React from 'react';
import cls from "./OurTeam.module.scss"
import TeachersCard from "../../../../../4Features/TeachersCard/ui/TeachersCard";
import Slider from "../../../../../6Shared/simpleComponents /Slider/Slider";

const OurTeam = () => {

    return (
        <div className={cls.main}>
            <h2>
                Встречайте нашу команду – основу успеха Практикума!
            </h2>
            <p>
                В "Практикуме" мы гордимся нашими талантливыми специалистами, каждый из которых вносит уникальный вклад
                в успех нашей компании и ее клиентов. Наша команда состоит из опытных профессионалов, готовых поделиться
                своими знаниями и опытом для вашего развития.
            </p>
            <Slider>
                <TeachersCard img={'/assets/img/teacher1.jpeg'} name={'ДУШАБАЕВА ЖЫЛДЫЗ АБДЫРАШИТОВНА'} profession={'ПРЕПОДАВАТЕЛЬ'} className={cls.curdTeacher}/>
                <TeachersCard img={'/assets/img/teacher1.jpeg'} name={'ДУШАБАЕВА ЖЫЛДЫЗ АБДЫРАШИТОВНА'} profession={'ПРЕПОДАВАТЕЛЬ'} className={cls.curdTeacher}/>
                <TeachersCard img={'/assets/img/teacher1.jpeg'} name={'ДУШАБАЕВА ЖЫЛДЫЗ АБДЫРАШИТОВНА'} profession={'ПРЕПОДАВАТЕЛЬ'} className={cls.curdTeacher}/>
                <TeachersCard img={'/assets/img/teacher1.jpeg'} name={'ДУШАБАЕВА ЖЫЛДЫЗ АБДЫРАШИТОВНА'} profession={'ПРЕПОДАВАТЕЛЬ'} className={cls.curdTeacher}/>
                <TeachersCard img={'/assets/img/teacher1.jpeg'} name={'ДУШАБАЕВА ЖЫЛДЫЗ АБДЫРАШИТОВНА'} profession={'ПРЕПОДАВАТЕЛЬ'} className={cls.curdTeacher}/>
                <TeachersCard img={'/assets/img/teacher1.jpeg'} name={'ДУШАБАЕВА ЖЫЛДЫЗ АБДЫРАШИТОВНА'} profession={'ПРЕПОДАВАТЕЛЬ'} className={cls.curdTeacher}/>
                <TeachersCard img={'/assets/img/teacher1.jpeg'} name={'ДУШАБАЕВА ЖЫЛДЫЗ АБДЫРАШИТОВНА'} profession={'ПРЕПОДАВАТЕЛЬ'} className={cls.curdTeacher}/>
            </Slider>
        </div>
    );
};

export default OurTeam;