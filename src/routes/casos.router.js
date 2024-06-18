import { Router } from 'express';
import CasosManager from '../controllers/casos.manager.js';

const router = Router();
const casosManager = new CasosManager();

// Ruta GET para mostrar todos los casos/productos
router.get("/", (req, res) => {
    res.json(casosManager.getAllCasos());
});

// Ruta POST para agregar un nuevo caso/producto
router.post("/subir", (req, res) => {
    try {
        const newCaso = casosManager.addCaso(req.body);
        res.status(201).json(newCaso);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;