import React from 'react';

type TCardReviews = {
    name: string,
    description: string,
    className: string
}

const CardReviews = (props: TCardReviews) => {
    const { name, description, className } = props;

    return (
        <div className={className}>
            <h3>
                {name}
            </h3>
            <p>
                {description}
            </p>
        </div>
    );
};

export default CardReviews;