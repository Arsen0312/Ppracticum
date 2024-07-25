import React from 'react';
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

type TNavbar = {
    className: string
}

const NavBar = (props: TNavbar) => {
    const { className } = props

    return (
        <div className={className}>
            <Link to={""}>НОВОСТИ</Link>
            <Link to={""}>КОНТАКТЫ</Link>
            <Link to={''}><FaUser/></Link>
        </div>
    );
};

export default NavBar;