import React from 'react';

import { AppRouter } from "./Providers/Router";
import { Footer } from "../3Widgets/Footer";
import cls from "../App.module.scss";

function App() {

    return (
        <main className={cls.App}>
            <AppRouter/>
            <Footer/>
        </main>
    );
}

export default App;
