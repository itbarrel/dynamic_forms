const { TenantService } = require('../../../services');

const all = async (req, res, next) => {
    try {
        const { offset, limit, ...query } = req.query;

        const { docs, pages, total } = await TenantService.all(query, offset, limit);

        res.send({ data: docs, pages, total });
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const Tenant = await TenantService.create(req.body);
        res.send(Tenant);
    } catch (error) {
        next(error);
    }
};

const show = async (req, res, next) => {
    try {
        const { id } = req.params;
        const Tenant = await TenantService.findById(id);
        res.send({ Tenant });
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const Tenant = await TenantService.update(req.body, { id });
        res.send(Tenant);
    } catch (error) {
        next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        const { id } = req.params;
        const Tenant = await TenantService.delete({ id });
        res.send({ message: 'Tenant is deleted' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    all, create, show, update, destroy,
};
