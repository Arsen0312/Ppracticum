import React, {useEffect} from 'react';
import cls from "./OurTeam.module.scss"
import TeachersCard from "../../../../../4Features/TeachersCard/ui/TeachersCard";
import Slider from "../../../../../6Shared/simpleComponents /Slider/Slider";
import {useAppDispatch, useAppSelector} from "../../../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";
import {RootState} from "../../../../../1App/Providers/StoreProvider/config/store";
import {getTeacherList} from "../../../../../5Entites/teacher/services/getTeacherList";

const OurTeam = () => {
    const dispatch = useAppDispatch()
    const teacherList = useAppSelector((state: RootState) => state.teacher.responseList.results)

    useEffect(() => {
        dispatch(getTeacherList())
    }, []);

    console.log(teacherList)

    return (
        <section className={cls.main}>
            <h2>
                Встречайте нашу команду – основу успеха Практикума!
            </h2>
            <p>
                В "Практикуме" мы гордимся нашими талантливыми специалистами, каждый из которых вносит уникальный вклад
                в успех нашей компании и ее клиентов. Наша команда состоит из опытных профессионалов, готовых поделиться
                своими знаниями и опытом для вашего развития.
            </p>
            <Slider>
                {teacherList.map((teacher) => (
                    <TeachersCard img={'/assets/img/teacher1.jpeg'} name={teacher.first_name + " " + teacher.last_name} profession={teacher.role} className={cls.curdTeacher}/>
                ))}
            </Slider>
        </section>
    );
};

export default OurTeam;