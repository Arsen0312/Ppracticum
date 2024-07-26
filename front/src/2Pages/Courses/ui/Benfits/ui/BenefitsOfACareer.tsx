import React from 'react';
import cls from "./BenefitsOfACareer.module.scss"
import {ISkills} from "../../../../../5Entites/сourses/types/coursesById";

type TBenefitsOfACareer = {
    tag: string | null,
    skills: ISkills[] | []
}

const BenefitsOfACareer = (props: TBenefitsOfACareer) => {
    const { tag, skills } = props

    return (
        <section className={cls.wrapperMain}>
            <div className={cls.semicircle}></div>
            <div className={cls.main}>
                <h2>Преимущества карьеры<br/>{tag ? tag : "этой профессии"}</h2>
                <div className={cls.wrapperForBenefits}>
                    {skills.map(skill => (
                        <div className={cls.cardBenefits}>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default BenefitsOfACareer;