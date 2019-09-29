const response = {
    succeed(data) {
        return {
            success: true,
            data,
            message: '成功'
        };
    },
    fail(data) {
        return {
            success: false,
            data: null,
            message: data
        };
    }
};
module.exports = response;
