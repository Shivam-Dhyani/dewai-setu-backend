import express from "express";
import {
  createCity,
  getAllCities,
  updateCity,
  deleteCity,
} from "../controllers/city.controller";

const router = express.Router();

router.post("/", createCity);
router.get("/", getAllCities);
router.put("/:id", updateCity);
router.delete("/:id", deleteCity);

export default router;
