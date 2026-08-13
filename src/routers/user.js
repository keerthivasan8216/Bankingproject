const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);

        await user.save();

        const token = user.generateAuthToken();

        res.status(201).json({
            user,
            token
        });

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

router.post("/users/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                error: "Invalid email or password"
            });
        }

        const valid = await user.comparePassword(password);

        if (!valid) {
            return res.status(400).json({
                error: "Invalid email or password"
            });
        }

        const token = user.generateAuthToken();

        res.json({
            user,
            token
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

router.get("/users/me", auth, async (req, res) => {
    res.json(req.user);
});

module.exports = router;