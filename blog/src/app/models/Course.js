const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);


const Course = new Schema({
    name: {type: String, maxLength: 255, required: true},
    description: {type: String, maxLength: 1000},
    image: {type: String}, 
    videoid: {type: String, required: true},
    slug: { type: String, slug: 'name'},
  },
  {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);