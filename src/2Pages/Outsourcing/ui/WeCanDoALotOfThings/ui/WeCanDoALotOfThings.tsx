import React from 'react';

import cls from "./WeCanDoALotOfThings.module.scss";
import { TSkillsOutsourcing } from "../../../api/getSkillsListOutsourcing";

type TWeCanDoALotOfThings = {
    skillsList: TSkillsOutsourcing[] | null
}

const WeCanDoALotOfThings = (props: TWeCanDoALotOfThings) => {
    const { skillsList } = props;

    return (
        <section className={cls.main}>
            <h2>
                Мы многое умеем
            </h2>
            <div className={cls.skillList}>
                {skillsList?.map(skill => (
                    <div className={cls.skill}>
                        <div className={cls.img}>
                            <img src={skill.icon} alt=""/>
                        </div>
                        <h3>{skill.title}</h3>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default WeCanDoALotOfThings;