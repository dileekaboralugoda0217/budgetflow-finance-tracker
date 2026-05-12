const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/transactionController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/",
  authMiddleware,
  transactionController.addTransaction
);

module.exports = router;
