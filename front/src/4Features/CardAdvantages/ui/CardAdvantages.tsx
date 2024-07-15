import React from 'react';

type TPropsCurdAdvantages = {
    title: string,
    description: string,
    className:string
}

const CardAdvantages = (props: TPropsCurdAdvantages) => {
    const { title, description, className } = props

    return (
        <div className={className}>
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
        </div>
    );
};

export default CardAdvantages;