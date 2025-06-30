import { Router } from "express";
import {ClientController} from "../controllers/clients.controller";

const router= Router();
const clienteController= new ClientController();

router.get("/",clienteController.get);
router.get("/:posicion",clienteController.getByIndice);
router.get("/year/:year",clienteController.getByYear);
router.get("/id/:id",clienteController.getByID);
router.post("/agregar",clienteController.agregar);
router.put("/:id",clienteController.modificar);
router.delete("/:id",clienteController.delete);

export default router;
