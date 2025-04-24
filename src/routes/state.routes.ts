import express from "express";
import {
  createState,
  getAllStates,
  updateState,
  deleteState,
} from "../controllers/state.controller";

const router = express.Router();

router.post("/", createState);
router.get("/", getAllStates);
router.put("/:id", updateState);
router.delete("/:id", deleteState);

export default router;
