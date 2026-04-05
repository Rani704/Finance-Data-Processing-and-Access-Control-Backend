# Finance Data Processing and Access Control Backend

## 🚀 Overview
This backend project is a finance dashboard system that allows users to manage financial records with role-based access control. Users can track income and expenses, view dashboard summaries, and access analytics based on their role.

---

## 🛠 Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB** (Mongoose)  
- **JWT** for authentication  
- **Swagger** for API documentation  

---

## Features

### User & Role Management

- **Register** and **login** users
- Role-based access control:
  - **Admin**: Full access (create/update/delete records, manage users)
  - **Analyst**: Can view and update records
  - **Viewer**: Read-only access to records and dashboard
- JWT-based authentication

### Financial Records

- Create, read, update, and delete financial records
- Record fields:
  - `amount` (Number)
  - `type` (`income` or `expense`)
  - `category` (String)
  - `note` (String, optional)
  - `date` (Date)
- Filtering by type, category, and date range

### Dashboard Summaries

- Total income
- Total expenses
- Net balance
- Category-wise breakdown
- Monthly or weekly trends

### API Documentation

- Swagger UI available at:  

http://localhost:5000/api-docs

- Interactive API testing supported

---

## Folder Structure
```

finance-backend/
├─ server.js # Entry point
├─ package.json
├─ package-lock.json
├─ src/
│ ├─ app.js # Express app
│ ├─ config/
│ │ └─ swagger.js
│ ├─ controllers/
│ │ ├─ auth.controller.js
│ │ ├─ record.controller.js
│ │ └─ dashboard.controller.js
│ ├─ middlewares/
│ │ └─ auth.middleware.js
│ ├─ models/
│ │ ├─ user.model.js
│ │ └─ record.model.js
│ └─ routes/
│ ├─ auth.routes.js
│ ├─ record.routes.js
│ └─ dashboard.routes.js

```
---

## Installation

1. Clone the repo:

```bash
git clone https://github.com/Rani704/Finance-Data-Processing-and-Access-Control-Backend.git
cd Finance-Data-Processing-and-Access-Control-Backend
Install dependencies:
npm install
Start MongoDB locally (or update MONGO_URI in server.js for your DB).
Run the server:
npm start
# or for hot reload during development
npx nodemon server.js


## API Endpoints

- Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login and receive JWT

- Record Routes
Method	Endpoint	Description	Roles Allowed
POST	/api/records	Create a financial record	admin, analyst
GET	/api/records	Get all financial records	admin, analyst, viewer
PUT	/api/records/:id	Update a record by ID	admin, analyst
DELETE	/api/records/:id	Delete a record by ID	admin

- Dashboard Routes
Method	Endpoint	Description	Roles Allowed
GET	/api/dashboard	Get summary statistics	admin, analyst, viewer

Authorization
All protected routes require JWT in the header:
Authorization: Bearer <token>
Access control is enforced via user roles.
```
Notes:
- PUT and DELETE operations require the record _id from the database.
- Swagger provides interactive testing for all endpoints.
- No unit tests are included in this version.

Example JSON for Record:
```
POST /api/records

{
  "amount": 20000,
  "type": "income",
  "category": "salary",
  "note": "April salary",
  "date": "2026-04-04"
}
Dashboard Example Response

{
  "totalIncome": 40000,
  "totalExpense": 15000,
  "netBalance": 25000,
  "categoryBreakdown": [
    { "category": "salary", "total": 40000 },
    { "category": "groceries", "total": 5000 },
    { "category": "rent", "total": 10000 }
  ]
}
```
  
Submission
- GitHub Repository: https://github.com/Rani704/Finance-Data-Processing-and-Access-Control-Backend
- Includes backend code and Swagger documentation.

---


