import React, { useRef, useState } from 'react';

import cls from "./YourPathToSuccess.module.scss";
import { Feedback } from "../../../../../4Features/Feedback";
import useOutsideClick from "../../../../../6Shared/libs/hooks/useOutsideClick/useOutsideClick";
import { Modal } from "../../../../../6Shared/simpleComponents /Modal";

type TYourPathToSuccessProps = {
    title: string
}


const YourPathToSuccess = (props: TYourPathToSuccessProps) => {
    const { title } = props;

    const [isModeModal, setIsModeModal] = useState<boolean>(false);
    const ref = useRef(null);

    const offModalWindow = () => setIsModeModal(false);

    useOutsideClick(ref, offModalWindow);


    return (
        <section className={cls.wrapperMain}>
            <div className={cls.main}>
                <h2>
                    Ваш путь к успеху начинается здесь!
                </h2>
                <p>
                    Не упустите шанс стать частью курса «{title}». Расширьте свои
                    горизонты и откройте новые возможности для карьерного и личностного роста.
                </p>
                <p>
                    <b>
                        Записывайтесь сейчас и начните свой путь к успеху вместе с нами!
                    </b>
                </p>
                <button type="button" onClick={() => setIsModeModal(true)}>
                    Связаться с нами
                </button>
                <Modal mode={isModeModal} ref={ref}>
                    <Feedback/>
                </Modal>
            </div>
        </section>
    );
};

export default YourPathToSuccess;