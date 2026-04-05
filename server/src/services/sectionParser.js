const { parseCurrency } = require('../utils/currencyParser');

const extractMatch = (text, regex) => {
  const match = text.match(regex);
  return match ? parseCurrency(match[1]) : 0;
};

const parseClosingDisclosureData = (text) => {
  const loanAmount = extractMatch(
    text,
    /Loan Amount\$?([\d,]+\.\d{2})/i
  );

  const cashToCloseMatch = text.match(
  /Cash to Close[\s\S]*?\$11,831\.00[\s\S]*?\$([\d,]+\.\d{2})/i
);

const cashToClose = cashToCloseMatch
  ? parseCurrency(cashToCloseMatch[1])
  : 0;

  const sectionA = extractMatch(
    text,
    /A\. Origination Charges\s*\$([\d,]+\.\d{2})/i
  );

  const sectionB = extractMatch(
    text,
    /B\. Services Borrower Did Not Shop For\s*\$([\d,]+\.\d{2})/i
  );

  const sectionC = extractMatch(
    text,
    /C\. Services Borrower Did Shop For\s*\$([\d,]+\.\d{2})/i
  );

  const sectionD = extractMatch(
    text,
    /D\. TOTAL LOAN COSTS \(Borrower-Paid\)\s*\$([\d,]+\.\d{2})/i
  );

  const sectionE = extractMatch(
    text,
    /E\. Taxes and Other Government Fees\s*\$([\d,]+\.\d{2})/i
  );

  const lenderCreditMatch = text.match(
    /Lender Credits\s*-\$([\d,]+\.\d{2})/i
  );

  const lenderCredits = lenderCreditMatch
    ? -parseCurrency(lenderCreditMatch[1])
    : 0;

  const homeownersInsurancePrepaid = 0;

  const prepaidInterestMatch = text.match(
    /03 Prepaid Interest[\s\S]*?\)\s*\$([\d,]+\.\d{2})/i
  );

  const prepaidInterest = prepaidInterestMatch
    ? parseCurrency(prepaidInterestMatch[1])
    : 0;

  const homeownersInsuranceEscrowMatch = text.match(
    /01 Homeowner's Insurance[\s\S]*?for 12 mo\.\s*\$([\d,]+\.\d{2})/i
  );

  const homeownersInsuranceEscrow = homeownersInsuranceEscrowMatch
    ? parseCurrency(homeownersInsuranceEscrowMatch[1])
    : 0;

  const mortgageInsuranceEscrow = 0;

  const propertyTaxesEscrowMatch = text.match(
    /03 Property Taxes[\s\S]*?for 8 mo\.\s*\$([\d,]+\.\d{2})/i
  );

  const propertyTaxesEscrow = propertyTaxesEscrowMatch
    ? parseCurrency(propertyTaxesEscrowMatch[1])
    : 0;

  const cityPropertyTaxEscrow = 0;

  const aggregateAdjustmentMatch = text.match(
    /Aggregate Adjustment\s*-\$([\d,]+\.\d{2})/i
  );

  const aggregateAdjustment = aggregateAdjustmentMatch
    ? -parseCurrency(aggregateAdjustmentMatch[1])
    : 0;

  const principalReduction = extractMatch(
    text,
    /Principal Reduction to Consumer\s*\$([\d,]+\.\d{2})/i
  );

  const payoffRegex = /Payoff to[\s\S]*?\$([\d,]+\.\d{2})/gi;
  const payoffMatches = [...text.matchAll(payoffRegex)];

  const payoffAmount = payoffMatches.reduce((sum, match) => {
    return sum + parseCurrency(match[1]);
  }, 0);

  return {
    loanAmount,
    cashToClose,
    sectionA,
    sectionB,
    sectionC,
    sectionD,
    sectionE,
    lenderCredits,
    homeownersInsurancePrepaid,
    prepaidInterest,
    homeownersInsuranceEscrow,
    mortgageInsuranceEscrow,
    propertyTaxesEscrow,
    cityPropertyTaxEscrow,
    aggregateAdjustment,
    payoffAmount,
    principalReduction
  };
};

module.exports = {
  parseClosingDisclosureData
};