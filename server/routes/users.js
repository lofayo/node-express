var express = require('express');
var router = express.Router();
const connection = require('../config/sql');

/* GET users listing. */
// router.param('id', (req, res, next, id) => {
//   const target = users[id];
//   if (target) res.send(target);
//   res.send('data no exist');
//   next();
// })

// 获取用户列表
const querySql = 'select * from user';
router.get('/getUsers', function(req, res, next) {
  connection.query(querySql, (error, result) => {
    if (error) throw error;
    res.set({'Access-Control-Allow-Origin': '*'});
    const resData  = {
      success: true,
      data: result,
      message: '成功'
    };
    res.send(resData);
  })
});

// 获取用户列表
// const querySql = 'select * from user';
router.post('/addUsers', function(req, res, next) {
    res.set({'Access-Control-Allow-Origin': '*'});
    res.send({name:'fofo'});
});

module.exports = router;
