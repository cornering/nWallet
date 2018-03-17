import React, { Component } from 'react';

import Header from './header';
import Page from './page';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/views/app.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Page/>
            </div>
        );
    }
}

export default App;