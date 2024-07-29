import React, { useState } from 'react';
import cls from "./Feedback.module.scss";
import { useAppDispatch, useAppSelector } from "../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";
import { RootState } from "../../../1App/Providers/StoreProvider/config/store";
import { postFeedback } from "../postFeedback/service/postFeedback";

type TInputsValues = {
    full_name: string,
    phone: string,
    email: string
}

type TWarningValueInp = {
    full_name: boolean,
    phone: boolean,
    email: boolean
}

const Feedback = () => {
    const [inpValue, setInpValue] = useState<TInputsValues>({ full_name: "", phone: "", email: "" });
    const [warningValueInp, setWarningValueInp] = useState<TWarningValueInp>({ full_name: false, phone: false, email: false });
    const dispatch = useAppDispatch();
    const response = useAppSelector((state: RootState) => state.feedback.response);

    const formatPhoneNumber = (value: string) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 4) return `(${phoneNumber}`;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`;
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const numericValue = value.replace(/[^\d]/g, '');
            const formattedValue = formatPhoneNumber(numericValue);
            console.log("false")
            setWarningValueInp(prevState => ({
                ...prevState,
                phone: false
            }))
            setInpValue(prevState => ({
                ...prevState,
                [name]: formattedValue
            }));
        } else {
            setWarningValueInp(prevState => ({
                ...prevState,
                [name]: false
            }))
            setInpValue(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const validateFullName = (name: string) => {
        const nameRegex = /^(?! )[A-Za-zА-Яа-яЁё]+(?: [A-Za-zА-Яа-яЁё]+)*$/;
        return nameRegex.test(name);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let valid = true;
        setWarningValueInp({ full_name: false, phone: false, email: false });

        if (!validateFullName(inpValue.full_name) || inpValue.full_name.length < 2) {
            setWarningValueInp(prevState => ({
                ...prevState,
                full_name: true
            }));
            valid = false;
        }

        if (inpValue.phone.length !== 13) {
            setWarningValueInp(prevState => ({
                ...prevState,
                phone: true
            }));
            valid = false;
        }

        if (!/\S+@\S+\.\S+/.test(inpValue.email)) {
            setWarningValueInp(prevState => ({
                ...prevState,
                email: true
            }));
            valid = false;
        }

        if (valid) {
            console.log("Все збс", inpValue);
            const res = dispatch(postFeedback(inpValue));
            res.then(response => {
                console.log(response);
            });
        }
    };

    return (
        <div className={cls.main}>
            <div className={cls.first}>
                <h2>Нужна помощь?</h2>
                <p>
                    Наши специалисты свяжутся с вами для уточнения деталей.
                    Мы будем рады помочь вам найти курс.
                </p>
            </div>
            <form className={cls.second} onSubmit={onSubmit}>
                <div className={cls.secondTop}>
                    <span>Имя</span>
                    <input
                        type="text"
                        name="full_name"
                        placeholder="Иван Иванов"
                        value={inpValue.full_name}
                        onChange={onChange}
                        className={warningValueInp.full_name ? cls.warning : cls.inputDefaultStyle}
                    />
                    {/* {warningValueInp.full_name && <div className={cls.warningText}>Имя должно содержать не менее 2 символов</div>} */}
                </div>
                <div className={cls.secondBottom}>
                    <div className={cls.wrapperInput}>
                        <div>Телефон</div>
                        <div className={cls.wrapperInputTel}>
                            <div className={cls.helperInp}>
                                +996-
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="(___)-___-___"
                                value={inpValue.phone}
                                onChange={onChange}
                                className={warningValueInp.phone ? cls.warning : cls.inputDefaultStyle}
                            />
                            {/* {warningValueInp.phone && <div className={cls.warningText}>Телефон должен содержать 9 цифр</div>} */}
                        </div>
                    </div>
                    <div className={cls.wrapperInput}>
                        <div>Электронная почта</div>
                        <input
                            type="email"
                            name="email"
                            placeholder="ivanov@email.com"
                            value={inpValue.email}
                            onChange={onChange}
                            className={warningValueInp.email ? cls.warning : cls.inputDefaultStyle}
                        />
                        {/* {warningValueInp.email && <div className={cls.warningText}>Введите корректный email</div>} */}
                    </div>
                </div>
                <div className={cls.wrapperButtonWithResponse}>
                    <button type="submit">
                        Запросить уточнение
                    </button>
                    <span>
                        {response}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Feedback;
