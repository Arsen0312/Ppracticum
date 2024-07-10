import React from 'react';
import cls from "./Main.module.scss"
import WelcomeToPracticum from "./WelcomeToPracticum/ui/WelcomeToPracticum";
import PopularCourses from "./PopularCourses/ui/PopularCourses";


const Main = () => {

    return (
        <div className={cls.main}>
            <WelcomeToPracticum/>
            <PopularCourses/>
        </div>
    );
};

export default Main;