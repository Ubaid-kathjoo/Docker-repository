import express from "express";
import { createTest, getTests, test } from "../controllers/test.controller.js";
 
const router = express.Router();
router.get("/", test);
router.post("/test", createTest);
router.get("/get-test", getTests);

export default router;