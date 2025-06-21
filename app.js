const express = require('express');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
