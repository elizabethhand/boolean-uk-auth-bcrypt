import dontenv from "dotenv"
import jwt from "jsonwebtoken"

dontenv.config()

const secret = process.env.JWT_SECRET

export function createToken(payload) {
    const token = jwt.sign(payload, secret)
    console.log("TOKEN", token)
}

export function validateToken(token) {
    const validated = jwt.verify(token, secret)
}