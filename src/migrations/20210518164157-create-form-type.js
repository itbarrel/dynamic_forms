module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('formTypes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDv4,
      },
      name: {
        type: Sequelize.STRING,
        index: true,
      },
      description: Sequelize.TEXT,
      multiple: Sequelize.BOOLEAN,
      accountId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'accounts',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      tenantId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'tenants',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
    // await queryInterface.addIndex('form_types', ['name', 'accountId'])

    await queryInterface.addConstraint('formTypes', {
      fields: ['name', 'accountId', 'tenantId'],
      type: 'unique',
      name: 'unique_name_per_account',
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('formTypes');
  },
};
