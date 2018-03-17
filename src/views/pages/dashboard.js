import React, { Component } from 'react';

class Dashboard extends Component {
    //TODO add page inside app.js, pages components insert here
    render() {
        return (
            <div className="App">
                <header className="app-header">
                    <h1 className="app-title">Welcome to React</h1>
                </header>
                <p className="app-intro">
                    To get started, edit <code>src/app.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Dashboard;