import React, { useEffect } from 'react';

import cls from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    
    return (
        <div className={cls.main}>
            <h1>Вы соглашаетесь с политикой конфиденциальности пользуясь сайтом</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. At cum explicabo iusto
                modi provident. Cumque cupiditate debitis
                est ex facere in quaerat sed similique sit
                unde. Consectetur enim, eum eveniet illo illum
                laborum laudantium libero modi molestiae nihil
                perferendis quasi, qui quod reiciendis vero vitae
                voluptatum. Ab alias fuga voluptatem!
            </p>
        </div>
    );
};

export default PrivacyPolicy;