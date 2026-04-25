import Joi from "joi";

class BaseDto {
    static schema = Joi.object({})

    static validate(data){
        const {error, value} = this.schema.validate(data, {
            abortEarly : false, //first error pe hi mat ruko
            stripUnknown : true
        })

        if(error){
            const errors = error.details.map(detail => detail.message)
            return {errors, value : null}
        }

        return {errors : null, value}
    }
}

export default BaseDto