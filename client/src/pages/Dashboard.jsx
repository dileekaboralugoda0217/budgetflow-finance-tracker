import MainLayout from "../layouts/MainLayout";

import SummaryCard from "../components/cards/SummaryCard";

import ExpensePieChart from "../components/charts/ExpensePieChart";

import MonthlyBarChart from "../components/charts/MonthlyBarChart";

export default function Dashboard() {
  return (
    <MainLayout>

      <div>

        <h1 className="text-3xl font-bold">
          Financial Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Monitor your financial activities and budgets.
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-6 mt-8">

          <SummaryCard
            title="Total Income"
            amount="Rs. 120,000"
            color="text-green-400"
          />

          <SummaryCard
            title="Total Expenses"
            amount="Rs. 45,000"
            color="text-red-400"
          />

          <SummaryCard
            title="Current Balance"
            amount="Rs. 75,000"
            color="text-cyan-400"
          />

        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mt-10">

          <ExpensePieChart />

          <MonthlyBarChart />

        </div>

      </div>

    </MainLayout>
  );
}