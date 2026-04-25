import * as authService from "./auth.service.js"
import ApiResponse from "../../common/utils/api-response.js"

const registerHandler = async (req, res) => {
    const user = await authService.register(req.body)    
    ApiResponse.created(res, "Resitration Success", user)
}

export {registerHandler}