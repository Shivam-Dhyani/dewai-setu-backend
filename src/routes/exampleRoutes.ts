// src/routes/exampleRoutes.ts - Example Routes
import express from "express";
import { getExamples, createExample } from "../controllers/exampleController";

const router = express.Router();

router.route("/").get(getExamples).post(createExample);

export default router;
