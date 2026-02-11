import {Router} from "express";
import { createPost, deletePost, getAllPost, showPost, updatePost } from "../controllers/PostController.js";
const router = Router();

router.get('/',getAllPost);
router.post('/',createPost);
router.get('/:id',showPost);
router.put('/:id',updatePost);
router.delete('/:id', deletePost);


export default router;