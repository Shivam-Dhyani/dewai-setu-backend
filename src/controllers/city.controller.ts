import { Request, Response } from "express";
import City from "../models/city.model";
import {
  createCitySchema,
  updateCitySchema,
} from "../validations/city.validation";

export const createCity = async (
  req: Request,
  res: Response
): Promise<void> => {
  const parsed = createCitySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.format() });
    return;
  }

  const city = await City.create(parsed.data);
  res.status(201).json(city);
};

export const getAllCities = async (_req: Request, res: Response) => {
  const cities = await City.find().populate("stateId");
  res.status(200).json(cities);
};

export const updateCity = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const parsed = updateCitySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.format() });
    return;
  }

  const updated = await City.findByIdAndUpdate(id, parsed.data, { new: true });
  res.status(200).json(updated);
};

export const deleteCity = async (req: Request, res: Response) => {
  const { id } = req.params;
  await City.findByIdAndDelete(id);
  res.status(204).send();
};
