import React from 'react';

import cls from "./TeacherCard.module.scss";

type TTeachersCardProps = {
    img: string,
    name: string,
    profession: string
}

const TeachersCard = (props: TTeachersCardProps) => {
    const { img, name, profession } = props;

    return (
        <div className={cls.main}>
            <div className={cls.wrapperImg}>
                <img src={img} alt=""/>
            </div>
            <div className={cls.title}>
                <h3>{name}</h3>
                <h4>{profession}</h4>
            </div>
        </div>
    );
};

export default TeachersCard;