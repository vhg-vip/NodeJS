const express = require('express');
const controller = require('../controller/controller.a');

const router = express.Router();

router.route('/login')
    .get(controller.themHS)
    .post( (req, res) => {
        res.send('bbb')
    });

module.exports = router;