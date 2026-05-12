const transactionService = require(
  "../services/transactionService"
);


// ======================================
// ADD TRANSACTION
// ======================================

exports.addTransaction = async (req, res) => {

  try {

    // Get logged-in user ID from JWT token
    const userId = req.user.userId;

    // Create transaction using service layer
    const transaction =
      await transactionService.createTransaction(
        req.body,
        userId
      );

    res.status(201).json({
      message: "Transaction created successfully",
      transaction,
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

};


// ======================================
// GET TRANSACTIONS WITH FILTERS
// ======================================

exports.getTransactions = async (req, res) => {

  try {

    // Get logged-in user ID
    const userId = req.user.userId;

    // Fetch transactions with filters
    const transactions =
      await transactionService.getTransactions(
        req.query,
        userId
      );

    res.json(transactions);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

};