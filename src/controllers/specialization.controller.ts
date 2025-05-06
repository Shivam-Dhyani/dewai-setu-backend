import { Request, Response } from "express";
import Specialization from "../models/specialization.model";
import {
  createSpecializationSchema,
  updateSpecializationSchema,
} from "../validations/specialization.validation";
import { AppError } from "../utils/error";

export const createSpecialization = async (
  req: Request,
  res: Response
): Promise<void> => {
  const parsed = createSpecializationSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.format() });
    return;
  }

  const specialization = await Specialization.create(req.body);
  res.status(201).json(specialization);
};

export const getAllSpecializations = async (_req: Request, res: Response) => {
  const specializations = await Specialization.find();
  res.status(200).json(specializations);
};

export const updateSpecialization = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const parsed = updateSpecializationSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.format() });
    return;
  }

  const updatedObj = await Specialization.findByIdAndUpdate(id, parsed.data, {
    new: true,
  });

  if (updatedObj) {
    res.status(200).json(updatedObj);
  } else {
    throw new AppError("Invalid Id", 400);
  }
};

export const deleteSpecialization = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedObj = await Specialization.findByIdAndDelete(id);

  // res.status(204).send();
  if (deletedObj) {
    res.status(200).json(deletedObj);
  } else {
    throw new AppError("Invalid Id", 400);
  }
};
