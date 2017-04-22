import moment from 'moment';

const parseDateTime = (date, time) => {
  return moment(`${date} ${time}`, 'YYYY-MM-DD hh:mm a');
};

const parseDate = date => {
  return moment(date, 'YYYY-MM-DD');
};

const compareByYearWeek = (a, b) => {
  if (a._id.year === b._id.year) {
    return a._id.week - b._id.week;
  } else {
    return a._id.year - b._id.year;
  }
};

export {parseDateTime, parseDate, compareByYearWeek}