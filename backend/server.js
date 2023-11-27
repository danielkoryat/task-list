import express from "express";
import router from "./routes/task.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))
app.use("/tasks", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect("mongodb://localhost:27017/todo-list")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));