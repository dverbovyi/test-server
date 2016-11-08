'use strict';

let express = require('express');
let controller = require('./controller');
let router = express.Router();

router.get('/accounts', controller.getAccounts);
router.get('/roles', controller.getRoles);

module.exports = router;