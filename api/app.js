const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();

const PORT = process.env.PORT || 3005
const dbConnectionURL = process.env.dbConnectionURL
const secretKey = process.env.secretKey

const foodRouter = require('./routes/foodRouter')

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  })
);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', foodRouter)


app.listen(PORT, (req, res) => {
  mongoose.connect(dbConnectionURL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify:false}, () => {
    console.log('база рванула...');
  })
  console.log('сервер на...',PORT);
})

