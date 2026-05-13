const budgetService = require(
  "../services/budgetService"
);

// CREATE BUDGET
exports.createBudget = async (req, res) => {
  try {
    const userId = req.user.userId;

    const budget =
      await budgetService.createBudget(
        req.body,
        userId
      );

    res.status(201).json({
      message: "Budget created",
      budget,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// GET ANALYSIS
exports.getBudgetAnalysis = async (
  req,
  res
) => {
  try {
    const userId = req.user.userId;

    const { month, year } = req.query;

    const analysis =
      await budgetService.getBudgetAnalysis(
        userId,
        month,
        year
      );

    res.json(analysis);

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};