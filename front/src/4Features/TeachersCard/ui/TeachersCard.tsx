import React from 'react';

type TTeachersCardProps = {
    className: string,
    img: string,
    name: string,
    profession: string
}

const TeachersCard = (props: TTeachersCardProps) => {
    const { img, name, profession, className } = props

    return (
        <div className={className}>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <h4>{profession}</h4>
        </div>
    );
};

export default TeachersCard;