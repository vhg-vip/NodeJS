const express = require('express');
const controller = require('../controller/controller.tour')

const router = express.Router();

router.route('/tour')
    .get(controller.readFile)
    
router.route('/tour/:id')
    .get(controller.getTour)

module.exports = router;