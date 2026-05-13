const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/transactionController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/",
  authMiddleware,
  transactionController.addTransaction
);

router.get(
  "/",
  authMiddleware,
  transactionController.getTransactions
);


module.exports = router;
