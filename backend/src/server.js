const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect(
  'mongodb+srv://brigor_m0ng0:B@nc0_m0ng0@cluster0-fi27e.gcp.mongodb.net/aircnc?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(3000, () => {
  console.log('✔Server Started!');
});
