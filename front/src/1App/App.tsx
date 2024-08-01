import React from 'react';

import { AppRouter } from "./Providers/Router";
import { Footer } from "../3Widgets/Footer";
import { Header } from "../3Widgets/Header";
import cls from "../App.module.scss";


function App() {

    return (
        <div className={cls.App}>
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
}

export default App;
