const express = require("express");

const router = express.Router();

const budgetController = require(
  "../controllers/budgetController"
);

const authMiddleware = require(
  "../middlewares/authMiddleware"
);

router.post(
  "/",
  authMiddleware,
  budgetController.createBudget
);

router.get(
  "/analysis",
  authMiddleware,
  budgetController.getBudgetAnalysis
);

module.exports = router;