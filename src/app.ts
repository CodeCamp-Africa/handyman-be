import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Handyman API is running",
  });
});

export default app;
