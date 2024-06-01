import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
import path from "path";

//import Routes
import userRoutes from "./routes/userRoute.js";
import uploadRoutes from "./routes/uploadRoute.js";

dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Router
app.use("/api/users", userRoutes);

//Upload Image
app.use("/api/upload", uploadRoutes);

//Mongoose
connectDB();

//Error
app.use(notFound);
app.use(errorHandler);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(process.env.PORT, () =>
  console.log(`Server đang mở ở port ${process.env.PORT}`)
);
