const { StatusCodes } = require('http-status-codes');

class ValidationError extends Error {
    constructor (error) {
        super();
        let explanation = [];
        error.errors.forEach((element) => {
            explanation.push(element.message);
        });
        this.name = "Validation Error",
        this.message = "Unable to validate data", 
        this.explanation = explanation;
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
};

module.exports = ValidationError;