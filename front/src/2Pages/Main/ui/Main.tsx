import React from 'react';
import cls from "./Main.module.scss"
import WelcomeToPracticum from "./WelcomeToPracticum/ui/WelcomeToPracticum";
import PopularCourses from "./PopularCourses/ui/PopularCourses";
import MeetTheFounder from "./MeetTheFounder/ui/MeetTheFounder";
import Service from "./Services/ui/Service";


const Main = () => {

    return (
        <div className={cls.main}>
            <WelcomeToPracticum/>
            <PopularCourses/>
            <MeetTheFounder/>
            <Service/>
        </div>
    );
};

export default Main;