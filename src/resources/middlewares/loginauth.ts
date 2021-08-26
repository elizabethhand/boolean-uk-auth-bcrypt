import { validateToken } from "../utils/authgenerator"

export function loginUsers(req, res, next) {
    const token = req.cookies.token

    const userData = token && validateToken(token);

    console.log("userData", userData)

    if (userData != null) {
        req.currentUser = userData;
        next();
    } else {
        res
            .status(401)
            .json({ err: "You need to be logged in to access this data" });
    }
}