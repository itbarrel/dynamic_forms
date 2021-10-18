const express = require('express');

const router = express.Router();

const accountRoute = require('./accounts');
const formTypeRoute = require('./form_types');
const formRoute = require('./forms');

const routes = [
  { path: '/accounts', routes: [accountRoute] },
  { path: '/form_types', routes: [formTypeRoute] },
  { path: '/forms', routes: [formRoute] },
];

routes.forEach((route) => {
  router.use(route.path, ...route.routes);
});

module.exports = router;
