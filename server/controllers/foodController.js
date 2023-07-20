const asyncHandler = require('express-async-handler');
const Food = require('../models/Food');

// @desc Get all foods items
// @route GET /api/nutrition/foods
const getAllFoods = asyncHandler(async (req, res) => {
  try {
    const foods = await Food.find();
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// @desc Get food item by ID
// @route GET /api/nutrition/foods/{id}
const getFoodById = asyncHandler(async (req, res) => {
  try {
    // Find a food by id
    const food = await Food.findById(req.params.id);
    res.json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//desc Add a food by ID
// route POST /api/nutrition/foods
const addFood = asyncHandler(async (req, res) => {
  const food = new Food({
    name: req.body.name,
    calories: req.body.calories,
    protein: req.body.protein,
    carbs: req.body.carbs,
    fat: req.body.fat,
  });

  try {
    const savedFood = await food.save();
    res.json({ success: true, data: savedFood });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//desc Update a food item by ID
//route PUT /api/nutrition/foods/{id}
const updateFoodById = asyncHandler(async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          calories: req.body.calories,
          protein: req.body.protein,
          carbs: req.body.carbs,
          fat: req.body.fat,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedFood });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//desc Delete a foot item by ID
// DELETE /api/nutrition/foods/{id}
const deleteFoodById = asyncHandler(async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

module.exports = {
  getAllFoods,
  getFoodById,
  addFood,
  updateFoodById,
  deleteFoodById,
};
