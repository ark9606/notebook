const express = require('express');
const router = express.Router();
const controller = require('../controllers/api');

router.delete('/records', controller.deleteRecord);

router.get('/records', controller.getRecords);

router.put('/records', controller.putRecord);

router.post('/records', controller.editRecord);




module.exports = router;
