import React from 'react';
import cls from "./Main.module.scss"
import WelcomeToPracticum from "./WelcomeToPracticum/ui/WelcomeToPracticum";


const Main = () => {

    return (
        <div className={cls.main}>
            <WelcomeToPracticum/>
        </div>
    );
};

export default Main;