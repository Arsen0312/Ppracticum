import React from 'react';

import cls from "./OurServices.module.scss";
import { TServiceOutsourcing } from "../../../api/getServiceListOutsourcing";


type TDescriptionCourses = {
    serviceList: TServiceOutsourcing[] | null
}

const OurServices = (props: TDescriptionCourses) => {
    const { serviceList } = props;

    return (
        <section className={cls.wrapperMain}>
            <div className={cls.main}>
                <h2>Наши услуги</h2>
                <div className={cls.serviceList}>
                    {serviceList?.map((service, id) => (
                        <div className={cls.service}>
                            <div className={cls.wrapperImg}>
                                <img src={service.icon} alt=""/>
                            </div>
                            <div className={cls.description}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;