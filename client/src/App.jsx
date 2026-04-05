import { useState } from 'react';
import { motion } from 'framer-motion';
import UploadBox from './components/DocumentUploadPanel';
import Loader from './components/Loader';
import ErrorBanner from './components/ErrorBanner';
import SummaryCard from './components/SummaryCard';
import BenefitTable from './components/FinancialBreakdownTable';
import Navbar from './components/Navbar';
import ExportButton from './components/ExportButton';
import RawDataAccordion from './components/ExtractedFieldsPanel';
import FormulaTrace from './components/FormulaTrace';
import Footer from './components/Footer';
import { uploadClosingDisclosure } from './services/api';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = async (file) => {
    try {
      setLoading(true);
      setError('');
      setResult(null);
      setFileName(file.name);

      const data = await uploadClosingDisclosure(file);
      setResult(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Failed to upload and process PDF'
      );
    } finally {
      setLoading(false);
    }
  };

  const part1Rows = result
    ? [
        { label: 'Section A', value: result.summary.part1.sectionA },
        { label: 'Section B', value: result.summary.part1.sectionB },
        { label: 'Section C', value: result.summary.part1.sectionC },
        {
          label: 'Section D (Sum)',
          value: result.summary.part1.sectionD,
          highlight: true
        },
        { label: 'Section E', value: result.summary.part1.sectionE },
        {
          label: 'Total Cost of Loan',
          value: result.summary.part1.totalLoanCost,
          highlight: true
        },
        {
          label: 'Lender Credits',
          value: result.summary.part1.lenderCredits
        },
        {
          label: 'Benefits',
          value: result.summary.part1.benefits,
          highlight: true
        }
      ]
    : [];

  const part2Rows = result
    ? [
        { label: 'Loan Amount', value: result.summary.part2.loanAmount },
        { label: 'Payoff Amount', value: result.summary.part2.payoffAmount },
        {
          label: 'Principal Reduction',
          value: result.summary.part2.principalReduction
        },
        {
          label: 'Excess Amount Over Payoff',
          value: result.summary.part2.excessAmountOverPayoff,
          highlight: true
        },
        { label: 'Prepaid', value: result.summary.part2.prepaid },
        { label: 'Escrows', value: result.summary.part2.escrows },
        {
          label: 'Escrows + Prepaid',
          value: result.summary.part2.escrowsPlusPrepaid,
          highlight: true
        },
        {
          label: 'Escrows + Prepaid + Excess Payoff',
          value: result.summary.part2.escrowsPlusPrepaidPlusExcessPayoff,
          highlight: true
        },
        {
          label: 'Cash to Close',
          value: result.summary.part2.cashToClose
        },
        {
          label: 'Benefits',
          value: result.summary.part2.benefits,
          highlight: true
        }
      ]
    : [];

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <Navbar />

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            CD Benefit Analyzer
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Upload a Closing Disclosure PDF and automatically review lender credits,
escrow costs, payoff amounts, and borrower savings.
          </p>
        </div>

        <UploadBox onFileSelect={handleFileUpload} />

        {fileName && (
          <div className="mt-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
              PDF Processed: {fileName}
            </span>
          </div>
        )}

        {loading && <Loader />}

        {error && <ErrorBanner message={error} />}

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 space-y-8"
          >
            <div className="flex justify-end">
              <ExportButton data={result} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SummaryCard
                title="Loan Amount"
                value={result.summary.part2.loanAmount}
                color="blue"
              />

              <SummaryCard
                title="Cost Benefits"
                value={result.summary.part1.benefits}
                color={result.summary.part1.benefits < 0 ? 'green' : 'red'}
              />

              <SummaryCard
                title="Escrow Benefits"
                value={result.summary.part2.benefits}
                color={result.summary.part2.benefits > 0 ? 'green' : 'red'}
              />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <BenefitTable
                title="Part 1 — Savings Depicted by Cost"
                rows={part1Rows}
              />

              <BenefitTable
                title="Part 2 — Savings Depicted by Escrows & Payoff"
                rows={part2Rows}
              />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <FormulaTrace summary={result.summary} />
              <RawDataAccordion data={result.extractedData} />
            </div>
          </motion.div>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;