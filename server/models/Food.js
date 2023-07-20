const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  calories: {
    type: Number,
    required: [true, 'Please add a value'],
  },
  protein: {
    type: Number,
    required: [true, 'Please add a value'],
  },
  carbs: {
    type: Number,
    required: [true, 'Please add a value'],
  },
  fat: {
    type: Number,
    required: [true, 'Please add a value'],
  },
});

module.exports = mongoose.model('Food', FoodSchema);
