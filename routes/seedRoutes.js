import express from "express";
import mockData from '../mockData.js'
import User from "../models/userModels.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {

  await User.deleteMany({});
  const createUsers = await User.insertMany(mockData.users);
  res.send({ createUsers });
});

export default seedRouter;