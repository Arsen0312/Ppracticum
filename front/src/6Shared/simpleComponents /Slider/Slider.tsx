import React, {ReactNode} from 'react';
import cls from "./Slider.module.scss"

type TSliderProps = {
    children: ReactNode,
    className?: string
}

const Slider = (props: TSliderProps) => {
    const {children, className} = props

    return (
        <div className={className ? className : cls.main}>
            {children}
        </div>
    );
};

export default Slider;