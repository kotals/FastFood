const Category = require("../db/category.model");
const Good = require("../db/good.model");

const router = require("express").Router();


router.get("/api/goods", async (req, res) => {
  const allGoods = await Good.find()
  res.json(allGoods).status(200)
});

router.get("/api/categories", async (req, res) => {
  const categories = await Category.find()
  console.log(categories);
  res.json(categories).status(200)
});






// // Все пивоварни
// router.get("/allbrewers", async (req, res) => {
//   const allBrewers = await Brew.find()
//   res.json(allBrewers).status(200)
// });

// // Все пиво
// router.get("/beers", async (req, res) => {
//   const allBeers = await Beer.find()
//   res.json(allBeers).status(200)
// });

// // Одно пиво
// router.get("/beer/:id", (req, res) => {

// });

// // Один пивовар
// router.get("/brewer/:id", (req, res) => {

// });

// // Личный кабинет
// router.get("/lk/:id", (req, res) => {

// });

// // Личный кабинет - редактирование
// router.patch("/lk/:id", (req, res) => {

// });

// // Мои пивовары
// router.get("/mybrewers/:id", (req, res) => {

// });

// // Мои пивовары - добавление
// router.post("/mybrewers/:id", (req, res) => {

// });

// // Мои пивовары - удаление
// router.delete("/mybrewers/:id", (req, res) => {

// });

// // Мои запросы
// router.get("/requests/:id", async (req, res) => {
//   try {
//     const requests = await Request.find({ bar: req.params.id })
//     res.send(requests).status(200)
//   } catch (err) {

//   }
// });

// // Мои запросы - добавление
// router.post("/requests", async (req, res) => {
//   console.log("/requests", req.body);
//   try {
//     const newRequest = await Request.create(req.body)
//     res.json(newRequest).status(200)
//   } catch (err) {

//   }

// });

// // Мои запросы - изменение
// router.patch("/requests/", async (req, res) => {
//   const ID = req.body._id
//   const requetsFromClient = req.body
//   delete requetsFromClient._id
//   delete requetsFromClient.bar
//   try {
//     await Request.findByIdAndUpdate(ID, { ...requetsFromClient })
//     const newRequest = await Request.findById(ID, { new: true }).populate('bar')
//     res.json(newRequest).status(200)
//   } catch (err) {

//   }
// });

// // Мои запросы - удаление
// router.delete("/requests/:id", async (req, res) => {
//   console.log(req.params.id);
//   try {
//     await Request.findByIdAndDelete(req.params.id)
//     res.sendStatus(200)
//   } catch (err) {

//   }
// });

module.exports = router;
