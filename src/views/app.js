import React, {Component} from 'react'

import Header from './header'
import Sidebar from './sidebar'
import Page from './page'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/views/app.css'

class App extends Component {
    render() {
        return (
            <div id="wrapper" className="app">
                <Header/>
                <Sidebar/>
                <Page/>
            </div>
        );
    }
}

export default App;