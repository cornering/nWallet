import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import {Nav, NavItem, Navbar} from 'react-bootstrap'
//import {LinkContainer} from 'react-router-bootstrap'
import $ from 'jquery';

import '../styles/views/sidebar.css'

import logo from '../images/logo.png'

class Sidebar extends Component {

    trackMouse() {
        $('#wrapper').toggleClass('toggled');
      }

      untrackMouse() {
        $('#wrapper').toggleClass('toggled');
      }
    // componentDidMount() {
    //     let trigger = $('.hamburger'),
    //         isClosed = false;

    //     trigger.click(function () {
    //         hamburger_cross();
    //     });

    //     function hamburger_cross() {
    //         if (isClosed === true) {
    //             trigger.removeClass('is-open');
    //             trigger.addClass('is-closed');
    //             isClosed = false;
    //         } else {
    //             trigger.removeClass('is-closed');
    //             trigger.addClass('is-open');
    //             isClosed = true;
    //         }
    //     }
        
    //     $('[data-toggle="offcanvas"]').click(function () {
    //         $('#wrapper').toggleClass('toggled');
    //     });
    // }
      
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation" onMouseEnter={this.trackMouse} onMouseLeave={this.untrackMouse}>
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
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <a href="#">Team</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Works <span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                            <li className="dropdown-header">Dropdown heading</li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/maridlcrmn">Follow me</a>
                    </li>
                    <li>
                        {/* <button type="button" className="hamburger is-closed" data-toggle="offcanvas">
                            Open
                        </button> */}
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;