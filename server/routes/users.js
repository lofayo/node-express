const router = require('./router');
const connection = require('../config/sql');
const response = require('../utils/response');

/* GET users listing. */
// router.param('id', (req, res, next, id) => {
//   const target = users[id];
//   if (target) res.send(target);
//   res.send('data no exist');
//   next();
// })
// 获取用户列表
const getUsersSql = 'select * from user';
router.get('/getUsers', function(req, res, next) {
    connection.query(getUsersSql, (error, result) => {
        if (error) {
            res.send(response.fail(error));
        }
        res.send(response.succeed(result));
    });
});

// 获取用户列表
router.post('/addUsers', function(req, res, next) {
    const { name, age, sex } = req.body || {};
    const addUsersSql = `insert into user(name, age, sex) values(?,?, ?)`;
    const sqlParams = [name, age, sex];
    connection.query(addUsersSql, sqlParams, (error, result) => {
        if (error) {
            res.send(response.fail(error));
        }
        res.send(response.succeed(req.body));
    });
});

module.exports = router;
