'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('articles', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			title: {
				type: Sequelize.STRING
			},
			content: {
				type: Sequelize.TEXT
			},
			image: {
				type: Sequelize.STRING
			},
			idCategory: {
				type: Sequelize.INTEGER,
				references: {
					model: 'categories',
					key: 'id'
				},
				onDelete: 'cascade',
				onUpdate: 'cascade'
			},
			idUser: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				},
				onDelete: 'cascade',
				onUpdate: 'cascade'
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('articles');
	}
};
