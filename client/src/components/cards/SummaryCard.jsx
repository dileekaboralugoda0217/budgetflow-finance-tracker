export default function SummaryCard({
  title,
  amount,
  color,
}) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
      
      <h2 className="text-slate-400">
        {title}
      </h2>

      <p className={`text-3xl font-bold mt-2 ${color}`}>
        {amount}
      </p>

    </div>
  );
}