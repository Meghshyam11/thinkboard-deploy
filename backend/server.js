// server.js

import express from 'express';
import dotenv from 'dotenv';
import notesRoutes from './src/routes/notesRoutes.js';
import { connectDB } from './src/config/db.js';
import rateLimiter from './src/middleware/ratelimiter.js';
import cors from 'cors';
// Load environment variables from .env file
dotenv.config();

// Check if Mongo URI is properly loaded
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is undefined. Please check your .env file.");
  process.exit(1);
}

console.log("✅ Loaded MONGO_URI from environment");

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB().then(()=>{
  // Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

});


app.use(cors({
  origin: "http://localhost:5173",
}));

// Middleware to parse JSON and apply rate limiter
app.use(express.json());
app.use(rateLimiter);

// Routes
app.use("/api/notes", notesRoutes);

app.use(cors({
  origin: "http://localhost:5173",
}));


