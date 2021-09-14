import express from "express";

import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
  getUserStats,
} from "../controllers/users.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/find/:id", verifyToken, getUser);
router.get("/", verifyToken, getAllUser);
router.get("/stats", getUserStats);

export default router;
