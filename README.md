# PersonalizedHoroscope

## 🛠️ Setup Instructions

### 📦 Prerequisites

Make sure you have the following installed:

Node.js (v18+ recommended)
npm (comes with Node.js)
MongoDB (running locally on default port 27017 or a cloud URI)
Git

### 🚀 Getting Started

Clone the Repository

git clone https://github.com/adarshxdev/PersonalizedHoroscope.git

cd PersonalizedHoroscope

Install Dependencies for All Microservices
In separate terminals:

cd auth
npm install

cd horoscope
npm install

Configure Environment Variables

Create a .env file in each microservice directory:

auth/.env

MONGO_URI=mongodb://localhost:27017/authDB
JWT_SECRET=supersecretkey

horoscope/.env

JWT_SECRET=supersecretkey

Start MongoDB (If Not Already Running)

brew services start mongodb-community@7.0   # For Mac with Homebrew

Run the Microservices
In separate terminals:

Auth Service

cd auth
npm run dev

Horoscope Service

cd horoscope
npm run dev

### Access Swagger API Docs

Auth API Docs: http://localhost:3000/api-docs

Horoscope API Docs: http://localhost:3001/api-docs

📁 Project Structure Overview

personalized-horoscope/
├── auth/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── models/
│   ├── utils/
│   └── index.js
├── horoscope/
│   ├── controllers/
│   ├── data/
│   ├── middleware/
│   ├── routes/
│   └── index.js
└── README.md

### 💡 AI Assistance
Parts of this project (e.g., zodiac sign logic, Swagger/OpenAPI setup, and README formatting) were assisted using OpenAI's ChatGPT, used primarily for code generation, explanation, and documentation enhancement.

