import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import BenefitsOfACareer from "./Benfits/ui/BenefitsOfACareer";
import cls from "./Courses.module.scss";
import DescriptionCourses from "./DescriptionCourses/ui/DescriptionCourses";
import WatchATrialLesson from "./WatchATrialLesson/ui/WatchATrialLesson";
import WelcomeToCourses from "./WelcomeToCourses/ui/WelcomeToCourses";
import WelcomeToTeamPracticum from "./WelcomeToTeamPracticum/ui/WelcomeToTeamPracticum";
import YourPathToSuccess from "./YourPathToSuccess/ui/YourPathToSuccess";
import { RootState } from "../../../1App/Providers/StoreProvider/config/store";
import { getCoursesById } from "../../../5Entites/сourses/services/getCoursesById";
import { useAppDispatch, useAppSelector } from "../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";

type TParams = {
    id: string
}

const Courses = () => {
    const { id } = useParams<TParams>();
    const dispatch = useAppDispatch();
    const dateCourses = useAppSelector((state: RootState) => state.courses.responseById);

    console.log(dateCourses);

    useEffect(() => {
        window.scroll(0, 0);
        if (id) {
            dispatch(getCoursesById(+id));
        } else {
            console.log("id является undefined");
        }
    }, [dispatch, id]);

    console.log(dateCourses);

    return (
        <main className={cls.main}>
            <WelcomeToCourses
                title={dateCourses.title}
                description={dateCourses.description}
                backgroundPerson={dateCourses.background_person}
            />
            <DescriptionCourses
                purpose={dateCourses.purpose}
                advantages={dateCourses.advantages}
                duration={dateCourses.duration}
            />
            <BenefitsOfACareer tag={dateCourses.tag} skills={dateCourses.skills}/>
            <WelcomeToTeamPracticum allTeachers={dateCourses.teachers}/>
            <WatchATrialLesson/>
            <YourPathToSuccess title={dateCourses.title}/>
        </main>
    );
};

export default Courses;