import React, {useEffect} from 'react';
import cls from "./Main.module.scss"
import WelcomeToPracticum from "./WelcomeToPracticum/ui/WelcomeToPracticum";
import PopularCourses from "./PopularCourses/ui/PopularCourses";
import MeetTheFounder from "./MeetTheFounder/ui/MeetTheFounder";
import Service from "./Services/ui/Service";
import OurTeam from "./OurTeam/ui/OurTeam";
import Reviews from "./Reviews/ui/Reviews";
import JoinUs from "./JoinUs/ui/JoinUs";
import {useAppDispatch, useAppSelector} from "../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";
import {RootState} from "../../../1App/Providers/StoreProvider/config/store";
import {getFounder} from "../../../5Entites/founder/services/getFounder";


const Main = () => {
    const dispatch = useAppDispatch()
    const dateFounder = useAppSelector((state: RootState) => state.founder.response.results[0])

    useEffect(() => {
        dispatch(getFounder())
    }, [dispatch]);

    return (
        <main className={cls.main}>
            <WelcomeToPracticum/>
            <PopularCourses/>
            <MeetTheFounder dateFounder={dateFounder}/>
            <Service/>
            <OurTeam/>
            <Reviews/>
            <JoinUs/>
        </main>
    );
};

export default Main;