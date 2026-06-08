📌 Task Management System (MERN Stack)

A full-stack Task Management application built using the MERN stack with authentication, role-based access control, and CRUD functionality for tasks.

🚀 Features
🔐 Authentication & Authorization
User registration and login
Password hashing using bcrypt
JWT-based authentication
Role-based access control (User / Admin)
📋 Task Management
Create tasks
View user-specific tasks
Update tasks
Delete tasks
Each task is linked to its owner
🛡️ Security Features
Protected routes using JWT middleware
Input validation and error handling
Secure password storage
💻 Frontend
React-based UI
Login & registration pages
Dashboard for task management
API integration using Axios
Protected routes for authenticated users
🏗️ Tech Stack
Frontend:
React.js
Axios
React Router DOM
Backend:
Node.js
Express.js
Database:
MongoDB (Mongoose)
Authentication:
JSON Web Token (JWT)
bcrypt.js
📁 Project Structure
task-management-system/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/task-management-system.git
cd task-management-system
2️⃣ Backend Setup
cd backend
npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

npm run dev
3️⃣ Frontend Setup
cd frontend
npm install
npm start
🔗 API Endpoints
Auth Routes
POST /api/auth/register → Register user
POST /api/auth/login → Login user
Task Routes (Protected)
POST /api/tasks → Create task
GET /api/tasks → Get user tasks
PUT /api/tasks/:id → Update task
DELETE /api/tasks/:id → Delete task
🔐 Authentication Flow
User logs in → receives JWT token
Token stored on frontend
Token sent in headers for protected routes:
Authorization: Bearer <token>
📦 Future Improvements
Add task status filtering
Add due dates & reminders
Add pagination
Deploy backend (Render / Railway)
Deploy frontend (Vercel / Netlify)
👨‍💻 Author

Shreya Sarkar

📌 Note

This project is built for internship submission and demonstrates full-stack development skills including authentication, API design, and frontend-backend integration.
