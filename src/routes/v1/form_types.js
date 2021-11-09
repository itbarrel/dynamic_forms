const express = require('express');

const router = express.Router();
const formTypesController = require('../../controllers/v1/form_types');
const validate = require('../../middlewares/validate');

const { generalValidations, formTypeValidations } = require('../../validations');

router.get('/', validate(generalValidations.allResources), formTypesController.all);

router.post('/', validate(formTypeValidations.formTypeObj), formTypesController.create);

router.get('/:id', validate(generalValidations.getResource), formTypesController.show);

router.put('/:id',
  validate(generalValidations.getResource),
  validate(formTypeValidations.formTypeObj), formTypesController.update);

router.delete('/:id', validate(generalValidations.getResource), formTypesController.destroy);

module.exports = router;
