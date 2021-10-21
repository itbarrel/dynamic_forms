module.exports = {
  consumes: [
    'application/json',
  ],
  description: 'Delete Form',
  operationId: 'DeleteForm',
  parameters: [{
    description: 'Form ID',
    in: 'path',
    name: 'id',
    required: true,
    type: 'string',
    format: 'uuid',
  }],
  produces: ['application/json'],
  responses: {
    200: {
      description: '{ message: Form is deleted }',
    },
    401: {
      description: 'Token Expire',
    },
    500: {
      description: 'Something went wrong',
    },
  },

  tags: ['v1/Forms'],
};
