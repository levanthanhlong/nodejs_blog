const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 255, require: true},
    description: {type: String, maxLength: 1000},
    image: {type: String}, 
    videoid: {type: String, require: true}, 
  },
  {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);