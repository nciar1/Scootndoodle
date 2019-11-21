const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
 productName: String,
 color: String,
 size: String,
 Quantity: Number,
 unitPrice: Number,
 totalprice: Float32Array,



}, {
  timestamps: true,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;