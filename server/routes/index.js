const homeRouter = require('./home');
const usersRouter = require('./users');
const topicRouter = require('./topic');
const articleRouter = require('./article');

routes = {
    users: usersRouter,
    topic: topicRouter,
    home: homeRouter,
    article: articleRouter
};

module.exports = routes;
