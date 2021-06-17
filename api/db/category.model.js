const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: String,
  products: [{
    type: mongoose.Types.ObjectId,
    ref: "Good"
  }]
})
const Category = mongoose.model('Category', categorySchema)
module.exports = Category

