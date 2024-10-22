import React from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa";

import cls from "./CoursesTeam.module.scss";
import { ITeacher } from '../../../../5Entites/сourses/types/coursesById';

type TCoursesTeamProps = {
    teachers: ITeacher[]
}

const CoursesTeam = (props: TCoursesTeamProps) => {
    const { teachers } = props;
    return (
        <section className={cls.coursesTeamSection}>
            <div className={cls.coursesTeamContainer}>
                <h1 className={cls.coursesTeamTitle}>Познакомтесь c<br/> командой Практикум</h1>
                <div className={cls.coursesCard}>
                    {teachers.map(t => (
                        <div className={cls.cards}>
                            <div className={cls.left}>
                                sdfsd
                                <img src={t.avatar} alt="avatar"/>
                            </div>
                            <div className={cls.right}>
                                <h4 className={cls.role}>{t.role}</h4>
                                <h2 className={cls.name}>{t.first_name} <span>{t.last_name}</span></h2><br/>
                                <p>
                                    {t.description}тут description Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit.
                                    Unde natus quam amet aut ullam repudiandae facere,
                                    sint, hic quo sit dolores sunt in sapiente odit exercitationem
                                    mollitia. Excepturi, mollitia. Nobis voluptatum voluptatem
                                    expedita exercitationem consectetur sint deleniti libero iste nulla!</p>
                                <div className={cls.social}>
                                    <FaFacebook/>
                                    <FaTwitter/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesTeam;