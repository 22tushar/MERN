const { body, validationResult } = require('express-validator');

const validateTask = [
  body('title').notEmpty(),
  body('status').isIn(['todo', 'in progress', 'done']),
  body('dueDate').isDate().isAfter(new Date().toString()),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateTask };

