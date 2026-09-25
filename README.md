# Registration Wizard

## Overview

The Registration Wizard divides the registration process into multiple steps instead of showing all fields on one screen.
Users can enter their information step by step, receive validation feedback, move forward or backward between steps, and submit the completed registration form.
---

## 🚀 Live Demo
👉 Registration Wizard Live Website:(https://registration-wizard-sprint7.vercel.app/)

---
📸 Project Screenshot & Video
### Desktop Preview
![Registration Wizard Preview](./public/desktop%20preview.png)

👉[Watch  Video Preview](https://drive.google.com/file/d/1LHYXkCA1IQljTWMz8O7gdnvt3P365pSt/view?usp=sharing)

---

## ✨ Features
- Multi-step registration form
- Step/progress indicator
- Back and Next navigation
- Form validation
- Password and confirm-password validation
- Validation while entering information
- Separate React components for each step
- Responsive interface
- Prevents moving forward when the current step is invalid
- Final form submission

---

## Tech Stack

### Frontend
   - React.js
   - JavaScript (ES6+)
   - HTML5
   - CSS3
   - Libraries
   - React Hook Form
   - Zod
   - @hookform/resolvers
   
---

## 📂 Project Structure

```
registration-wizard-sprint7/
│
├── public/
├── src/
│   ├── components/
│   │   ├── StepOne.jsx
│   │   ├── StepTwo.jsx
│   │   └── StepThree.jsx
│   ├── validators/
│   │   └── registration.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
```
---