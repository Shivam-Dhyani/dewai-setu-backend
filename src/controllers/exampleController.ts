// src/controllers/exampleController.ts - Example Controller
import { Request, Response } from "express";
import Example from "../models/exampleModel";

// Get all examples
const getExamples = async (req: Request, res: Response): Promise<void> => {
  try {
    const examples = await Example.find();
    res.status(200).json(examples);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new example
const createExample = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const example = new Example({ name });
    await example.save();
    res.status(201).json(example);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export { getExamples, createExample };
