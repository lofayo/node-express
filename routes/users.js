var express = require('express');
var router = express.Router();

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
router.param('id', (req, res, next, id) => {
  const target = users[id];
  if (target) res.send(target);
  res.send('data no exist');
  next();
})
router.get('/:id', function(req, res, next) {
  res.send('response is ending')
});

module.exports = router;
