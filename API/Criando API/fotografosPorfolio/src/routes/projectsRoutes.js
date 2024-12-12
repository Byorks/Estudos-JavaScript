import express from "express";
import cors from "cors";
import { createNewProject } from "../controllers/projectsController.js";

const corsOptions = {
    origin: "http//localhost:8000",
    optionSuccessStatus: 200
}

const projectRoutes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));

    // app.get("/projects", listProjects);

    app.post("/project/:id", createNewProject);
} 

export default projectRoutes;