import express from 'express';
import { createRoom,
    getRooms,
    getRoom,
    updateRoom,
    deleteRoom,
    updateRoomAvailability
 } from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.post("/:hotelId", verifyAdmin, createRoom);
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

router.get("/", getRooms);
router.get("/:id", getRoom);





export default router;
