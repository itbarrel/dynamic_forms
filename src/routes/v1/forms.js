const express = require('express');

const router = express.Router();
const formController = require('../../controllers/v1/form');
const validate = require('../../middlewares/validate');

const { generalValidations } = require('../../validations');

router.get('/', validate(generalValidations.allResources), formController.all);

router.post('/', formController.create);

router.get('/:id', validate(generalValidations.getResource), formController.show);

router.put('/:id',
  validate(generalValidations.getResource), formController.update);

router.delete('/:id', validate(generalValidations.getResource), formController.destroy);

module.exports = router;
