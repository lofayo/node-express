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
const querySql = 'select * from person';
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

module.exports = router;
