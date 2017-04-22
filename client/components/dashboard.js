import React from 'react';
import Expense from './expense.js';
import Report from './report.js';
import {create} from '../api/expense.js';

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  createExpense(expense) {
    create(expense).then(j => {
      // should provide user feedback
      console.log(j);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.props.logout.bind(this)}>Logout</button>
        <Expense createExpense={this.createExpense.bind(this)} />
        <br />
        <Report />
      </div>
    );
  }
}

export default Dashboard