import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import configureGlobalStore from "./hooks-store/global-store";

configureGlobalStore();

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
