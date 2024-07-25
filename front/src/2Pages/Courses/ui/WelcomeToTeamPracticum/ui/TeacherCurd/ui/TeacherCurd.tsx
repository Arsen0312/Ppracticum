import React from 'react';
import cls from "./TeacherCurd.module.scss"

type TTeacherCurd = {
    first_name: string,
    last_name: string,
    img: string
    role: string,

}

const TeacherCurd = (props:TTeacherCurd) => {
    const {first_name, last_name, role, img} = props

    return (
        <div className={cls.main}>
            <img src={img} alt=""/>
            <div className={cls.description}>
                <h3>{role}</h3>
                <h4>{first_name} {last_name}</h4>

            </div>
        </div>
    );
};

export default TeacherCurd;