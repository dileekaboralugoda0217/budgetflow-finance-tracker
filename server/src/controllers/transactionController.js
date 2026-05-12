const transactionService = require("../services/transactionService");

exports.addTransaction = async (req, res) => {
  try {
    const userId = req.user.userId; // from JWT middleware

    const transaction = await transactionService.createTransaction(
      req.body,
      userId
    );

    res.status(201).json({
      message: "Transaction created successfully",
      transaction,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};