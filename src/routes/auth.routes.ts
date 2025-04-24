import express from "express";
import {
  doctorSignUp,
  verifyEmail,
  signIn,
} from "../controllers/auth.controller";

const router = express.Router();

router.post("/sign-up", doctorSignUp);
router.post("/verify-email", verifyEmail);
router.post("/sign-in", signIn);

export default router;
