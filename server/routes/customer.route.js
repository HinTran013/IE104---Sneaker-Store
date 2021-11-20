const express = require('express');
const customerController = require('../controllers/customer.controller.js');

const router = express.Router();

router.get('/login', customerController.getCustomerLogin);
router.get('/getbyemail', customerController.getCustomerByEmail);
router.post('/signup', customerController.createCustomerAccount);

module.exports = router;