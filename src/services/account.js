const models = require('../models');
const AccountResourceService = require('./account_resource');

class AccountService extends AccountResourceService {
  constructor() {
    super(models.Account);
  }

  async getPublic(query = {}, offset = 0, limit = 20) {
    const includeClause = [{
      model: models.Form,
      where: {
        public: true,
      },
      // required: false
    }];

    return this.findByQuery(query, false, undefined, includeClause, offset, limit);
  }
}

module.exports = new AccountService();
