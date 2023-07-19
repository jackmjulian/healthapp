const express = require('express');
const router = express.Router();

const nutrition = [
  {
    id: 1,
    type: 'Breakfast',
    food: 'Eggs',
  },
  {
    id: 2,
    type: 'Breakfast',
    food: 'Toast',
  },
];

// Get all Meals
router.get('/', (req, res) => {
  res.json({ success: true, data: nutrition });
});

module.exports = router;
