const { FormTypeService } = require('../../../services');

const all = async (req, res, next) => {
  try {
    const { offset, limit, ...query } = req.query;

    const formType = await FormTypeService.all(query, offset, limit);

    res.send(formType);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const FormType = await FormTypeService.create(req.body);
    res.send(FormType);
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const FormType = await FormTypeService.findById(id);
    res.send({ FormType });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const FormType = await FormTypeService.update(req.body, { id });
    res.send(FormType);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const FormType = await FormTypeService.delete({ id });
    res.send(FormType);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all, create, show, update, destroy,
};
