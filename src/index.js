import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import registerServiceWorker from './registerServiceWorker'
import reducers from './redux/reducers'

import App from './views/app'

import './styles/style.css'

const store = createStore(reducers);

/*console.log(store.getState());
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);*/

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();