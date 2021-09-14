import express from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovie,
  getRandomMovie,
  updateMovie,
} from "../controllers/movies.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyToken, createMovie);
router.put("/:id", verifyToken, updateMovie);
router.delete("/:id", verifyToken, deleteMovie);
router.get("/find/:id", verifyToken, getMovie);
router.get("/random", verifyToken, getRandomMovie);
router.get("/", verifyToken, getAllMovies);

export default router;
