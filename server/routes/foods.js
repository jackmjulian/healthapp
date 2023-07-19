const express = require('express');
const router = express.Router();

const foods = [
  {
    id: 1,
    name: 'Egg',
    calories: '78',
    protein: '7.5',
    carbs: '0.1',
    fat: '5.4',
  },
  {
    id: 2,
    name: 'Toast',
    calories: '119',
    protein: '4.2',
    carbs: '22.5',
    fat: '1',
  },
  {
    id: 3,
    name: 'Protein Shake',
    calories: '131',
    protein: '24.5',
    carbs: '3.5',
    fat: '2.1',
  },
];

// Get all foods
router.get('/', (req, res) => {
  res.json({ success: true, data: foods });
});

// Get food by id
router.get('/:id', (req, res) => {
  // Find a food by id
  const food = foods.find((food) => food.id === +req.params.id);

  if (!food) {
    return res.status(404).json({ success: false, error: 'Food not found' });
  }

  res.json({ success: true, data: food });
});

// Add a food
router.post('/', (req, res) => {
  const food = {
    id: foods.length + 1,
    name: req.body.name,
    calories: req.body.calories,
    protein: req.body.protein,
    carbs: req.body.carbs,
    fat: req.body.fat,
  };

  foods.push(food);

  console.log(food);

  res.json({ success: true, data: food });
});

// Update food
router.put('/:id', (req, res) => {
  // Find a food by id
  const food = foods.find((food) => food.id === +req.params.id);

  if (!food) {
    return res.status(404).json({ success: false, error: 'Food not found' });
  }

  food.name = req.body.name || food.name;
  food.calories = req.body.calories || food.calories;
  food.protein = req.body.protein || food.protein;
  food.carbs = req.body.carbs || food.carbs;
  food.fat = req.body.fat || food.fat;

  res.json({ success: true, data: food });
});

// Delete food
router.delete('/:id', (req, res) => {
  // Find a food by id
  const food = foods.find((food) => food.id === +req.params.id);

  if (!food) {
    return res.status(404).json({ success: false, error: 'Food not found' });
  }

  const index = foods.indexOf(food);
  // delete one with splice
  foods.splice(index, 1);

  res.json({ success: true, data: {} });
});

module.exports = router;
