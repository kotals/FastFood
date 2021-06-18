const mongoose = require('mongoose');
const Category = require('./category.model');
const Good = require('./good.model');
const { model, Schema } = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FastFood', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true });


async function seedBase1() {

  const category = [];
  const goods = [];
 

  goods.push(new Good({ name: "Бигмак", price: 150, image:'https://mcdonalds.ru/upload/iblock/463/0000_BigMac_BB_1500x1500-_4_-_1_.png' }))
  goods.push(new Good({ name: "Чизбургер", price: 120, image:'https://mcdonalds.ru/upload/iblock/21b/0000_Cheeseburger_BB_1500x1500_min.png' }))
  goods.push(new Good({ name: "Бигмак двойной", price: 200, delivery: false, image:'https://mcdonalds.ru/upload/iblock/3f4/0000_BigMac_Double_BB_1500x1500_min.png' }))
  goods.push(new Good({ name: "Шефбургер", price: 120 , image:'https://s82079.cdn.ngenix.net/330x0/etZVHiWewqH6XqEsShD4Axz9.png'}))
  goods.push(new Good({ name: "Лонгер", price: 100, delivery: false , image:'https://s82079.cdn.ngenix.net/330x0/YQFxnHqxG8uJzocESMTikaio.png'}))
  goods.push(new Good({ name: "Воппер", price: 120, image:'https://s82079.cdn.ngenix.net/330x0/Jtt1xXNpgBaXhvbXXgNzJCSo.png' }))
  goods.push(new Good({ name: "Воппер двойной", price: 130 , image:'https://mcdonalds.ru/upload/iblock/b5a/0000_DoubleCheesburger_BB_1500x1500-_3_-_1_.png'}))


  category.push(new Category({ name: 'Бургеры', products: [goods[0]._id, goods[1]._id, goods[2]._id, goods[3]._id, , goods[4]._id, goods[5]._id, goods[6]._id] }))

  await Good.insertMany(goods)
  await Category.insertMany(category)

}


async function seedBase2() {

  const category = [];
  const goods = [];
  goods.push(new Good({ name: "Кола", price: 80, delivery: false, image: 'https://mcdonalds.ru/upload/iblock/b58/7040_cola_05_1500x1500_brand_min.png' }))
  goods.push(new Good({ name: "Молоко", price: 80, image: 'https://mcdonalds.ru/upload/iblock/016/Moloko.png' }))
  goods.push(new Good({ name: "Вода", price: 50, delivery: false, image: 'https://orderapp-staticgo.burgerking.ru/x512/mobile_image/006902db0ab6897d4f0f3870bd4c2e2a.webp' }))
  goods.push(new Good({ name: "Кола-лайт", price: 80, image: 'https://mcdonalds.ru/upload/iblock/b58/7040_cola_05_1500x1500_brand_min.png' }))
  goods.push(new Good({ name: "Пепси", price: 80, delivery: false, image: 'https://orderapp-staticgo.burgerking.ru/x512/mobile_image/a2b7b17a0d0806900b86dcb23b950e1f.webp' }))
  goods.push(new Good({ name: "Липтон", price: 50, delivery: false, image: 'https://orderapp-staticgo.burgerking.ru/x512/mobile_image/f6a743d840478dc44421797213fa6371.webp' }))
  goods.push(new Good({ name: "Миринда", price: 80, image: 'https://orderapp-staticgo.burgerking.ru/x512/mobile_image/e117692e332914a1aa60f9034b15b5f2.webp' }))
  goods.push(new Good({ name: "Сок", price: 80, delivery: false, image: 'https://s82079.cdn.ngenix.net/330x0/7ygx4z7pf3rme1qm893x0fbl8l79' }))
  goods.push(new Good({ name: "Вода газ.", price: 50, image: 'https://orderapp-staticgo.burgerking.ru/x512/mobile_image/006902db0ab6897d4f0f3870bd4c2e2a.webp' }))





  category.push(new Category({ name: 'Напитки', products: [goods[0]._id, goods[1]._id, goods[2]._id, goods[3]._id, goods[4]._id, goods[5]._id, goods[6]._id, goods[7]._id, goods[8]._id] }))
  await Good.insertMany(goods)
  await Category.insertMany(category)
}

async function seedBase3() {

  const category = [];
  const goods = [];


  goods.push(new Good({ name: "Сырный", price: 20, image: ' https://s82079.cdn.ngenix.net/330x0/Q6kee5BPTeAR2hf68nAb9w9K.png' }))
  goods.push(new Good({ name: "Тартар", price: 20, delivery: false, image: 'https://s82079.cdn.ngenix.net/330x0/EoivuYE2HVRchbduDsfoVY84.png' }))
  goods.push(new Good({ name: "Кетчуп", price: 15, image: 'https://mcdonalds.ru/upload/iblock/292/Ketchup.png' }))
  goods.push(new Good({ name: "Горчичный", price: 20, image: ' https://mcdonalds.ru/upload/iblock/6bc/Sous_Gorchichnyy.png' }))
  goods.push(new Good({ name: "Майонез", price: 15, delivery: false, image: 'https://s82079.cdn.ngenix.net/330x0/EoivuYE2HVRchbduDsfoVY84.png' }))
  goods.push(new Good({ name: "1000 островов", price: 20, image: 'https://mcdonalds.ru/upload/iblock/e8c/Sous-1000-Ostrovov.png' }))
  goods.push(new Good({ name: "Карри", price: 20, image: 'https://s82079.cdn.ngenix.net/330x0/Q6kee5BPTeAR2hf68nAb9w9K.png' }))
  goods.push(new Good({ name: "Соевый", price: 20, delivery: false, image: 'https://s82079.cdn.ngenix.net/330x0/LSwBJ3tkUKdSmx8uVLRxtv6V.png' }))

  

 
  category.push(new Category({ name: 'Соусы', products: [goods[0]._id, goods[1]._id, goods[2]._id, goods[3]._id, goods[4]._id, goods[5]._id, goods[6]._id, goods[7]._id] }))

  await Good.insertMany(goods)
  await Category.insertMany(category)

}
async function seedBase4() {

  const category = [];
  const goods = [];

  goods.push(new Good({ name: "Сливочное", price: 90,image:'https://orderapp-staticgo.burgerking.ru/x512/mobile_image/9335ff9297bcda1e7640ca1e12908f39.webp' }))
  goods.push(new Good({ name: "Шоколадное", price: 110, delivery: false,image:'https://orderapp-staticgo.burgerking.ru/x512/mobile_image/c836dc0e92aa5e989fd73c27a4097f09.webp' }))
  goods.push(new Good({ name: "Клубничное", price: 100 ,image:'https://orderapp-staticgo.burgerking.ru/x512/mobile_image/9b791fa0fa0db5b2d7429542aa0a55bd.webp' }))
  goods.push(new Good({ name: "Донат", price: 90,image:'https://s82079.cdn.ngenix.net/330x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png' }))

  category.push(new Category({ name: 'Десерты', products: [goods[0]._id, goods[1]._id, goods[2]._id, goods[3]._id] }))

  await Good.insertMany(goods)
  await Category.insertMany(category)
}




// seedBase1().then(() => mongoose.disconnect())
// seedBase2().then(() => mongoose.disconnect())
seedBase3().then(() => mongoose.disconnect())
// seedBase4().then(() => mongoose.disconnecdct())

