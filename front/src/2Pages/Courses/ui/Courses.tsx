import React, {useEffect} from 'react';
import cls from "./Courses.module.scss";
import WelcomeToCourses from "./WelcomeToCourses/ui/WelcomeToCourses";
import {useAppDispatch, useAppSelector} from "../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";
import {getCoursesById} from "../../../5Entites/сourses/services/getCoursesById";
import {RootState} from "../../../1App/Providers/StoreProvider/config/store";
import {useParams} from "react-router-dom";
import DescriptionCourses from "./DescriptionCourses/ui/DescriptionCourses";
import BenefitsOfACareer from "./Benfits/ui/BenefitsOfACareer";
import WelcomeToTeamPracticum from "./WelcomeToTeamPracticum/ui/WelcomeToTeamPracticum";
import WatchATrialLesson from "./WatchATrialLesson/ui/WatchATrialLesson";
import YourPathToSuccess from "./YourPathToSuccess/ui/YourPathToSuccess";

type TParams = {
    id: string
}

const Courses = () => {
    const { id } = useParams<TParams>()
    const dispatch = useAppDispatch()
    const dateCourses = useAppSelector((state: RootState) => state.courses.responseById)

    console.log(dateCourses);
    
    useEffect(() => {
        window.scroll(0, 0)
        if (id) {
            dispatch(getCoursesById(+id))
        } else {
            console.log("id является undefined")
        }
    }, [dispatch]);

    console.log(dateCourses)

    return (
        <main className={cls.main}>
            <WelcomeToCourses
                title={dateCourses.title}
                description={dateCourses.description}
                background_person={dateCourses.background_person}
            />
            <DescriptionCourses
                purpose={dateCourses.purpose}
                advantages={dateCourses.advantages}
                duration={dateCourses.duration}
            />
            <BenefitsOfACareer tag={dateCourses.tag} skills={dateCourses.skills}/>
            <WelcomeToTeamPracticum allTeachers={dateCourses.teachers}/>
            <WatchATrialLesson/>
            <YourPathToSuccess/>
        </main>
    );
};

export default Courses;