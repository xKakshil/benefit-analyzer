import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const RawDataAccordion = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-semibold"
      >
        <span>Raw Extracted Values</span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>

      {open && (
        <div className="border-t border-white/10 px-6 py-5">
          <pre className="text-sm text-slate-300 overflow-x-auto whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default RawDataAccordion;