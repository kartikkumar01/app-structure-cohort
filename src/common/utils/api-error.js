class ApiError extends Error{
    constructor(statusCode, message){
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this, this.constuctor)
    }

    static badRequest(message = 'Bad Request'){
        return new ApiError(400, message)
    }

    static unauthorized(message = 'unauthorized'){
        return new ApiError(403, message)
    }
}

export default ApiError