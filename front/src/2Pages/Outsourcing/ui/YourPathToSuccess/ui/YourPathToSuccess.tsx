import React, { useRef, useState } from 'react';

import cls from "./YourPathToSuccess.module.scss";
import { Feedback } from "../../../../../4Features/Feedback";
import useOutsideClick from "../../../../../6Shared/libs/hooks/useOutsideClick/useOutsideClick";
import { Modal } from "../../../../../6Shared/simpleComponents /Modal";

const YourPathToSuccess = () => {
    const [isModeModal, setIsModeModal] = useState<boolean>(false);
    const ref = useRef(null);

    const offModalWindow = () => setIsModeModal(false);

    useOutsideClick(ref, offModalWindow);


    return (
        <section className={cls.wrapperMain}>
            <div className={cls.main}>
                <h2>
                    Готовы к сотрудничеству?
                </h2>
                <p>
                    Заполните форму на нашем сайте, и мы свяжемся с вами в
                    ближайшее время для обсуждения деталей сотрудничества.
                    Позвольте профессионалам заботиться о вашей бухгалтерии,
                    чтобы вы могли заниматься тем, что действительно важно —
                    развитием вашего бизнеса.
                </p>
                <p>
                    <b>
                        Компания Практикум — ваш надежный партнер в мире бухгалтерских услуг.
                    </b>
                </p>
                <button type="button" onClick={() => setIsModeModal(true)}>
                    Получить консультацию
                </button>
                <Modal mode={isModeModal} ref={ref}>
                    <Feedback/>
                </Modal>
            </div>
        </section>
    );
};

export default YourPathToSuccess;