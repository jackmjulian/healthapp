const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5001;
const connectDB = require('./config/db');

connectDB();

const app = express();

// Body parser middleware to send raw json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Home Page Connected');
});

const nutritionRouter = require('./routes/nutrition');
const foodRouter = require('./routes/foods');

app.use('/api/nutrition', nutritionRouter);
app.use('/api/nutrition/foods', foodRouter);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
