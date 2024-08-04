import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import cls from "./TeacherCurd.module.scss";
import { ITeacherByIdResponse } from "../../../../../../../5Entites/teacher/types/teacherById";
import { getDescriptionTeacher } from "../getDescriptionTeacher/getDescriptionTeacher";

type TTeacherCurd = {
    id: number;
    firstName: string;
    lastName: string;
    img: string;
    role: string;
};

const TeacherCurd = (props: TTeacherCurd) => {
    const { firstName, lastName, role, img, id } = props;
    const [dateTeacher, setDateTeacher] = useState<ITeacherByIdResponse | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getDescriptionTeacher(id);
            if (res) {
                setDateTeacher(res);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className={cls.main}>
            <Link to={`/teacher/${id}`}>
                <div className={cls.wrapperImg}>
                    <img src={img} alt=""/>
                </div>
                <div className={cls.wrapperDescription}>
                    <h4>{role}</h4>
                    <h2>{firstName} {lastName}</h2>
                    <p>
                        {dateTeacher?.description}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default TeacherCurd;
