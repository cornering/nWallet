import React, { Component } from 'react'

import Wrapper from '../components/wrapper'
import Header from './header'
import Sidebar from './sidebar'
import Page from './page'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/views/app.css'

class App extends Component {
    render() {
        return (
            <Wrapper className="app">
                <Header/>
                <Sidebar/>
                <Page/>
            </Wrapper>
        );
    }
}

export default App;