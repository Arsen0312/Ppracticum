import React from 'react';
import { Link } from "react-router-dom";

import cls from "./TeacherCurd.module.scss";

type TTeacherCurd = {
    id: number;
    firstName: string;
    lastName: string;
    img: string;
    role: string;
};

const TeacherCurd = (props: TTeacherCurd) => {
    const { firstName, lastName, role, img, id } = props;

    return (
        <div className={cls.main}>
            <Link to={`/teacher/${id}`}>
                <div className={cls.wrapperImg}>
                    <img src={img} alt=""/>
                </div>
                <div className={cls.wrapperDescription}>
                    <h4>{role}</h4>
                    <h2>{firstName} {lastName}</h2>
                </div>
            </Link>
        </div>
    );
};

export default TeacherCurd;
