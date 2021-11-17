const { TenantService } = require('../services');
const storage = require('../utils/cl-storage');

const verifyTenant = async (req, res, next) => {
  storage.run(async () => {
    try {
      const tenant = await TenantService.findByQuery({
        apikey: req.headers.token,
        active: true,
      }, true);

      if (tenant) {
        storage.set('tenant', tenant);
        next();
      } else {
        next(new Error('Tenant Not Found'));
      }
    } catch (error) {
      next(error);
    }
  });
};

module.exports = verifyTenant;
