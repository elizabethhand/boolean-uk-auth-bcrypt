import { createToken } from "../utils/authgenerator";
import { findUserWithValidation } from "./service";

export const loginUser = async (req, res) => {
    const userCreds = req.body

    try {
        // Check if credentials are valid
        const loggedUser = await findUserWithValidation(userCreds);
        const token = createToken({
            id: loggedUser.id,
            username: loggedUser.username
        })

        res.cookie("token", token, { httpOnly: true });
        // handle result
        res.json({ user: { id: loggedUser.id, username: loggedUser.username } });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}