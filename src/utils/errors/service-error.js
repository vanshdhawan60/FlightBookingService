const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor (
        name = "Server Error",
        message = "Something went wrong in Server", 
        explanation = "Service Layer Error", 
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
    ) {
        super();
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
};

module.exports = ServiceError;