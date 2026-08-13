const express = require("express");
const cors = require("cors");

require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});