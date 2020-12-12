const express = require('express');
const EmployeeController = require('./controllers/EmployeeController');

const router = express.Router();

router.get('/employees', EmployeeController.getAll);
router.get('/employees/:id', EmployeeController.getById);
router.post('/employees', EmployeeController.save);
router.delete('/employees/:id', EmployeeController.deleteById);
router.put('/employees/:id', EmployeeController.updateById);

module.exports = router;