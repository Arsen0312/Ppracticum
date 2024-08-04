import React, { useEffect } from 'react';
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

import cls from "./Footer.module.scss";
import { RootState } from "../../../1App/Providers/StoreProvider/config/store";
import { fetchContacts } from "../../../5Entites/contacts/services/fetchContacts";
import { useAppDispatch, useAppSelector } from "../../../6Shared/libs/hooks/useAppReduxToolkitTools/redux";


const Footer = () => {
    const dispatch = useAppDispatch();
    const contact = useAppSelector((state: RootState) => state.contacts.contacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <footer className={cls.main}>
            <div className={cls.companyData}>
                <div className={cls.wrapperCompanyDate}>
                    <div className={cls.elementCompanyDate}>
                        <h2>
                            Социальные сети
                        </h2>
                        <div className={cls.wrapperIconsForSocialMedia}>
                            <Link to={`${contact.instagram || ""}`}>
                                <div className={cls.wrapperIcon}>
                                    <IoLogoInstagram/>
                                </div>
                            </Link>
                            <Link to={`${contact.whatsapp || ""}`}>
                                <div className={cls.wrapperIcon}>
                                    <FaWhatsapp/>
                                </div>
                            </Link>
                            <Link to={`${contact.telegram || ''}`}>
                                <div className={cls.wrapperIcon}>
                                    <FaTelegram/>
                                </div>
                            </Link>
                            <Link to="https://www.tiktok.com/@buhgalter_bishkek_1c">
                                <div className={cls.wrapperIcon}>
                                    <IoLogoTiktok/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={cls.elementCompanyDate}>
                        <h2>
                            Контакты
                        </h2>
                        <div className={cls.wrapperIconsForContacts}>
                            <div className={cls.wrapperContact}>
                                <Link to={`${contact.address || ''}`}>
                                    <MdLocationOn color="white"/>
                                    Наш Адрес
                                </Link>
                            </div>
                            <div className={cls.wrapperContact}>
                                <Link to={`${contact.phone || ''}`}>
                                    <FaPhone color="white"/>
                                    {contact.phone}
                                </Link>
                            </div>
                            <div className={cls.wrapperContact}>
                                <Link to={`${contact.email || ''}`}>
                                    <LuMail color="white"/>
                                    baktigul_sd@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.wrapperCompanyDate}>
                    <div className={cls.elementCompanyDate}>
                        <h2>
                            СВИДЕТЕЛЬСТВО
                        </h2>
                        <p>
                            О ГОСУДАРСТВЕННОЙ РЕГИСТРАЦИИ ЮРИДИЧЕСКОГО ЛИЦА
                            Регистрационный номер: 204683-3301-ООО
                            ОКПО:31420032
                            ИНН:03103202210174
                        </p>
                    </div>
                    <div className={cls.elementCompanyDate}>
                        <h2>
                            ЛИЦЕНЗИЯ
                        </h2>
                        <p>
                            ОсОО Практикум
                            Регистрационный номер: E2022-0105
                        </p>
                    </div>
                </div>
            </div>
            <div className={cls.companyDopData}>
                <Link to="/privacyPolicy">
                    <h3>
                        Подробнее о политике конфиденциальности
                    </h3>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;