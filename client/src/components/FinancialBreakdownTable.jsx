const formatCurrency = (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};

const BenefitTable = ({ title, rows }) => {
  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
      <div className="px-6 py-5 border-b border-white/10 bg-white/5">
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-white/5 last:border-none hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4 text-slate-300 font-medium">
                  {row.label}
                </td>

                <td
                  className={`px-6 py-4 text-right font-semibold ${
                    row.highlight
                      ? 'text-blue-300 text-lg'
                      : row.value < 0
                      ? 'text-red-400'
                      : 'text-white'
                  }`}
                >
                  {formatCurrency(row.value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BenefitTable;