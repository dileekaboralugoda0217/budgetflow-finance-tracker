import MainLayout from "../layouts/MainLayout";

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
          
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-slate-400">
              Total Income
            </h2>

            <p className="text-3xl font-bold mt-2 text-green-400">
              Rs. 120,000
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-slate-400">
              Total Expenses
            </h2>

            <p className="text-3xl font-bold mt-2 text-red-400">
              Rs. 45,000
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-slate-400">
              Current Balance
            </h2>

            <p className="text-3xl font-bold mt-2 text-cyan-400">
              Rs. 75,000
            </p>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}