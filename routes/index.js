const homeRouter = require('./home');
const usersRouter = require('./users');

routes = {
    users: usersRouter,
    home: homeRouter
};

module.exports = routes;