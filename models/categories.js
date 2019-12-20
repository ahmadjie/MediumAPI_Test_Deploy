'use strict';
module.exports = (sequelize, DataTypes) => {
	const categories = sequelize.define(
		'categories',
		{
			name: DataTypes.STRING
		},
		{}
	);
	categories.associate = function(models) {
		// associations can be defined here
		//hasmany = punya banyak
		categories.hasMany(models.articles, {
			foreignKey: 'idCategory',
			targetKey: 'name'
		});
	};
	return categories;
};
