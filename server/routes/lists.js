import express from "express";
import {
  createMovieList,
  deleteMovieList,
  getMovieList,
} from "../controllers/lists.js";

import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyToken, createMovieList);
router.delete("/:id", verifyToken, deleteMovieList);
router.get("/", verifyToken, getMovieList);

export default router;
