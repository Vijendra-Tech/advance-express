import { upload } from "../middleware";

import express from "express";

const router = express.Router();

//user registration form

router.post("/registration", upload.single("avtar"), async (req, res, next) => {
  next();
});
