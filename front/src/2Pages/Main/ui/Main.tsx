import React from 'react';
import cls from "./Main.module.scss"
import WelcomeToPracticum from "./WelcomeToPracticum/ui/WelcomeToPracticum";
import PopularCourses from "./PopularCourses/ui/PopularCourses";
import MeetTheFounder from "./MeetTheFounder/ui/MeetTheFounder";
import Service from "./Services/ui/Service";
import OurTeam from "./OurTeam/ui/OurTeam";
import Reviews from "./Reviews/ui/Reviews";
import JoinUs from "./JoinUs/ui/JoinUs";


const Main = () => {

    return (
        <div className={cls.main}>
            <WelcomeToPracticum/>
            <PopularCourses/>
            <MeetTheFounder/>
            <Service/>
            <OurTeam/>
            <Reviews/>
            <JoinUs/>
        </div>
    );
};

export default Main;