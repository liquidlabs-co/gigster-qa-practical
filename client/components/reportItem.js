import React from 'react';

const ReportItem = props => {
  return (
    <div id='reportItem'>
      <b>Year:{props.item._id.year}--Week:{props.item._id.week}</b>
      <br />
      <span>Number of expenses in week--{props.item.count}</span>
      <br />
      <span>Week subtotal--${props.item.totalAmount.toFixed(2)}</span>
      <br />
    </div>
  );
};

export default ReportItem