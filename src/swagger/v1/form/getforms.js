module.exports = {
  consumes: [
    'application/json',
  ],
  description: 'Form listing',
  operationId: 'FormListing',
  parameters: [{
    description: 'OffSet',
    in: 'query',
    name: 'offset',
    type: 'string',
  },
  {
    description: 'Limit',
    in: 'query',
    name: 'limit',
    type: 'string',
  },

  ],
  produces: ['application/json'],
  responses: {
    200: {
      description: '{data:[{},{}],pages:[],total:[]}',
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
