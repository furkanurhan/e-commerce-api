

// Modules
const express = require('express');
require('dotenv/config');
const productDetailRoutes = require('./routes/productDetail');
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path')

const app = express();

// Configuration
const port = process.env.PORT || 3000;
const compressionConfig = {
    level: 6,
    threshold: 100 * 1000,
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false
        }
        return compression.filter(req, res)
    }
}

// Middlewares
app.use(compression(compressionConfig));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ))

// Routes
app.use('/productDetail', productDetailRoutes)

// Listen
app.listen(port, () => console.log(`Server is listening at ${port} Port`))


