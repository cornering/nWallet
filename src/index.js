import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './views/app';

import './styles/style.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();