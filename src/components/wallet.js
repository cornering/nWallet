import React, { Component } from 'react';
import '../styles/main.css';

class Wallet extends Component {
    render() {
        return (
            <div className="Wallet">
                <header className="Wallet-header">
                    <h1 className="Wallet-title">Welcome to Wallet</h1>
                </header>
                <p className="Wallet-intro">
                    To get started, edit <code>src/components/Wallet.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Wallet;