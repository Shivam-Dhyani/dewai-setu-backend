import { Request, Response } from "express";
import State from "../models/state.model";
import {
  createStateSchema,
  updateStateSchema,
} from "../validations/state.validation";

export const createState = async (
  req: Request,
  res: Response
): Promise<void> => {
  const parsed = createStateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.format() });
    return;
  }

  const state = await State.create(parsed.data);
  res.status(201).json(state);
};

export const getAllStates = async (_req: Request, res: Response) => {
  const states = await State.find();
  res.status(200).json(states);
};

export const updateState = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const parsed = updateStateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.format() });
    return;
  }

  const updated = await State.findByIdAndUpdate(id, parsed.data, { new: true });
  res.status(200).json(updated);
};

export const deleteState = async (req: Request, res: Response) => {
  const { id } = req.params;
  await State.findByIdAndDelete(id);
  res.status(204).send();
};
