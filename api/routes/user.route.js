import express from 'express'
import { deleteUser, getAllUser, getUser, test, updateUser, userSignOut } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyToken.js';
const router = express.Router();
router.get('/',test)
router.put('/update/:userId',verifyToken,updateUser);
router.delete('/delete/:userId',verifyToken,deleteUser);
router.post('/signout',userSignOut);
router.get('/getUser',verifyToken,getAllUser);
router.get('/:userId',getUser);
export default router