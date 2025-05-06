import { z } from "zod";

/**
 * Schema for Doctor Signup Validation
 */
export const doctorSignupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email"),
    specializationId: z.string().min(1, "Specialization is required"),
    stateId: z.string().min(1, "State is required"),
    cityId: z.string().min(1, "City is required"),
    address: z.string().min(1),
    pincode: z.string().min(6).max(6),
    phone: z.string().min(10).max(10),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

/**
 * Schema for Signin
 */
export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

/**
 * Schema for Email Verification
 */
export const verifyOtpSchema = z.object({
  email: z.string().email(),
  otp: z.string().min(4).max(4),
});

export const verifyEmailSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(4, "OTP must be 4 digits"),
});
