import express from "express";
import usersRoutes from "./src/routes/projectsRoutes.js"
import projectRoutes from "./src/routes/projectsRoutes.js";

const app = express();

usersRoutes(app);

projectRoutes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

