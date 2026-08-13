const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");

const router = express.Router();


// ===============================
// CREATE TASK
// ===============================

router.post("/tasks", auth, async (req, res) => {
    try {
        const task = new Task({
            description: req.body.description,
            owner: req.user._id
        });

        await task.save();

        res.status(201).json(task);

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

// UPDATE TASK - MARK AS COMPLETED
router.patch("/tasks/:id", auth, async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            owner: req.user._id
        });

        if (!task) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        task.completed = true;

        await task.save();

        res.json(task);

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});
// ===============================
// GET TASKS
// Filter + Pagination + Sorting
// ===============================

router.get("/tasks", auth, async (req, res) => {

    try {

        // -------------------------
        // FILTER
        // -------------------------

        const match = {
            owner: req.user._id
        };

        // Example:
        // /tasks?completed=true

        if (req.query.completed !== undefined) {

            match.completed =
                req.query.completed === "true";
        }


        // -------------------------
        // PAGINATION
        // -------------------------

        const limit =
            parseInt(req.query.limit) || 10;

        const skip =
            parseInt(req.query.skip) || 0;


        // -------------------------
        // SORTING
        // -------------------------

        let sort = {
            createdAt: -1
        };

        // Example:
        // /tasks?sortBy=createdAt:asc

        if (req.query.sortBy) {

            const [field, direction] =
                req.query.sortBy.split(":");

            sort = {};

            sort[field] =
                direction === "desc" ? -1 : 1;
        }


        // -------------------------
        // FIND TASKS
        // -------------------------

        const tasks = await Task.find(match)
            .limit(limit)
            .skip(skip)
            .sort(sort);


        // -------------------------
        // SEND RESPONSE
        // -------------------------

        res.json(tasks);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});


module.exports = router;