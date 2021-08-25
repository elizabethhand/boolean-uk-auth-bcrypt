import { loginUser } from "./controller"

const express = require("express")

const router = express()

router.post('/login', loginUser)

export default router