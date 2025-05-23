class ApiErrors extends Error {
    constructor(message="Something went wrong", statusCode,errors=[],stack="") {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.isOperational = true; 
        this.errors = errors;
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiErrors}