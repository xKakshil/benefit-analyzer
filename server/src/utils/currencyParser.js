const parseCurrency = (value) => {
  if (!value) return 0;

  return Number(
    value
      .replace(/[$,]/g, '')
      .replace(/\s+/g, '')
      .trim()
  ) || 0;
};

module.exports = {
  parseCurrency
};