const express = require('express');

const router = express.Router();
const formTypesController = require('../../controllers/v1/form_types');
const validate = require('../../middlewares/validate');

const { generalValidations } = require('../../validations');

router.get('/', validate(generalValidations.allResources), formTypesController.all);

router.post('/', formTypesController.create);

router.get('/:id', validate(generalValidations.getResource), formTypesController.show);

router.put('/:id',
  validate(generalValidations.getResource), formTypesController.update);

router.delete('/:id', validate(generalValidations.getResource), formTypesController.destroy);

module.exports = router;
