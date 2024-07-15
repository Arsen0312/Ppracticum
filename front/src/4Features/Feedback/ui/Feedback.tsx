import React, { useState } from 'react';
import cls from "./Feedback.module.scss";

type TInputsValues = {
    name: string,
    tel: string,
    email: string
}

type TWarningValueInp = {
    name: boolean,
    tel: boolean,
    email: boolean
}

const Feedback = () => {
    const [inpValue, setInpValue] = useState<TInputsValues>({name: "", tel: "", email: ""});
    const [warningValueInp, setWarningValueInp] = useState<TWarningValueInp>({name: false, tel: false, email: false});

    const formatPhoneNumber = (value: string) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 4) return `(${phoneNumber}`;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`;
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        if (id === "tel") {
            const numericValue = value.replace(/[^\d]/g, '');
            const formattedValue = formatPhoneNumber(numericValue);
            setInpValue(prevState => ({
                ...prevState,
                [id]: formattedValue
            }));
        } else {
            setInpValue(prevState => ({
                ...prevState,
                [id]: value.trim()
            }));
        }
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted with values:", inpValue);

        let valid = true;
        if (inpValue.name.length < 2) {
            setWarningValueInp(prevState => ({
                ...prevState,
                name: true
            }));
            valid = false;
        }

        if (inpValue.tel.length !== 13) { // Length of formatted phone number with parentheses and dashes
            setWarningValueInp(prevState => ({
                ...prevState,
                tel: true
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
            // Add form submission logic here
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
                        id="name"
                        placeholder="Иван Иванов"
                        value={inpValue.name}
                        onChange={onChange}
                        className={warningValueInp.name ? cls.warning : ""}
                    />
                    {/*{warningValueInp.name && <div className={cls.warningText}>Имя должно содержать не менее 2 символов</div>}*/}
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
                                id="tel"
                                placeholder="(___)-___-___"
                                value={inpValue.tel}
                                onChange={onChange}
                                className={warningValueInp.tel ? cls.warning : ""}
                            />
                            {/*{warningValueInp.tel && <div className={cls.warningText}>Телефон должен содержать 9 цифр</div>}*/}
                        </div>
                    </div>
                    <div className={cls.wrapperInput}>
                        <div>Электронная почта</div>
                        <input
                            type="email"
                            id="email"
                            placeholder="ivanov@email.com"
                            value={inpValue.email}
                            onChange={onChange}
                            className={warningValueInp.email ? cls.warning : ""}
                        />
                        {/*{warningValueInp.email && <div className={cls.warningText}>Введите корректный email</div>}*/}
                    </div>
                </div>
                <button type="submit">
                    Запросить уточнение
                </button>
            </form>
        </div>
    );
};

export default Feedback;
