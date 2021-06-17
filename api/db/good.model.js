const mongoose = require('mongoose')

const goodsSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  delivery: {
    type: Boolean,
    default: true
  }
})
const Good = mongoose.model('Good', goodsSchema)
module.exports = Good



