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

## 🗂 Project Structure

```text
finance-backend/
├─ src/
│ ├─ controllers/ # API logic for users and financial records
│ ├─ models/ # Mongoose schemas for Users and Records
│ ├─ routes/ # Express route definitions
│ ├─ middlewares/ # JWT authentication and role-based access
│ └─ app.js # Express app configuration
├─ server.js # Server entry point
├─ package.json
├─ package-lock.json
├─ README.md

```
## User Roles & Permissions
| Role    | Permissions |
|---------|-------------|
| Viewer  | View records and dashboard data only |
| Analyst | View records and dashboard summaries |
| Admin   | Full access to users and records |

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/Rani704/Finance-Data-Processing-and-Access-Control-Backend.git
cd Finance-Data-Processing-and-Access-Control-Backend
```
2. Install dependencies:
npm install
3. Create a .env file in the root folder with the following content:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4. Start the server:
npm start

The server runs at http://localhost:5000.

API Endpoints
Authentication
Method	Endpoint	Description	Body Example
POST	/api/auth/register	Register a new user	{ "name": "Reetika", "email": "reetika@test.com", "password": "123456", "role": "admin" }
POST	/api/auth/login	Login and receive JWT token	{ "email": "reetika@test.com", "password": "123456" }
Financial Records
Method	Endpoint	Description	Body Example
POST	/api/records	Create a financial record	{ "amount": 2000, "type": "income", "category": "salary", "note": "April Salary", "date": "2026-04-04" }
GET	/api/records	Fetch all records	N/A
PUT	/api/records/:id	Update a record by ID	{ "amount": 2500, "note": "Updated salary" }
DELETE	/api/records/:id	Delete a record by ID	N/A
Dashboard Summary
Method	Endpoint	Description
GET	/api/dashboard/summary	Total income, expenses, and net balance
GET	/api/dashboard/category	Income/expense breakdown by category
Swagger Documentation

Interactive API documentation is available at:

http://localhost:5000/api-docs

Swagger allows testing endpoints and viewing request/response structures.

Authentication

All protected routes require JWT authentication. Include the token in headers:

Authorization: Bearer <your_jwt_token>

Example:

GET /api/records
Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
Assumptions
Only Admin can manage users.
Users can only manage their own financial records.
MongoDB is used for persistence.
No unit tests are implemented in this version.
The project is for assessment purposes and is not production-ready.
Submission
GitHub Repository: https://github.com/Rani704/Finance-Data-Processing-and-Access-Control-Backend
Includes backend code and Swagger documentation.

---


