const express = require('express');
const logger = require('morgan');
const authRoutes = require('./routes/auth.routes.js');
const cookieParser = require('cookie-parser');

// Initializing express server
const app = express();

// Server settings
app.disable('x-powered-by');
// Morgan logger
app.use(logger('dev'));
// express json parser
app.use(express.json());
// cookie parser middleware
app.use(cookieParser());

// Server routers
// Authorization routes
app.use('/api', authRoutes);

module.exports = app;

