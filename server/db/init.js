const mongoose = require('mongoose');

const uriString = process.env.MONGODB_URI || 'mongodb://localhost/gigster';

function init() {
  mongoose.connect(uriString, err => {
    if (err) {
      console.log(`Error connection to ${uriString}: ${err}`);
    } else {
      console.log(`Connected to ${uriString}`);
    }
  });
}

// connects to a separate database for testing purposes
function test() {
  mongoose.connect(`mongodb://localhost/gigster-test`, err => {
    if (err) {
      console.log(`Error connection to ${uriString}: ${err}`);
    } else {
      console.log(`Connected to ${uriString}`);
    }
  });
}

module.exports = {init, test};