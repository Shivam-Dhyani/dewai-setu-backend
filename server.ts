// server.ts - Main entry point
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/config/db";
import exampleRoutes from "./src/routes/exampleRoutes";
import authRoutes from "./src/routes/auth.routes";
import specializationRoutes from "./src/routes/specialization.routes";
import stateRoutes from "./src/routes/state.routes";
import cityRoutes from "./src/routes/city.routes";
import { globalErrorHandler } from "./src/middlewares/errorHandler";
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/example", exampleRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/specializations", specializationRoutes);
app.use("/api/states", stateRoutes);
app.use("/api/cities", cityRoutes);

// Global Error Handling Middleware
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
