import React, {Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import Expenses from '../../components/expenses';

import '../../styles/views/expenses.css';

class ExpensesPage extends Component {
    render() {
        return (
            <div className="expenses-page">
                <h2>Expenses</h2>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                           
                        </Col>
                        <Col xs={6} md={8} className="expenses-chart">
                        <Expenses/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
};

export default ExpensesPage;