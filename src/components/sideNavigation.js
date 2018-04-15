import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import ToggleButton from './toggleButton'

import '../styles/components/sideNavigation.css'

import logo from '../images/logo.png'
import navigation from '../configs/sidebarNavigation'

class SideNavigation extends Component {
    render() {
        const menu = navigation.items.map((navItem, index) => {
            return (
                <li className="sidebar-link" key={index}>
                    <NavLink
                    activeClassName="active"
                    className="link-container"
                    title={navItem.name}
                    to={navItem.path}>
                        <div className="link-img">
                            <FontAwesome name={navItem.icon} size="2x"/>
                        </div>
                        <div className="link-text">
                            <span>{navItem.name}</span>
                        </div>
                    </NavLink>
                </li>
            );
        });

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper">
                <ul className="nav sidebar-nav">
                    <li className="sidebar-brand">
                        <NavLink activeClassName="active" className="logo-container" title="nWallet" to="/">
                            <div className="logo-img">
                                <img height={24} src={logo} alt="logo"/>
                            </div>
                            <div className="logo-text">
                                <h1>nWallet</h1>
                            </div>
                        </NavLink>
                    </li>
                    {menu}
                </ul>
                <ToggleButton className="toggleButton"/>
            </nav>
        );
    }
}

export default SideNavigation;