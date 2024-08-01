import React, { useEffect, useState } from 'react';

import OurServices from "./OurServices/ui/OurServices";
import cls from "./Outsourcing.module.scss";
import WeCanDoALotOfThings from "./WeCanDoALotOfThings/ui/WeCanDoALotOfThings";
import WelcomeToOutsourcing from "./WelcomeToCourses/ui/WelcomeToOutsourcing";
import WhyThePracticum from "./WhyThePracticum/ui/WhyThePracticum";
import YourPathToSuccess from "./YourPathToSuccess/ui/YourPathToSuccess";
import { RootState } from "../../../1App/Providers/StoreProvider/config/store";
import { useAppDispatch, useAppSelector } from "../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";
import {
    getServiceListOutsourcing,
    TServiceOutsourcing
} from "../api/getServiceListOutsourcing";
import { getSkillsListOutsourcing, TSkillsOutsourcing } from "../api/getSkillsListOutsourcing";

const Outsourcing = () => {
    const dispatch = useAppDispatch();
    const dateCourses = useAppSelector((state: RootState) => state.courses.responseById);
    const [serviceList, setServiceList] = useState<TServiceOutsourcing[] | null>(null);
    const [skillsList, setSkillsList] = useState<TSkillsOutsourcing[] | null>(null);

    useEffect(() => {
        const getServiceListOutsourcingFetch = async () => {
            try {
                const response = await getServiceListOutsourcing();
                console.log(response);
                setServiceList(response);
            } catch (error) {
                console.error("Ошибка при получении информации о сервисах:", error);
            }
        };

        const getSkillsListOutsourcingFetch = async () => {
            try {
                const response = await getSkillsListOutsourcing();
                console.log(response);
                setSkillsList(response);
            } catch (error) {
                console.error("Ошибка при получении информации о сервисах:", error);
            }
        };

        getSkillsListOutsourcingFetch();
        getServiceListOutsourcingFetch();
    }, []);

    useEffect(() => {
        window.scroll(0, 0);

    }, [dispatch]);

    return (
        <main className={cls.main}>
            <WelcomeToOutsourcing
                backgroundPerson={dateCourses.background_person}
            />
            <OurServices
                serviceList={serviceList}
            />
            <WhyThePracticum/>
            <WeCanDoALotOfThings skillsList={skillsList}/>
            <YourPathToSuccess/>
        </main>
    );
};

export default Outsourcing;