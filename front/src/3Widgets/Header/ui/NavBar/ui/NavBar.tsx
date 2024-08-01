import React from 'react';
import { Link } from "react-router-dom";

type TNavbar = {
    className: string
}

const NavBar = (props: TNavbar) => {
    const { className } = props;

    return (
        <div className={className}>
            <Link to='reviews'>НОВОСТИ</Link>
            <Link to="##">КОНТАКТЫ</Link>
        </div>
    );
};

export default NavBar;