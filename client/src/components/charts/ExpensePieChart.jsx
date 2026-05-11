import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Food", value: 4000 },
  { name: "Transport", value: 2000 },
  { name: "Rent", value: 8000 },
  { name: "Entertainment", value: 3000 },
];

const COLORS = [
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

export default function ExpensePieChart() {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
      
      <h2 className="text-xl font-semibold mb-6">
        Expense Distribution
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={120}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>
      </div>

    </div>
  );
}