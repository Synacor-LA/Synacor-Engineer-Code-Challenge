import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) module.hot.accept();
