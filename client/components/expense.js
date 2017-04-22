import React from 'react';
import {parseDateTime} from '../util.js';

class Expense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {date: '', time: '', amount: '', description: ''};
  }

  handleChange(param, event) {
    event.preventDefault();
    this.setState({[param]: event.target.value});
  }

  createExpense() {
    const expense = {
      datetime: parseDateTime(this.state.date, this.state.time),
      amount: parseFloat(this.state.amount),
      description: this.state.description
    };

    this.props.createExpense(expense);
    this.clearInputs();
  }

  clearInputs() {
    this.setState({date: '', time: '', amount: '', description: ''});
  }

  render() {
    return (
      <div>
        <div id='expense'>
          <h2>New Expense</h2>
          <b>Date (YYYY-MM-DD):</b>
          <input id='date' type='text' value={this.state.date} onChange={
            this.handleChange.bind(this, 'date')
          } />
          <span>Example: 2017-01-12</span>
          <br />
          <b>Time (hh:mm am/pm):</b>
          <input id='time' type='text' value={this.state.time} onChange={
            this.handleChange.bind(this, 'time')
          } />
          <span>Example: 1:30 pm</span>
          <br />
          <b>Amount:</b>
          <input id='amount' type='text' value={this.state.amount} onChange={
            this.handleChange.bind(this, 'amount')
          } />
          <br />
          <b>Description:</b>
          <input id='description' type='text' value={
            this.state.description
          } onChange={this.handleChange.bind(this, 'description')} />
          <br />
          <button id='expenseButton' onClick={
            this.createExpense.bind(this)
          }>Create Expense</button>
        </div>
      </div>
    );
  }
}

export default Expense