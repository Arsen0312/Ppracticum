import React, {useRef, useState} from 'react';
import cls from "./YourPathToSuccess.module.scss"
import {Modal} from "../../../../../6Shared/simpleComponents /Modal";
import {Feedback} from "../../../../../4Features/Feedback";
import useOutsideClick from "../../../../../6Shared/lib/hooks/useOutsideClick/useOutsideClick";

const YourPathToSuccess = () => {
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
                    Не упустите шанс стать частью курса «Программирование для школьников (01 юниор)». Расширьте свои
                    горизонты и откройте новые возможности для карьерного и личностного роста.
                </p>
                <p>
                    Записывайтесь сейчас и начните свой путь к успеху вместе с нами!
                </p>
                <button onClick={() => setIsModeModal(true)}>
                    Связаться с нами
                </button>
                <Modal mode={isModeModal} ref={ref}>
                    <Feedback />
                </Modal>
            </div>
        </section>
    );
};

export default YourPathToSuccess;