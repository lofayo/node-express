const response = {
    succeed(data) {
        return {
            success: true,
            data,
            message: '成功'
        }
    },
    fail(data) {
        return {
            success: false,
            data,
            message: '失败'
        }
    }
}
module.exports = response;