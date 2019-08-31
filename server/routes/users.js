var express = require('express');
var router = express.Router();
const connection = require('../config/sql');

const users = [{
  id: 1,
  name: 'fofo', 
  age: 18  
},{
  id: 2,
  name: 'lofayo',
  age: 26
}]

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
    res.send(result);
  })
});

module.exports = router;
