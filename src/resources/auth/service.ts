import dbClient from "../utils/database"
import { compare } from "bcrypt"

export const findUserWithValidation = async (userData) => {

    console.log(userData)
    const foundUser = await dbClient.user.findUnique({
        where: {
            username: userData.username
        }
    })
    if (!foundUser) throw new Error("Username not found")

    console.log("userData", userData.password)
    console.log("foundData", foundUser.password)

    const foundPassword = await compare(userData.password, foundUser.password)

    if (!foundPassword) throw new Error("Password not found")

    return foundUser;
}