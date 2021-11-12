const { TenantService } = require('../services');
const storage = require('../utils/cl-storage');

const verifyTenant = async (req, res, next) => {
    storage.run(async () => {
        try {
            const Tenant = await TenantService.findByQuery({
                apikey: req.headers.token,
            }, true);
            if (Tenant) {
                storage.set('tenant', Tenant);
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
