import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import {Nav, NavItem, Navbar} from 'react-bootstrap'
//import {LinkContainer} from 'react-router-bootstrap'

import ToggleButton from './toggleButton'

import '../styles/components/sideNavigation.css'

import logo from '../images/logo.png'

class SideNavigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
                <ul className="nav sidebar-nav">
                    <li className="sidebar-brand">
                        <Link className="logo-container" title="nWallet" to="/">
                            <div className="logo-img">
                                <img height={24} src={logo} alt="logo"/>
                            </div>
                            <div className="logo-text">
                                <h1>nWallet</h1>
                            </div>
                        </Link>
                    </li>
                    <li className="sidebar-link">
                        <a href="#">Home</a>
                    </li>
                    <li className="sidebar-link">
                        <a href="https://twitter.com/maridlcrmn">Follow me</a>
                    </li>
                    <li className="sidebar-link">
                        <ToggleButton className="toggleButton"/>
                        {/*<button type="button" onClick={this.toggleMenu.bind(this)} data-toggle="offcanvas">
                            Open
                        </button>*/}
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SideNavigation;