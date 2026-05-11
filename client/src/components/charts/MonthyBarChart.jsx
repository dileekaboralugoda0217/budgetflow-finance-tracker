import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    income: 120000,
    expense: 45000,
  },
  {
    month: "Feb",
    income: 90000,
    expense: 35000,
  },
  {
    month: "Mar",
    income: 100000,
    expense: 50000,
  },
];

export default function MonthlyBarChart() {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">

      <h2 className="text-xl font-semibold mb-6">
        Monthly Overview
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>
            
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="income"
              fill="#10b981"
            />

            <Bar
              dataKey="expense"
              fill="#ef4444"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}