import React, { useRef, useState } from 'react';

import cls from './WelcomeToOutsourcing.module.scss';
import { Feedback } from '../../../../../4Features/Feedback';
import { useAppDispatch } from "../../../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";
import useOutsideClick from '../../../../../6Shared/libs/hooks/useOutsideClick/useOutsideClick';
import { Modal } from "../../../../../6Shared/simpleComponents /Modal";

type TWelcomeToOutsourcing = {
    backgroundPerson: string;
};

const WelcomeToOutsourcing = (props: TWelcomeToOutsourcing) => {
    const { backgroundPerson }: TWelcomeToOutsourcing = props;
    const dispatch = useAppDispatch();

    const [isModeModal, setIsModeModal] = useState<boolean>(false);
    const ref = useRef(null);


    const offModalWindow = () => setIsModeModal(false);

    useOutsideClick(ref, offModalWindow);

    return (
        <section className={cls.wrapperMain}>
            <div className={cls.main}>
                <div className={cls.wrapperDescriptionCourses}>
                    <h1>БУХГАЛТЕРСКИЙ АУТСОРСИНГ</h1>
                    <p>Доверьте нам заботиться о вашей бухгалтерии, чтобы вы могли
                        сосредоточиться на росте вашего бизнеса</p>
                    <ul>
                        <li>
                            Получите качественные бухгалтерские услуги от экспертов
                        </li>
                        <li>
                            Оплачивайте только реально выполненные работы
                        </li>
                        <li>
                            Освободите время для фокуса на развитии бизнеса
                        </li>
                    </ul>
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

export default WelcomeToOutsourcing;
