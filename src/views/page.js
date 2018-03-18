import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Dashboard from './pages/dashboard'
import Expenses from './pages/expenses'
import Incomes from './pages/incomes'

class Page extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/expenses" component={Expenses}/>
                <Route path="/incomes" component={Incomes}/>
            </Switch>
        );
    }
}

export default Page;