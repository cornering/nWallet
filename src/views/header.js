import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap';

class Header extends Component {
    render() {
        //TODO move navigation to navigation component
        return (
            <header>
                //TODO add logo and title
                <Nav bsStyle="pills" activeKey={1} /*onSelect={handleSelect}*/>
                    <NavItem eventKey={1} href="/home">
                        NavItem 1 content
                    </NavItem>
                    <NavItem eventKey={2} title="Item">
                        NavItem 2 content
                    </NavItem>
                    <NavItem eventKey={3} disabled>
                        NavItem 3 content
                    </NavItem>
                </Nav>
                <hr/>
            </header>
        );
    }
}

export default Header;