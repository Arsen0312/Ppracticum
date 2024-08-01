import React from 'react';

import TeacherCurd from "./TeacherCurd/ui/TeacherCurd";
import cls from "./WelcomeToTeamPracticum.module.scss";
import { ITeacher } from "../../../../../5Entites/сourses/types/coursesById";
import Slider from "../../../../../6Shared/simpleComponents /Slider/Slider";


type TWelcomeToTeamPracticum = {
    allTeachers: ITeacher[] | []
}

const WelcomeToTeamPracticum = (props: TWelcomeToTeamPracticum) => {
    const { allTeachers } = props;

    return (
        <section className={cls.wrapperMain}>
            <div className={cls.main}>
                <h2>
                    Познакомьтесь с командой Практикум
                </h2>
                <Slider>
                    {allTeachers.map((teacher, id) => (
                        <TeacherCurd
                            id={teacher.id}
                            img={teacher.avatar}
                            firstName={teacher.first_name}
                            lastName={teacher.last_name}
                            role={teacher.role}/>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default WelcomeToTeamPracticum;