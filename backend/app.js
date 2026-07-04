import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import auth from "./routes/auth.route.js";

const app = express();

// MIIDDLEWARE
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(morgan("combined"));

// auth routes
app.use("/api/auth", auth);

app.get("/", (req, res) => {
  console.log("Server is running");
});
export default app;
