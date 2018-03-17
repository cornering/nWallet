import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Wallet from './components/wallet';

ReactDOM.render(<Wallet />, document.getElementById('root'));
registerServiceWorker();


