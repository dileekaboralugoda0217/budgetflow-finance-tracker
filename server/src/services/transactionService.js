const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createTransaction = async (data, userId) => {
  return await prisma.transaction.create({
    data: {
      ...data,
      userId,
    },
  });
};