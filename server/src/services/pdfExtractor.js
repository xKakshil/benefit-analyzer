const fs = require('fs');
const pdfParse = require('pdf-parse');

const extractPdfText = async (filePath) => {
  try {
    const dataBuffer = fs.readFileSync(filePath);

    const pdfData = await pdfParse(dataBuffer);

    return {
      success: true,
      text: pdfData.text,
      pages: pdfData.numpages,
      info: pdfData.info
    };
  } catch (error) {
    console.error('PDF Extraction Error:', error);

    return {
      success: false,
      error: error.message
    };
  }
};

module.exports = {
  extractPdfText
};