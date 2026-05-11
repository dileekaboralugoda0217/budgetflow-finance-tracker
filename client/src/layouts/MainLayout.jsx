export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 p-5">
        <h1 className="text-2xl font-bold mb-10">
          💰 BudgetFlow
        </h1>

        <ul className="space-y-4">
          <li className="hover:text-cyan-400 cursor-pointer">
            Dashboard
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Transactions
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Budgets
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Categories
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}