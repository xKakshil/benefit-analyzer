import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';

const SummaryCard = ({ title, value, color = 'blue' }) => {
  const colorClasses = {
    blue: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
    green: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    red: 'border-red-500/30 bg-red-500/10 text-red-300'
  };

  const iconMap = {
    blue: <DollarSign className="w-7 h-7" />,
    green: <TrendingUp className="w-7 h-7" />,
    red: <TrendingDown className="w-7 h-7" />
  };

  return (
    <div
      className={`
        rounded-3xl border backdrop-blur-xl p-6 shadow-2xl
        transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10
        ${colorClasses[color]}
      `}
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium opacity-80">{title}</p>
        {iconMap[color]}
      </div>

      <h3 className="text-3xl font-bold tracking-tight">
        {typeof value === 'number'
          ? value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })
          : value}
      </h3>
    </div>
  );
};

export default SummaryCard;