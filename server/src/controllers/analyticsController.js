const analyticsService = require(
  "../services/analyticsService"
);

exports.getSummary = async (req, res) => {
  try {
    const userId = req.user.userId;

    const summary =
      await analyticsService.getFinancialSummary(
        userId
      );

    res.json(summary);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};