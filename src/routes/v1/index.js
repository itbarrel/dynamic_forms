const express = require('express');

const router = express.Router();

const accountRoute = require('./accounts');
const formTypeRoute = require('./form_types');
const formRoute = require('./forms');
const tenantRoute = require('./tenants');
const publicFormRoute = require('./publicForms');

const verifyAccount = require('../../middlewares/verifyAccount');
const verifyTenant = require('../../middlewares/verifyTenant');

const routes = [
  { path: '/tenants', routes: [tenantRoute] },
  { path: '/accounts', routes: [verifyTenant, accountRoute] },
  { path: '/formTypes', routes: [verifyTenant, verifyAccount, formTypeRoute] },
  { path: '/forms', routes: [verifyTenant, publicFormRoute] },
  { path: '/forms', routes: [verifyTenant, verifyAccount, formRoute] },

];

routes.forEach((route) => {
  router.use(route.path, ...route.routes);
});

module.exports = router;
