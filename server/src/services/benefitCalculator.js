const round = (value) => Number(value.toFixed(2));

const calculateBenefits = (data) => {
  const totalLoanCost = round(data.sectionD + data.sectionE);
  const costBenefits = round(totalLoanCost + data.lenderCredits);

  const excessAmountOverPayoff = round(
    data.payoffAmount + data.principalReduction - data.loanAmount
  );

  const prepaidSectionF = round(
    data.homeownersInsurancePrepaid + data.prepaidInterest
  );

  const escrowSectionG = round(
    data.homeownersInsuranceEscrow +
      data.mortgageInsuranceEscrow +
      data.propertyTaxesEscrow +
      data.cityPropertyTaxEscrow +
      data.aggregateAdjustment
  );

  const escrowsPlusPrepaid = round(
    escrowSectionG + prepaidSectionF
  );

  const escrowsPlusPrepaidPlusExcessPayoff = round(
    escrowsPlusPrepaid + excessAmountOverPayoff
  );

  const escrowBenefits = round(
    escrowsPlusPrepaidPlusExcessPayoff - data.cashToClose
  );

  return {
    part1: {
      sectionA: round(data.sectionA),
      sectionB: round(data.sectionB),
      sectionC: round(data.sectionC),
      sectionD: round(data.sectionD),
      sectionE: round(data.sectionE),
      totalLoanCost,
      lenderCredits: round(data.lenderCredits),
      benefits: costBenefits
    },
    part2: {
      loanAmount: round(data.loanAmount),
      payoffAmount: round(data.payoffAmount),
      principalReduction: round(data.principalReduction),
      excessAmountOverPayoff,
      prepaid: prepaidSectionF,
      escrows: escrowSectionG,
      escrowsPlusPrepaid,
      escrowsPlusPrepaidPlusExcessPayoff,
      cashToClose: round(data.cashToClose),
      benefits: escrowBenefits
    }
  };
};

module.exports = {
  calculateBenefits
};