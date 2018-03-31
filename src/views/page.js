import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import DashboardPage from './pages/dashboard'
import ExpensesPage from './pages/expenses'
import IncomesPage from './pages/incomes'

import '../styles/views/page.css';

class Page extends Component {
    render() {
        return (
            <div className="page-container">
                <Switch>
                    <Route exact path="/" component={DashboardPage}/>
                    <Route exact path="/expenses" component={ExpensesPage}/>
                    <Route exact path="/incomes" component={IncomesPage}/>
                </Switch>
            </div>
        );
    }
}

export default Page;