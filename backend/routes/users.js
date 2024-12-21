import { Router } from "express";
import User, { find } from "../models/User";

const router = Router();

// Create a user
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
