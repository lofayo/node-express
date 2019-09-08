const homeRouter = require('./home');
const usersRouter = require('./users');
const topicRouter = require('./topic');

routes = {
    users: usersRouter,
    topic: topicRouter,
    home: homeRouter
};

module.exports = routes;
