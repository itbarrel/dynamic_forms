module.exports = {
  consumes: [
    'application/json',
  ],
  description: 'Update FormType',
  operationId: 'updateFormType',
  parameters: [{
    description: 'FormType ID',
    in: 'path',
    name: 'id',
    required: true,
    type: 'string',
    format: 'uuid',
  }],
  produces: ['application/json'],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          properties: {
            name: {
              type: 'string',
            },
            description: {
              type: 'string',
              format: 'text',
            },
            multiple: {
              type: 'boolean',
            },
            active: {
              type: 'boolean',
            },
            status: {
              type: 'boolean',
            },
          },

          type: 'object',
        },
      },
    },
    description: 'Body for Login',
    required: true,
  },
  responses: {
    200: {
      description: '{id:" ",name:" ",active: " ",multiple:" ",createAt:" ",updatedAt:" ",deletedAt:" "}',
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
