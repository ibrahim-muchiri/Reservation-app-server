import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

import hotelRouter from './routes/hotelsRoute.js';
import authRouter from './routes/authRoute.js';
import userRouter from './routes/usersRoute.js';
import roomRouter from './routes/roomsRoute.js';

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:8000/api/v1"
}));

app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/hotel", hotelRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/room", roomRouter);

export default app;

