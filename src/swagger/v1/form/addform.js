module.exports = {
  consumes: [
    'application/json',
  ],
  description: 'Add Form',
  operationId: 'AddForm',
  produces: ['application/json'],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
            },
            name: {
              type: 'string',
            },
            description: {
              type: 'string',
              format: 'text',
            },
            identifier: {
              type: 'string',
            },
            fields: {
              type: 'string',
              format: 'json',
            },
            active: {
              type: 'boolean',
            },
            status: {
              type: 'boolean',
            },
          },
          required: [
            'name',
          ],
          type: 'object',
        },
      },
    },
    description: 'Body for API',
    required: true,
  },
  responses: {
    200: {
      description:
                '{id:" ",name:" ",fields:" ",description:" ",active: " ",createAt:" ",updatedAt:" ",deletedAt:" "}',
    },
    401: {
      description: 'Token Expire',
    },
    422: {
      description: 'Invalid input',
    },
    500: {
      description: 'Something went wrong',
    },
  },
  tags: ['v1/Forms'],
};
