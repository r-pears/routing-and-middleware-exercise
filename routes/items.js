const Item = require('../item');
const express = require('express');
const router = express.Router();

router.get('', (req, res, next) => {
  try {
    return res.json({ items: Item.findAll() });
  } catch (error) {
    return next(error);
  }
});

router.post('', (req, res, next) => {
  try {
    let newItem = new Item(req.body.name, req.body.price);
    return res.json({ item: newItem });
  } catch (error) {
    return next(error);
  }
});

router.get('/:name', (req, res, next) => {
  try {
    let foundItem = Item.find(req.params.name);
    return res.json({ item: foundItem });
  } catch (error) {
    return next(error);
  }
});

router.patch('/:name', (req, res, next) => {
  try {
    let foundItem = Item.update(req.params.name, req.body);
    return res.json({ item: foundItem }); 
  } catch (error) {
    return next(error);
  }
});

router.delete('/:name', (req, res, next) => {
  try {
    Item.remove(req.params.name);
    return res.json({ message: 'Deleted' });
  } catch (error) {
    return next(err);
  }
})

module.exports = router;