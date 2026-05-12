const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


// =============================
// CREATE TRANSACTION
// =============================

exports.createTransaction = async (data, userId) => {
  return await prisma.transaction.create({
    data: {
      ...data,
      userId,
    },
  });
};


// =============================
// GET TRANSACTIONS WITH FILTERS
// =============================

exports.getTransactions = async (filters, userId) => {

  const {
    type,
    category,
    startDate,
    endDate,
  } = filters;

  return await prisma.transaction.findMany({

    where: {

      userId,

      // Filter by transaction type
      ...(type && { type }),

      // Filter by category
      ...(category && { category }),

      // Filter by date range
      ...(startDate &&
        endDate && {
          date: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        }),
    },

    orderBy: {
      date: "desc",
    },

  });

};