const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware (ALWAYS FIRST)
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const transactionRoutes = require("./routes/transactionRoutes");

app.use("/api/transactions", transactionRoutes);

const analyticsRoutes = require("./routes/analyticsRoutes");

app.use("/api/analytics", analyticsRoutes);

const budgetRoutes = require("./routes/budgetRoutes");

app.use("/api/budgets", budgetRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("PocketWise API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});