const express = require('express');

const router = express.Router();
const tenantController = require('../../controllers/v1/tenant');
const validate = require('../../middlewares/validate');

const { generalValidations, tenantValidations } = require('../../validations');

router.get('/', validate(generalValidations.allResources), tenantController.all);

router.post('/', validate(tenantValidations.tenantObj), tenantController.create);

router.get('/:id', validate(generalValidations.getResource), tenantController.show);

router.put('/:id',
  validate(generalValidations.getResource),
  validate(tenantValidations.tenantObj), tenantController.update);

router.delete('/:id', validate(generalValidations.getResource), tenantController.destroy);

module.exports = router;
