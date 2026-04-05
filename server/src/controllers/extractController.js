const path = require('path');
const { extractPdfText } = require('../services/pdfExtractor');
const { parseClosingDisclosureData } = require('../services/sectionParser');
const { calculateBenefits } = require('../services/benefitCalculator');

const extractBenefits = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No PDF uploaded'
      });
    }

    const filePath = path.join(
      __dirname,
      '../../uploads',
      req.file.filename
    );

    const pdfResult = await extractPdfText(filePath);

    if (!pdfResult.success) {
      return res.status(500).json({
        success: false,
        message: 'Failed to extract PDF text',
        error: pdfResult.error
      });
    }

    const extractedData = parseClosingDisclosureData(pdfResult.text);

    const calculatedResults = calculateBenefits(extractedData);

    return res.status(200).json({
      success: true,
      message: 'Benefits calculated successfully',
      extractedData,
      summary: calculatedResults
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message
    });
  }
};

module.exports = {
  extractBenefits
};