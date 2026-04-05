const FormulaTrace = ({ summary }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-5">
        Calculation Trace
      </h2>

      <div className="space-y-4 text-slate-300">
        <div>
          <p className="font-semibold text-white mb-1">Part 1 Formula</p>
          <p>
            Total Loan Cost = Section D + Section E =
            {summary.part1.sectionD} + {summary.part1.sectionE} = {summary.part1.totalLoanCost}
          </p>
          <p>
            Benefits = Total Loan Cost + Lender Credits =
            {summary.part1.totalLoanCost} + ({summary.part1.lenderCredits}) = {summary.part1.benefits}
          </p>
        </div>

        <div>
          <p className="font-semibold text-white mb-1">Part 2 Formula</p>
          <p>
            Excess Amount Over Payoff = Payoff Amount + Principal Reduction - Loan Amount
          </p>
          <p>
            {summary.part2.payoffAmount} + {summary.part2.principalReduction} - {summary.part2.loanAmount} = {summary.part2.excessAmountOverPayoff}
          </p>
          <p>
            Final Escrow Benefit = Escrows + Prepaid + Excess Payoff - Cash To Close
          </p>
          <p>
            {summary.part2.escrowsPlusPrepaidPlusExcessPayoff} - {summary.part2.cashToClose} = {summary.part2.benefits}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormulaTrace;