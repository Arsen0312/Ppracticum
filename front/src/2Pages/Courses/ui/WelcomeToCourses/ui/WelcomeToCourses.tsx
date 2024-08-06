import React, { useRef, useState } from 'react';

import cls from './WelcomeToCourses.module.scss';
import { Feedback } from '../../../../../4Features/Feedback';
import useOutsideClick from '../../../../../6Shared/libs/hooks/useOutsideClick/useOutsideClick';
import { Modal } from "../../../../../6Shared/simpleComponents /Modal";

type TWelcomeToCourses = {
    title: string;
    description: string;
    backgroundPerson: string;
};

const WelcomeToCourses = (props: TWelcomeToCourses) => {
    const { title, description, backgroundPerson } = props;

    const [isModeModal, setIsModeModal] = useState<boolean>(false);
    const ref = useRef(null);

    const offModalWindow = () => setIsModeModal(false);

    useOutsideClick(ref, offModalWindow);

    return (
        <section className={cls.wrapperMain}>
            <div className={cls.main}>
                <div className={cls.wrapperDescriptionCourses}>
                    <h3>ОБУЧЕНИЕ ПРАКТИКУМ</h3>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button type="button" onClick={() => setIsModeModal(true)}>Подробнее</button>
                </div>
                <Modal mode={isModeModal} ref={ref}>
                    <Feedback/>
                </Modal>
            </div>
            <div className={cls.wrapperImg}>
                <img
                    src={backgroundPerson}
                    alt="background_person"
                />
            </div>
        </section>
    );
};

export default WelcomeToCourses;
