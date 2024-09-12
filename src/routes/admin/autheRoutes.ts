import { Router } from "express";
import autheController, { AutheController } from "../../controllers/admin/autheController";

const router = Router();

router.post('/registro', autheController.register);

export default router;