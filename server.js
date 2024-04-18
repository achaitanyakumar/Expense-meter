const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({path:'./config/config.env'});

connectDB();

const transaction = require('./routes/transaction');

const app = express();

app.use('/api/v1/transaction',transaction);
const PORT = process.env.PORT || 5002; // Use a different port, or keep 5002 if it's available



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

