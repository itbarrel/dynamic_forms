const models = require('../models');
const AccountResourceService = require('./account_resource');

class AccountService extends AccountResourceService {
  constructor() {
    super(models.Account);
  }
}

module.exports = new AccountService();
