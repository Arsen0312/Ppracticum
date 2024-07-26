import React, { useEffect, useState } from 'react';
import cls from "./TeacherCurd.module.scss";
import { getDescriptionTeacher } from "../getDescriptionTeacher/getDescriptionTeacher";
import { ITeacherByIdResponse } from "../../../../../../../5Entites/teacher/types/teacherById";

type TTeacherCurd = {
    id: number;
    first_name: string;
    last_name: string;
    img: string;
    role: string;
};

const TeacherCurd = (props: TTeacherCurd) => {
    const { first_name, last_name, role, img, id } = props;
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
            <div className={cls.wrapperImg}>
                <img src={img} alt=""/>
            </div>
            <div className={cls.wrapperDescription}>
                <h4>{role}</h4>
                <h2>{first_name} {last_name}</h2>
                <p>
                    {dateTeacher?.description}
                </p>
            </div>
        </div>
    );
};

export default TeacherCurd;
