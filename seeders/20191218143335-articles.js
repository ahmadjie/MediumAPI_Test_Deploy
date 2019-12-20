'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'articles',
			[
				{
					title: 'Dragon ball Games',
					content: 'Games Dragon',
					image: 'https://placeimg.com/640/480/any',
					idCategory: 2,
					idUser: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					title: 'Fundamental React',
					content: 'learn React',
					image: 'https://placeimg.com/700/480/any',
					idCategory: 1,
					idUser: 1,
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
		return queryInterface.bulkDelete('articles', null, {});
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
