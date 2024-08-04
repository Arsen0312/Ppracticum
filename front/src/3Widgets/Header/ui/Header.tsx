import React, { useEffect, useState, useCallback } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

import cls from "./Header.module.scss";
import NavBar from "./NavBar/ui/NavBar";
import { classNames } from "../../../6Shared/libs/classNames/classNames";

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 990);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth <= 990);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (
        <header className={cls.main}>
            <nav className={cls.nav}>
                <div className={cls.wrapperLogo}>
                    <Link to="/">
                        <img className={cls.logo} src="/assets/img/logoLeft.jpeg" alt="Логотип"/>
                        <h1>Practicum</h1>
                    </Link>
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <button type="button" className={cls.button} onClick={() => setIsCollapsed(prev => !prev)}>
                        <CiMenuBurger/>
                    </button>
                </div>

                {isMobile
                    ? <NavBar className={classNames(cls.navItemsMobile, { [cls.isCollapsed]: isCollapsed })}/>
                    : <NavBar className={cls.navItems}/>}
            </nav>
        </header>
    );
};

export default Header;
