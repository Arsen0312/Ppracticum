import React from 'react';
import { IoCheckmark } from "react-icons/io5";

import cls from "./MeetTheFounder.module.scss";
import { IFounder } from "../../../../../5Entites/founder";

type TMeetTheFounder = {
    dateFounder: IFounder
}

const MeetTheFounder = (props: TMeetTheFounder) => {
    const { dateFounder } = props;

    return (
        <section className={cls.main}>
            <h2>
                Встречайте!<br/>
                {dateFounder.full_name}
            </h2>
            <div className={cls.wrapperFullContent}>
                <div className={cls.wrapperForAvatarForFounder}>
                    <img src={dateFounder.image} alt=""/>
                </div>
                <div className={cls.wrapperDescription}>
                    <ul>
                        {dateFounder.paragraphs.map((p, id) => (
                            id + 1 !== dateFounder.paragraphs.length
                                ? <>
                                    <li key={id}><span className={cls.wrapperIcons}>
                                        <IoCheckmark size={52}/>
                                    </span>
                                    <span>
                                        {p.paragraphs}
                                    </span>
                                    </li>
                                    <hr/>
                                </>
                                : <li key={id}><span className={cls.wrapperIcons}>
                                    <IoCheckmark size={52}/>
                                </span><span>
                                    {p.paragraphs}
                                </span></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={cls.ancillaryDescription}>
                <p>
                    {dateFounder.description}
                </p>
            </div>
        </section>
    );
};

export default MeetTheFounder;