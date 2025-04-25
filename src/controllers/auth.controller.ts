import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";
import {
  doctorSignupSchema,
  verifyOtpSchema,
  signinSchema,
} from "../validations/auth.validation";

// /**
//  * @desc Signup for doctor user
//  * @route POST /api/auth/sign-up
//  */
export const doctorSignUp = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const parsed = doctorSignupSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ errors: parsed.error.format() });
      return;
    }

    const result = await AuthService.registerDoctor(parsed.data);
    res.status(201).json(result);
  } catch (error) {
    throw error;
  }
};

// /**
//  * @desc Verify Email for doctor user
//  * @route POST /api/auth/verify-email
//  */
export const verifyEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const parsed = verifyOtpSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ errors: parsed.error.format() });
      return;
    }

    const result = await AuthService.verifyDoctorEmail(
      parsed.data.email,
      parsed.data.otp
    );

    if (!result.success) {
      res.status(400).json({ message: result.message });
      return;
    }

    res.status(200).json({ message: result.message });
  } catch (error) {
    res.status(500).json({ message: `Server Error ${error}` });
  }
};

// /**
//  * @desc SignIn to doctor account
//  * @route POST /api/auth/sign-in
//  */
export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsed = signinSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ errors: parsed.error.format() });
      return;
    }

    const result = await AuthService.signIn(parsed.data);
    res.status(result.status).json(result.response);
  } catch (error) {
    res.status(500).json({ message: `Server Error:: ${error}` });
  }
};
