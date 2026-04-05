# 🏦 CD Benefit Analyzer

CD Benefit Analyzer is a full stack web application that automates the review of Closing Disclosure (CD) PDFs.

Instead of manually checking multiple sections inside a mortgage Closing Disclosure document, users can upload a PDF and instantly see:

- Loan costs  
- Lender credits  
- Escrow calculations  
- Payoff amounts  
- Principal reduction  
- Cash to close  
- Borrower savings and benefits  

---

## 🚀 Why I Built This

I built this project to simplify manual Closing Disclosure review workflows.

Closing Disclosure documents are long, dense, and contain information spread across multiple pages. Calculating lender benefits manually can take time and is prone to mistakes.

This application automatically extracts the required values, performs the calculations, and presents the results in a clean dashboard.

---

## ✨ Features

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

## 🧱 Tech Stack

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

## 📁 Folder Structure

```text
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

## 