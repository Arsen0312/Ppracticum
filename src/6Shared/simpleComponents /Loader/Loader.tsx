import React from 'react';
import { MoonLoader } from "react-spinners";

import { colorLoader } from "./config/colorLoader";
import cls from "./Loader.module.scss";

interface ILoaderProps {
    size?: number
}

const Loader = (props: ILoaderProps) => {
    const { size } = props;

    return (
        <div className={cls.main}>
            <MoonLoader color={colorLoader} size={size} speedMultiplier={0.5}/>
        </div>
    );
};

export default Loader;