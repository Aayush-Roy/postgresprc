import {Router} from "express";
import UserRoutes from '../routes/userRoutes.js';
import PostRoutes from '../routes/postRoutes.js';
const router = Router();


router.use('/api/user',UserRoutes);
router.use('/api/post',PostRoutes);


export default router;