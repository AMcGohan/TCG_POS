import express from "express";
import cors from "cors";
import cardRoutes from "./routes/cards.routes.js"

export function createApp() {

    const app = express();
    
    // Enable CORS for all routes
    app.use(cors());
    
    app.use(express.json());

    app.use("/api/cards", cardRoutes);
    
    return app;
}