const express = require('express');
const bodyParser = require('body-parser');
// const seed = require('../helper/seed.js');
const item1 = require('../helper/useSeed.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./client/dist'));

app.get('/get', (req, res) => {
	res.send(item1);
});

// app.get('/getUser', (req, res) => {
// )

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// console.log(seed.goSeed());
