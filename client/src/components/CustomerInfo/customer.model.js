const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
email: String,
  firstName: String,
  lastName: String,
  streetAdd1: String,
  streetAdd2: String,
  city: String,
  state: String,
  zipCode: Number,

}, {
  timestamps: true,
});

const Customer = mongoose.model('User', customerSchema);

module.exports = Customer;