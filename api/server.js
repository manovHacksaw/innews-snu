import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from "cors";
import newsRouter from './routes/news.routes.js';
import userRouter from './routes/user.routes.js';


dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON

const corsOptions = {
     origin: 'https://innews-snu-fmwc.vercel.app/', // Replace with your frontend's URL
     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
     credentials: true, // Allow credentials (e.g., cookies) to be sent
};

app.use(cors(corsOptions));

// MongoDB connection 
connectDB();

// Use routes
app.use("/api/v1/news", newsRouter);
app.use("/api/v1/user", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
});
