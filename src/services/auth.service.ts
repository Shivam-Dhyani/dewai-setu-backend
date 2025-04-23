import DoctorModel from "../models/doctor.model";
import { hashPassword, comparePassword } from "../utils/hash";
import { sendVerificationEmail } from "./email.service";
import { generateOtp } from "../utils/otp";
import { signJwt } from "../utils/jwt";

export const registerDoctor = async (data: {
  email: string;
  password: string;
  [key: string]: any;
}) => {
  const { password, ...rest } = data;
  const hashedPassword = await hashPassword(password);

  const doctor = await DoctorModel.create({
    ...rest,
    password: hashedPassword,
    isVerified: false,
    otp: generateOtp(),
  });

  if (!doctor.email || !doctor.otp) {
    throw new Error("Failed to create doctor or generate OTP");
  }

  //  ::::::::::::: Send Email Service :::::::::::::::::::::::
  // await sendVerificationEmail(doctor.email, doctor.otp);

  return {
    message: "Doctor registered successfully. Please verify your email.",
  };
};

export const verifyDoctorEmail = async (email: string, otp: string) => {
  const doctor = await DoctorModel.findOne({ email });

  if (!doctor) {
    return { success: false, message: "User not found" };
  }

  if (doctor.isVerified) {
    return { success: false, message: "Email is already verified" };
  }

  if (!doctor.otp) {
    return { success: false, message: "No OTP found for this user" };
  }

  if (doctor.otp !== otp) {
    return { success: false, message: "Invalid OTP" };
  }

  doctor.isVerified = true;
  doctor.otp = undefined;
  await doctor.save();

  return { success: true, message: "Email verified successfully" };
};

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const doctor = await DoctorModel.findOne({ email });

  if (!doctor) {
    return { status: 404, response: { message: "User not found" } };
  }

  if (!doctor.password) {
    return { status: 500, response: { message: "User password not set" } };
  }

  const isMatch = await comparePassword(password, doctor.password);

  if (!isMatch) {
    return { status: 401, response: { message: "Invalid credentials" } };
  }

  if (!doctor.isVerified) {
    return { status: 403, response: { message: "Please verify your email" } };
  }

  const token = signJwt({ userId: doctor._id });

  return {
    status: 200,
    response: {
      message: "Sign-in successful",
      token,
      user: {
        id: doctor._id,
        email: doctor.email,
        firstName: doctor.firstName,
        lastName: doctor.lastName,
      },
    },
  };
};
