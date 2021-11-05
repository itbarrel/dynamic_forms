const { FormService } = require('../../../services');

const all = async (req, res, next) => {
  try {
    const { offset, limit, ...query } = req.query;

    const { docs, pages, total } = await FormService.all(query, offset, limit);

    res.send({ data: docs, pages, total });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const Form = await FormService.create(req.body);
    res.send(Form);
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Form = await FormService.findById(id);
    res.send({ Form });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Form = await FormService.update(req.body, { id });
    res.send(Form);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Form = await FormService.delete({ id });
    res.send({ message: 'Form is deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all, create, show, update, destroy,
};
