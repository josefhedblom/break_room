import { Request, Response } from "express";
import TimeModel from "../models/time.model";

export const breaks = async (req: Request, res: Response) => {
  const allBreaks = await TimeModel.find({ user: res.locals.user.id });
  res.status(200).json({ breaks: allBreaks });
};

export const create = async (req: Request, res: Response) => {
  const time = await TimeModel.create({
    break: req.body.time,
    user: res.locals.user.id,
  });
  res.status(201).json({ message: "New break time started", time: time });
};

export const deleteTime = async (req: Request, res: Response) => {
  try {
    await TimeModel.deleteOne({ _id: req.params.todoId });
    return res.status(200).json({ message: "Break deleted" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
