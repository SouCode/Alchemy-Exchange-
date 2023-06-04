const express = require('express');
const router = express.Router();
const alpacaController = require('../Controllers/AlpacaController');

router.post('/keys', alpacaController.saveAlpacaKeys);
router.get('/account', alpacaController.getAlpacaAccount);
router.get('/portfolio', alpacaController.getAlpacaPortfolio);
router.get('/historical-data', alpacaController.retrieveHistoricalData); 


module.exports = router;
