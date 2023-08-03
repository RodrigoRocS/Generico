module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        user_name: 'Teste',
        email: 'teste@teste.com',
        password: '123456',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        user_name: 'Michael Schumacher',
        email: 'MichaelSchumacher@gmail.com',
        password: '123456',
        created_at: new Date(),
        updated_at: new Date(),
      },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};

