import express from 'express';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
import { getUsers,
    getUser,
    updateUser,
    deleteUser
 } from '../controllers/userController.js';

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    // res.send("Hello user, you are logged in");
// });
// 
// router.get("/checkUsers/:id", verifyUser, (req,res,next)=>{
    // res.send("Hello user, you are logged in and you can delete your account");
// });
// 
// router.get("/checkAdmin/:id", verifyAdmin, (req,res,next)=>{
    // res.send("Hello Admin, you are logged in and you can delete all accounts");
// });

router.get("/", verifyUser, getUsers);

router.get("/:id", verifyUser, getUser);

router.put("/:id", verifyUser, updateUser);
router.delete("/:id",verifyAdmin, deleteUser);

export default router;