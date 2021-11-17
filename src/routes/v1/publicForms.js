const express = require('express');

const router = express.Router();
const publicformController = require('../../controllers/v1/publicform');
const validate = require('../../middlewares/validate');

const { generalValidations } = require('../../validations');

router.get('/public', validate(generalValidations.allResources), publicformController.all);

module.exports = router;
