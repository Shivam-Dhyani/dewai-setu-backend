// import express, { Router } from "express";
// import * as AuthController from "../controllers/auth.controller";

// const router: Router = express.Router();

// router.post("/sign-up", AuthController.doctorSignUp);
// router.post("/verify-email", AuthController.verifyEmail);
// router.post("/sign-in", AuthController.signIn);

// export default router;

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
