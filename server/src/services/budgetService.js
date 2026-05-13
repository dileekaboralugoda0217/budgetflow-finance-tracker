const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


// =========================================
// CREATE BUDGET
// =========================================
exports.createBudget = async (data, userId) => {
  return await prisma.budget.create({
    data: {
      ...data,
      userId,
    },
  });
};


// =========================================
// GET BUDGET ANALYSIS (SMART FINANCE LOGIC)
// =========================================
exports.getBudgetAnalysis = async (
  userId,
  month,
  year
) => {
  // Step 1: Get all budgets for user
  const budgets = await prisma.budget.findMany({
    where: {
      userId,
      month: Number(month),
      year: Number(year),
    },
  });

  const analysis = [];

  // Step 2: Loop each budget category
  for (const budget of budgets) {

    // Step 3: Calculate total expenses for that category
    const expenses =
      await prisma.transaction.aggregate({
        _sum: {
          amount: true,
        },

        where: {
          userId,
          type: "EXPENSE",
          category: budget.category,

          date: {
            gte: new Date(`${year}-${month}-01`),
            lte: new Date(`${year}-${month}-31`),
          },
        },
      });

    // Step 4: Extract spent value safely
    const spent = expenses._sum.amount || 0;

    // Step 5: Build analysis object
    analysis.push({
      category: budget.category,
      budgetAmount: budget.amount,
      spent: spent,
      remaining: budget.amount - spent,
      exceeded: spent > budget.amount,

      // EXTRA PROFESSIONAL METRICS (IMPORTANT UPGRADE)
      usagePercentage:
        budget.amount > 0
          ? ((spent / budget.amount) * 100).toFixed(2)
          : 0,
    });
  }

  return analysis;
};