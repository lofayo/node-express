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
    const trimTopicName = topicName.trim();
    // 查询是否同名
    const selectSameNameSql = `select * from topic where topicName=?`;
    connection.query(selectSameNameSql, [trimTopicName], (error, result) => {
        if (error) res.send(response.fail(error));
        if (result.length) {
            res.send(response.fail('主题名称不能相同'));
        } else {
            const addUsersSql = `insert into topic(topicName, createTime, updateTime) values(?, ?, ?)`;
            const sqlParams = [topicName, new Date(), new Date()];
            connection.query(addUsersSql, sqlParams, (error, result) => {
                if (error) {
                    res.send(response.fail(error));
                }
                res.send(response.succeed(req.body));
            });
        }
    });
});

module.exports = router;
