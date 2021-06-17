const mongoose = require('mongoose');
const Category = require('./category.model');
const Good = require('./good.model');
const { model, Schema } = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FastFood', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true });


async function seedBase1() {

  const category = [];
  const goods = [];


  goods.push(new Good({ name: "Бигмак", price: 150 }))
  goods.push(new Good({ name: "Чизбургер", price: 120 }))
  goods.push(new Good({ name: "Бигмак двойной", price: 200, delivery: false }))
  goods.push(new Good({ name: "Шефбургер", price: 120 }))
  goods.push(new Good({ name: "Лонгер", price: 100, delivery: false }))
  goods.push(new Good({ name: "Воппер", price: 120 }))
  goods.push(new Good({ name: "Воппер двойной", price: 130 }))




  category.push(new Category({ name: 'Бургеры', products: [goods[0]._id, goods[1]._id, goods[2]._id, goods[3]._id, , goods[4]._id, goods[5]._id, goods[6]._id] }))

  await Good.insertMany(goods)
  await Category.insertMany(category)

}


async function seedBase2() {

  const category = [];
  const goods = [];
  goods.push(new Good({ name: "Кола", price: 80, delivery: false }))
  goods.push(new Good({ name: "Молоко", price: 80 }))
  goods.push(new Good({ name: "Вода", price: 50, delivery: false }))
  goods.push(new Good({ name: "Кола-лайт", price: 80 }))
  goods.push(new Good({ name: "Пепси", price: 80, delivery: false }))
  goods.push(new Good({ name: "Спрайт", price: 50, delivery: false }))
  goods.push(new Good({ name: "Кола-зеро", price: 80 }))
  goods.push(new Good({ name: "Сок", price: 80, delivery: false }))
  goods.push(new Good({ name: "Вода газ.", price: 50 }))

  category.push(new Category({ name: 'Напитки', products: [goods[0]._id, goods[1]._id, goods[2]._id, goods[3]._id, goods[4]._id, goods[5]._id, goods[6]._id, goods[7]._id, goods[8]._id] }))
  await Good.insertMany(goods)
  await Category.insertMany(category)
}

async function seedBase3() {

  const category = [];
  const goods = [];


  goods.push(new Good({ name: "Сырный", price: 20 }))
  goods.push(new Good({ name: "Тартар", price: 20, delivery: false }))
  goods.push(new Good({ name: "Кетчуп", price: 15 }))
  goods.push(new Good({ name: "Горчичный", price: 20 }))
  goods.push(new Good({ name: "Майонез", price: 15, delivery: false }))
  goods.push(new Good({ name: "1000 островов", price: 20 }))
  goods.push(new Good({ name: "Карри", price: 20 }))
  goods.push(new Good({ name: "Соевый", price: 20, delivery: false }))

  category.push(new Category({ name: 'Соусы', products: [goods[0]._id, goods[1]._id, goods[2]._id, goods[3]._id, goods[4]._id, goods[5]._id, goods[6]._id, goods[7]._id] }))

  await Good.insertMany(goods)
  await Category.insertMany(category)

}
async function seedBase4() {

  const category = [];
  const goods = [];


  goods.push(new Good({ name: "Сливочное", price: 90 }))
  goods.push(new Good({ name: "Шоколадное", price: 110, delivery: false }))
  goods.push(new Good({ name: "Клубничное", price: 100 }))
  goods.push(new Good({ name: "Ванильное", price: 90 }))

  category.push(new Category({ name: 'Мороженое', products: [goods[0]._id, goods[1]._id, goods[2]._id, goods[3]._id] }))

  await Good.insertMany(goods)
  await Category.insertMany(category)
}




seedBase1().then(() => mongoose.disconnect())
seedBase2().then(() => mongoose.disconnect())
seedBase3().then(() => mongoose.disconnect())
seedBase4().then(() => mongoose.disconnect())

