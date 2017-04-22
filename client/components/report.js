import React from 'react';
import ReportItem from './reportItem.js';
import {query} from '../api/report.js';
import {parseDate, compareByYearWeek} from '../util.js';

class Report extends React.Component {
  constructor() {
    super();

    this.state = {start: '', end: '', expenses: []};
  }

  handleChange(param, event) {
    event.preventDefault();
    this.setState({[param]: event.target.value});
  }

  generateReport() {
    const start = parseDate(this.state.start);
    const end = parseDate(this.state.end);
    query(start, end).then(j => {
      if (!j.err) {
        const sorted = j.expenses.sort(compareByYearWeek);
        this.setState({expenses: sorted});
      }
    });
  }

  render() {
    return (
      <div>
        <div id='report'>
          <h2>Report</h2>
          <b>Start Date (YYYY-MM-DD):</b>
          <input id='start' type='text' value={this.state.start} onChange={
            this.handleChange.bind(this, 'start')
          } />
          <br />
          <b>End Date (YYYY-MM-DD):</b>
          <input id='end' type='text' value={this.state.end} onChange={
            this.handleChange.bind(this, 'end')
          } />
          <br />
          <button id='reportbutton' onClick={
            this.generateReport.bind(this)
          }>Generate Report</button>
        </div>
        <br />
        <div id='results'>
          {
            this.state.expenses.map(
              (item, key) => <ReportItem item={item} key={key} />
            )
          }
        </div>
      </div>
    );
  }
}

export default Report