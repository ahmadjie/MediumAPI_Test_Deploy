const Model = require('../models');
const Categories = Model.categories;

//show all categories
exports.index = (req, res) => {
	Categories.findAll({
		attributes: {
			exclude: [ 'createdAt', 'updatedAt' ]
		}
	}).then((data) => res.send(data));
};

// get detail category
exports.showCategory = (req, res) => {
	const { id } = req.params;
	Categories.findOne({
		where: {
			id: id
		},
		attributes: {
			exclude: [ 'createdAt', 'updatedAt' ]
		}
	}).then((data) => res.send(data));
};

// add category
exports.addCategory = (req, res) => {
	Categories.create(req.body).then((data) =>
		res.send({
			message: 'success',
			data
		})
	);
};
