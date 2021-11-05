const express = require('express');

const router = express.Router();

const accountRoute = require('./accounts');
const formTypeRoute = require('./form_types');
const formRoute = require('./forms');
const verifyAccount = require('../../middlewares/verifyAccount');

const routes = [
  { path: '/accounts', routes: [accountRoute] },
  { path: '/formTypes', routes: [verifyAccount, formTypeRoute] },
  { path: '/forms', routes: [verifyAccount, formRoute] },
];

routes.forEach((route) => {
  router.use(route.path, ...route.routes);
});

module.exports = router;
