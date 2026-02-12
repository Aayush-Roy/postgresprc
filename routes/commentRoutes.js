import { Router } from "express";
import { createComment, deleteComment, fetchComments, singleComment } from "../controllers/CommentController.js";
const router = Router();

router.get('/',fetchComments);
router.post('/',createComment);
router.get('/:id',singleComment);
router.delete('/:id',deleteComment);

export default router;