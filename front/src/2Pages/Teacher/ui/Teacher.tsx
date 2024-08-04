import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

import cls from "./Teacher.module.scss";
import { RootState } from "../../../1App/Providers/StoreProvider/config/store";
import { getTeacherById } from "../../../5Entites/teacher/services/getTeacherById";
import { useAppDispatch, useAppSelector } from "../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";
import { getTitleCoursesById } from "../api/getTitleCoursesById";

const Teacher = () => {
    const dispatch = useAppDispatch();
    const teacher = useAppSelector((state: RootState) => state.teacher.response);
    const { id } = useParams<{ id: string }>();
    const [courseTitles, setCourseTitles] = useState<string[]>([]);

    useEffect(() => {
        window.scroll(0, 0);
        if (id) {
            dispatch(getTeacherById(+id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        const fetchCourseTitles = async () => {
            if (teacher?.courses.length) {
                const titles = await Promise.all(teacher.courses.map(courseId => getTitleCoursesById(courseId)));
                setCourseTitles(titles);
            }
        };

        fetchCourseTitles();
    }, [teacher]);

    return (
        <main className={cls.main}>
            <div className={cls.wrapperImg}>
                {teacher?.avatar && <img src={teacher.avatar} alt="Преподаватель"/>}
            </div>
            <div className={cls.description}>
                <h3>О ПРЕПОДАВАТЕЛЕ</h3>
                {teacher ? (
                    <>
                        <h1>{teacher.first_name} {teacher.last_name} {teacher.patronymic}</h1>
                        <p>{teacher.description}</p>
                        <h4>Роль: {teacher.role}</h4>
                        <h4>Курсы:</h4>
                        <ul>
                            {courseTitles.map((title, index) => (
                                <li key={index}>
                                    <Link to={`/courses/${teacher.courses[index]}`}>
                                        <b>{`→ ${title}`}</b>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>Загрузка данных...</p>
                )}
            </div>
        </main>
    );
};

export default Teacher;
