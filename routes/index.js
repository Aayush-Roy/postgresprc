import {Router} from "express";
import UserRoutes from '../routes/userRoutes.js';
import PostRoutes from '../routes/postRoutes.js';
import CommentRoutes from '../routes/commentRoutes.js';
const router = Router();


router.use('/api/user',UserRoutes);
router.use('/api/post',PostRoutes);
router.use('/api/comment',CommentRoutes)


export default router;