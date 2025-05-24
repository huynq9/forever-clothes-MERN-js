import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB(); // connect to mongoDB
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);

// api endpoints

app.get("/", (req, res) => {
  res.status(200).send("API working!");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
