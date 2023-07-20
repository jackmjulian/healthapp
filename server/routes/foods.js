const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const {
  getAllFoods,
  getFoodById,
  addFood,
  updateFoodById,
  deleteFoodById,
} = require('../controllers/foodController');

// Get all foods
router.get('/', getAllFoods);

// Get food by id
router.get('/:id', getFoodById);

// Add a food
router.post('/', addFood);

// Update food
router.put('/:id', updateFoodById);

// Delete food
router.delete('/:id', deleteFoodById);

module.exports = router;
