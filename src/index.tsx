import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './common/style/global';
import {Provider} from "react-redux";
import {store} from "./app/store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <GlobalStyles/>
            <App/>
        </React.StrictMode>
    </Provider>
);

reportWebVitals();
