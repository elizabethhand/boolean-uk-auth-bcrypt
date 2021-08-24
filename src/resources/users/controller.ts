import dbClient from "../utils/database"
import { Request, Response } from "express";
import userClient from "./service"

export const getUsers = async (req: Request, res: Response) => {
    const getUsers = await userClient.findMany()


    res.json({ data: getUsers })
}

export const postUser = async (req: Request, res: Response) => {
    const newUser = req.body

    console.log(newUser)
    const postUser = await userClient.create({ data: newUser })

    res.json({ newUser: postUser })
}