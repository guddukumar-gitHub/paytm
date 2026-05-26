import express from "express";
import { userSchema } from "../validation/user.schema";
import User from "../db";
import jwt from "jsonwebtoken";


const mainRouter = express.Router();


mainRouter.get("/", (req, res) => {
    res.send("Hello, I'm api/v1 route!")
})

mainRouter.post("/signup", async (req, res) => {
    const body = req.body;
    const {success} = userSchema.safeParse(body);

    if(!success) {
        return res.json({message: "Incorrect inputs"});
    }

    const user = await User.findOne({
        $or: [
            {email: body.email},
            {username: body.username}
        ]
    });

    if(user) {
        return res.json({
            message: "Username/Email already taken"
        });
    }

    const newUser = await User.create(body);
    const token = jwt.sign({id: newUser._id}, Bun.env.JWT_SECRET);

    res.json({
        message: "User created successfully",
        token
    });


});
export default mainRouter;
