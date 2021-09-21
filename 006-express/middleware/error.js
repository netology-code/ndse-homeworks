module.exports = function (error, request, response, next) {
    return response.status(500).json({
        error: error.toString(),
    });
}