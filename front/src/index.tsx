import React from 'react';
// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from './1App/App';
import { setupStore } from "./1App/Providers/StoreProvider/config/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={setupStore()}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);