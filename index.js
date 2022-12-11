import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import compression from "compression";

import hotelRouter from './routes/hotelsRoute.js';
import authRouter from './routes/authRoute.js';
import userRouter from './routes/usersRoute.js';
import roomRouter from './routes/roomsRoute.js';

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:8000/api/v1"
}));

//To serve the frontend
// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", function (req, res){
//     res.sendFile(
//         path.join(__dirname, './client/build/index.js'),
//         function (err) {
//             res.status(500).send(err);
//         }
//     );
// });

app.use(cookieParser());
app.use(compression());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/hotel", hotelRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/room", roomRouter);

export default app;

