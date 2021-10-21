module.exports = {
  consumes: [
    'application/json',
  ],
  description: 'Delete FormType',
  operationId: 'DeleteFormType',
  parameters: [{
    description: 'FormType ID',
    in: 'path',
    name: 'id',
    required: true,
    type: 'string',
    format: 'uuid',
  }],
  produces: ['application/json'],
  responses: {
    200: {
      description: '{ message: FormType is deleted }',
    },
    401: {
      description: 'Token Expire',
    },
    500: {
      description: 'Something went wrong',
    },
  },

  tags: ['v1/FormTypes'],
};
