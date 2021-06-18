const mongoose = require('mongoose')

const goodsSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: {
    type:String,
    default: 'https://mcdonalds.ru/upload/iblock/b58/7040_cola_05_1500x1500_brand_min.png'
  },
  delivery: {
    type: Boolean,
    default: true
  }
})
const Good = mongoose.model('Good', goodsSchema)
module.exports = Good



