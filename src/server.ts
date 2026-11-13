import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/database.js";

const PORT = Number(process.env.PORT) || 5000;

const startServer = async (): Promise<void> => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Handyman API is running on port ${PORT}`);
  });
};

void startServer();
