require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.CHAVE1,
  { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
const routes = require('./routes');

app.use(routes);

app.listen(3333);
