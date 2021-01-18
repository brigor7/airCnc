const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
const port = 3333;

mongoose.connect(
  'mongodb+srv://brigor_m0ng0:B@nc0_m0ng0@cluster0-fi27e.gcp.mongodb.net/aircnc?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(port, () => {
  console.log('✔Server Started! on port: ' + port);
});
