import { Download } from 'lucide-react';

const ExportButton = ({ data }) => {
  const handleExport = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json'
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'benefit-summary.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all text-white font-medium shadow-lg"
    >
      <Download className="w-5 h-5" />
      Export JSON
    </button>
  );
};

export default ExportButton;