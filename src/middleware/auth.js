const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
    try {
        const header = req.header("Authorization");

        if (!header) {
            return res.status(401).send({
                error: "Authentication required"
            });
        }

        const token = header.replace("Bearer ", "");

        const decoded = jwt.verify(token, "mysecretkey");

        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(401).send({
                error: "User not found"
            });
        }

        req.user = user;

        next();

    } catch (error) {
        res.status(401).send({
            error: "Please authenticate"
        });
    }
};

module.exports = auth;