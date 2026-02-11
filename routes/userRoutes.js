import {Router} from "express";
import {createUser, deleteUser, fetchUsers, singleUser, updateUser} from '../controllers/UserController.js'
const router = Router();

router.get("/",fetchUsers);
router.get('/:id',singleUser);
router.post("/", createUser);
router.put('/:id', updateUser);
router.delete('/:id',deleteUser)

export default router;