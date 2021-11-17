const { AccountService } = require('../../../services');

const all = async (req, res, next) => {
  try {
    const { offset, limit, ...query } = req.query;

    const account = await AccountService.getPublic(query, offset, limit);

    res.send(account);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all,
};
