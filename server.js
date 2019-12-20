const express = require('express');
require('express-group-routes');
const categoriesController = require('./controllers/categories');
const articlesController = require('./controllers/articles');

const app = express();
const port = 3001;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.group('/api/v1', (router) => {
	//get all categories
	router.get('/categories', categoriesController.index);

	//get category by id
	router.get('/category/:id', categoriesController.showCategory);

	//post category
	router.post('/category', categoriesController.addCategory);

	//get all articles
	router.get('/articles', articlesController.index);

	//get articles by category
	router.get('/articles/:id/category', articlesController.showArticlesByCategory);

	//get lastest articles
	router.get('/articles/lastest', articlesController.lastArticles);
	//post article
	router.post('/article', articlesController.addArticle);
	//update article
	router.patch('/article/:id', articlesController.updateArticle);
	//delete article
	router.delete('/article/:id', articlesController.deleteArticle);
});

app.listen(port, () => console.log(`Run on port ${port}`));
