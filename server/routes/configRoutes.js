const express = require('express');
const router = express.Router();
const { saveConfiguration, loadConfigurations } = require('../controllers/configController');

router.post('/', saveConfiguration);
router.get('/', loadConfigurations);

module.exports = router;

