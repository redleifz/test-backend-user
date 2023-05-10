import User from "../models/userModels.js";
import express from "express";
import expressAsyncHandler from "express-async-handler";

const userRouter = express.Router();

userRouter.get(
    "/",
    expressAsyncHandler(async (req, res) => {
      const users = await User.find({});
      res.send(users);
    })
  );

  export default userRouter;