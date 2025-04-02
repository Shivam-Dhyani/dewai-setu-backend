// server.ts - Main entry point
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/config/db";
import exampleRoutes from "./src/routes/exampleRoutes";
import errorHandler from "./src/middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/example", exampleRoutes);

// Global Error Handling Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
