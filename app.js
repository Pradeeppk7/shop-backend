const express = require(
    "express");
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
require("dotenv/config");

const api = process.env.API_URL;
//middleware
//app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: "hair dresser",
        image:'someurl',
    }
    res.send(product);
})
app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
})
app.listen(3000, () => {
    console.log(api);
    console.log('sever is running');
})