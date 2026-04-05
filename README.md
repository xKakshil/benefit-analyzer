# CD Benefit Analyzer

CD Benefit Analyzer is a full stack web application that automates the review of Closing Disclosure PDFs.

Instead of manually checking multiple sections inside a mortgage Closing Disclosure document, users can upload a PDF and instantly see:

- Loan costs
- Lender credits
- Escrow calculations
- Payoff amounts
- Principal reduction
- Cash to close
- Borrower savings and benefits

---

## Live Demo

Frontend: `https://your-vercel-link.vercel.app`

Backend API: `https://your-render-link.onrender.com`

> Note: The deployed links may occasionally be slow or unavailable because the project is hosted on free-tier services. Render free instances may spin down after inactivity and take some time to restart.

---

## Why I Built This

I built this project to simplify manual Closing Disclosure review workflows.

Closing Disclosure documents are long, dense, and contain information spread across multiple pages. Calculating lender benefits manually can take time and is prone to mistakes.

This application automatically extracts the required values, performs the calculations, and presents the results in a clean dashboard.

---

## Features

- Upload Closing Disclosure PDFs
- Extract values from multiple CD sections
- Automatically calculate Part 1 and Part 2 borrower benefits
- Handle lender credits and aggregate adjustments as negative values
- Handle missing or blank fields gracefully
- Show calculation trace for transparency
- Export result as JSON
- Display raw extracted values
- Premium finance-style dashboard UI
- Responsive design for desktop and tablet

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Dropzone
- Framer Motion
- Lucide React

### Backend
- Node.js
- Express.js
- Multer
- pdf-parse
- Regex-based extraction engine

---

## Folder Structure

```text
cd-benefit-analyzer/
  client/
    src/
      components/
      services/
      App.jsx

  server/
    src/
      controllers/
      routes/
      services/
      utils/
      uploads/

  README.md
  .gitigno

```

# How to Run Locally

```bash
1. Clone the Repository
git clone https://github.com/your-username/cd-benefit-analyzer.git
cd cd-benefit-analyzer

2. Install Backend Dependencies
cd server
npm install

3. Start Backend Server
npm run dev

Backend will run on:
http://localhost:8000

You should see something like:
Server running on port 8000

4. Install Frontend Dependencies

Open a second terminal and run:
cd client
npm install

5. Start Frontend
npm run dev

6. Make Sure Frontend API URL is Correct
Inside:

client/src/services/api.js

Use:

baseURL: 'http://localhost:8000/api'

For deployed version, replace it with your Render backend URL.

Example:

baseURL: 'https://cd-benefit-analyzer-api.onrender.com/api'

7. Test the Application
Open the frontend in the browser
Upload a Closing Disclosure PDF
Wait for extraction and calculation
Review the summary cards, tables, formula trace, and extracted values

```
```bash
Backend API Endpoint
Upload Closing Disclosure PDF
POST /api/extract/benefits
Request

Form-data:

file: <closing-disclosure.pdf>
Sample Response
{
  "success": true,
  "message": "Benefits calculated successfully",
  "summary": {
    "part1": {
      "benefits": -4502.89
    },
    "part2": {
      "benefits": 5017.89
    }
  }
}
```
#Assumptions

Uploaded PDFs follow a standard Closing Disclosure structure
Missing fields are treated as 0
Lender Credits are negative values
Aggregate Adjustment can be negative
Multiple payoff lines are summed together
Principal Reduction is extracted directly from the PDF


#Challenges Faced

Extracting values from merged PDF text
Handling inconsistent spacing and line breaks in parsed PDF content
Distinguishing between similar labels in escrow and prepaid sections
Extracting the correct Cash to Close value from multiple matches
Summing multiple payoff lines correctly
Handling negative values consistently across calculations

#Future Improvements

PDF export support
Compare multiple CDs side by side
OCR support for scanned PDFs
Confidence score per extracted field
User authentication and saved reports
CSV export support
Deployment with cloud storage support

#Lessons Learned

Regex extraction from PDFs can be unreliable without defensive parsing
Mortgage documents often contain repeated labels that require careful matching
Clear UI and transparency are important when showing financial calculations
Breaking the project into extraction, parsing, and calculation layers improves maintainability

#Screenshots
```bash
https://drive.google.com/drive/folders/1yWMPcm89AqaEACBXXjj54iRp_wcsu9Yw?usp=drive_link
```
##Author
#Kakshil

Built with React, Node.js, Express, Tailwind CSS, and PDF parsing.





re
