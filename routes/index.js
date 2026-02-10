import {Router} from "express";
import UserRoutes from '../routes/userRoutes.js';
const router = Router();

router.use('/api/user',UserRoutes)

export default router;