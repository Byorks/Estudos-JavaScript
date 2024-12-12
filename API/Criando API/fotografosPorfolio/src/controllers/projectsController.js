import { createProject } from "../models/projectsModel.js";

export async function createNewProject(req, res) {
    const userId = req.params.id;
    const newProject = req.body;
    try {
        const createdProject = await createProject(userId, newProject);
        res.status(200).json(createdProject);
    }
    catch(error) {
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}