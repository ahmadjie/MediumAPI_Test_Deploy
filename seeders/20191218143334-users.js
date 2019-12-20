'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'users',
			[
				{
					fullname: 'Ahmad Adjie',
					username: 'ahmadjie',
					email: 'ahmad.adjiep@gmail.com',
					password: 12345,
					is_active: false
				},
				{
					fullname: 'Udin',
					username: 'udincuy',
					email: 'udin@udin.com',
					password: 12345,
					is_active: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					fullname: 'asep',
					username: 'asepni',
					email: 'asep@gmail.com',
					password: 12345,
					is_active: false,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('users', null, {});
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
