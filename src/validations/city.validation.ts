import { z } from "zod";

export const createCitySchema = z.object({
  name: z.string().min(1, "City name is required"),
  stateId: z
    .string()
    .min(1, "State ID is required")
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid state ID"),
});

export const updateCitySchema = z.object({
  name: z.string().optional(),
  stateId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .optional(),
});
