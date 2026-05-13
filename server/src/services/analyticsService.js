const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getFinancialSummary = async (userId) => {
  const transactions = await prisma.transaction.findMany({
    where: { userId },
  });

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "INCOME") {
      totalIncome += transaction.amount;
    } else {
      totalExpense += transaction.amount;
    }
  });

  return {
    totalIncome,
    totalExpense,
    currentBalance: totalIncome - totalExpense,
  };
};