import { findUserWithValidation } from "./service";

export const loginUser = async (req, res) => {
    const userCreds = req.body

    try {
        // Check if credentials are valid
        const loggedUser = await findUserWithValidation(userCreds);
        // handle result
        res.json({ user: { id: loggedUser.id, username: loggedUser.username } });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}