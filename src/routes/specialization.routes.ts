import express from "express";
import {
  createSpecialization,
  getAllSpecializations,
  updateSpecialization,
  deleteSpecialization,
} from "../controllers/specialization.controller";

const router = express.Router();

router.post("/", createSpecialization);
router.get("/", getAllSpecializations);
router.put("/:id", updateSpecialization);
router.delete("/:id", deleteSpecialization);

export default router;
