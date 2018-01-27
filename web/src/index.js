import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import './assets/typebase.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
