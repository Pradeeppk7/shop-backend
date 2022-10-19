const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv/config");

app.use(cors());
app.options('*',cors())

//middleware
//app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('tiny'));

//routes
const categoriesRoutes = require('./routes/categories');
const productsRouter = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRouter);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

//database
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:'shop-database'
}).then(() => {
    console.log('Database Connection is ready...')
}).catch((err) => {
    console.log(err);
})

//server
app.listen(3000, () => {
    
    console.log('server is running http://localhost:3000');
})