import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv";
import seedRouter from './routes/seedRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config()

const app = express();
const port = 5000

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/seed", seedRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})