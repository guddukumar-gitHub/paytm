import express from "express";

const userRouter = express.Router();

userRouter.use("/user", userRouter);

userRouter.get("/", (req, res) => {
    res.send("Hello, I'm api/v1/user route!")
})

export default userRouter;
