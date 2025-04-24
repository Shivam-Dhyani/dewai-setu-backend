import { z } from "zod";

export const createStateSchema = z.object({
  name: z.string().min(1, "State name is required"),
});

export const updateStateSchema = z.object({
  name: z.string().optional(),
});
