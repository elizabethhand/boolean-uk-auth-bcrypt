import dbClient from "../utils/database";
const bcrypt = require('bcrypt');
import { hash } from "bcrypt";

const create = async (newUser) => {
    console.log(newUser)
    console.log(newUser.data.password)

    const saltRounds = 10;
    const myPlaintextPassword = newUser.data.password

    console.log(saltRounds)
    console.log(myPlaintextPassword)

    const hashedPassword = await hash(myPlaintextPassword, saltRounds)


    const savedUser = dbClient.user.create({
        data: { ...newUser, password: hashedPassword },
    });

    return savedUser
}

const userClient = {
    ...dbClient.user,
    create
}

export default userClient