const router = require('./router');
const connection = require('../config/sql');
const response = require('../utils/response');

router.get('/getTopics', (req, res) => {
    const getTopicsSql = `select * from topic`;
    connection.query(getTopicsSql, (error, result) => {
        if (error) {
            res.send(response.fail(error));
        }
        res.send(response.succeed(result));
    });
});

router.post('/addTopic', (req, res, next) => {
    const { topicName } = req.body || {};
    const addUsersSql = `insert into topic(topicName) values(?)`;
    const sqlParams = [topicName];
    connection.query(addUsersSql, sqlParams, (error, result) => {
        if (error) {
            res.send(response.fail(error));
        }
        res.send(response.succeed(req.body));
    });
});

module.exports = router;
