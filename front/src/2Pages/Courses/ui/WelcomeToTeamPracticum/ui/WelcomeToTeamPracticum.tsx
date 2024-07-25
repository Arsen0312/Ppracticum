import React from 'react';
import cls from "./WelcomeToTeamPracticum.module.scss"
import {ITeacher} from "../../../../../5Entites/сourses/types/coursesById";
import Slider from "../../../../../6Shared/simpleComponents /Slider/Slider";
import TeacherCurd from "./TeacherCurd/ui/TeacherCurd";
import teacherCurd from "./TeacherCurd/ui/TeacherCurd";
import {Link} from "react-router-dom";

type TWelcomeToTeamPracticum = {
    allTeachers: ITeacher[] | []
}

const WelcomeToTeamPracticum = (props: TWelcomeToTeamPracticum) => {
    const {allTeachers} = props

    return (
        <section className={cls.wrapperMain}>
            <div className={cls.main}>
                <h2>
                    Познакомьтесь с командой "Практикум"
                </h2>
                <Slider>
                    {allTeachers.map((teacher, id) => (
                        <Link className={cls.curd} to={`${teacher.id}`} key={id}>
                            <TeacherCurd
                                img={teacher.avatar}
                                first_name={teacher.first_name}
                                last_name={teacher.last_name}
                                role={teacher.role}/>
                        </Link>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default WelcomeToTeamPracticum;