import { z } from "zod";

export const createSpecializationSchema = z.object({
  name: z.string().min(1, "Specialization name is required"),
});

export const updateSpecializationSchema = z.object({
  name: z.string().optional(),
});

export const specializationCreateSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
  }),
});

export const specializationUpdateSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
  }),
  params: z.object({
    id: z.string().min(1),
  }),
});
