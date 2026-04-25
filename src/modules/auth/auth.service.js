import ApiError from "../../common/utils/api-error.js"
import { generateResetToken } from "../../common/utils/jwt.utils.js"
import User from "./auth.model.js"

const register = async ({email}) => {
    const existing = await User.findOne({email})
    if(existing) throw ApiError.conflict("Email already exists")

    const {rawToken, hashedToken} = generateResetToken()

    const user = await User.create({
        name,
        email,
        password,
        role,
        verificationToken : hashedToken
    })

    const userObj = user.toObject()
    delete userObj.password
    delete userObj.verificationToken


    //send email to user with token : rawToken

    return userObj
}

export {register}