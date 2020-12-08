const router = require('./router');
const connection = require('../config/sql');
const response = require('../utils/response');

router.get('/getArticles', (req, res) => {
    const getTopicsSql = `select * from topic`;
    connection.query(getTopicsSql, (error, result) => {
        if (error) {
            return res.send(response.fail(error));
        }
        return res.send(response.succeed(result));
    });
});

router.post('/addArticle', (req, res, next) => {
    const { type, content } = req.body || {};
    const addArticleSql = `insert into article(type, content) values(?, ?)`;
    const sqlParams = [type, content];
    connection.query(addArticleSql, sqlParams, (error, result) => {
        if (error) {
            return res.send(response.fail(error));
        }
        return res.send(response.succeed(req.body));
    });
});

module.exports = router;
