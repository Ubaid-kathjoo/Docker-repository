import Test from "../models/Test.js";

export const test = async (_, res) => {
  res.send("Hello from Node + Docker + Mongo 🚀 with updated message");
}
export const createTest = async (_, res) => {
  try {
    const doc = await Test.create({ name: "Hello Mongo" });
    res.json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTests = async (_, res) => {
  try {
    const data = await Test.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};