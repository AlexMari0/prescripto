# 🏥 Doctor Appointment System

A full-stack **Doctor Appointment Booking System** that enables patients to book appointments, doctors to manage schedules, and admins to oversee the entire system.

This project demonstrates a **scalable multi-role architecture** with real-world features like authentication, file uploads, and payment integration.

---

## 🛠️ Tech Stack

### 🔹 Frontend (User App)

* React (Vite)
* Tailwind CSS
* React Router DOM
* Axios
* React Toastify

### 🔹 Admin & Doctor Panel

* React (Vite)
* Context API
* Tailwind CSS

### 🔹 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Validator (Input validation)

### 🔹 Integrations

* Cloudinary → Image upload & storage
* Midtrans → Payment gateway

---

## ✨ Features

### 👤 User (Patient)

* Browse doctors by specialization
* Book appointments
* Secure online payment
* View appointment history
* Manage profile

### 🩺 Doctor

* View and manage appointments
* Update profile and availability

### 🛠️ Admin

* Add and manage doctors
* View all appointments
* Dashboard overview

### ⚙️ System Features

* Role-based authentication (User, Doctor, Admin)
* RESTful API architecture
* Secure middleware protection
* File upload (profile images)
* Payment processing integration

---

## 📁 Project Structure

```bash id="g3k8x2"
project-root/
├── frontend/              # User-facing application
├── admin/                 # Admin & Doctor dashboard
└── backend/               # REST API server
```

### 📌 Backend

```bash id="2dfp7k"
backend/
├── config/                # MongoDB, Cloudinary, Payment config
├── controllers/           # Application logic
├── middlewares/           # Auth & upload middleware
├── models/                # Database schemas
├── routes/                # API endpoints
└── server.js              # Entry point
```

### 📌 Frontend & Admin

```bash id="8q1h3n"
frontend/ & admin/
├── components/            # UI components
├── pages/                 # Pages
└── context/               # Global state
```

---

## 📦 Installation

### 1. Clone Repository

```bash id="z7k1q9"
git clone https://github.com/AlexMari0/prescripto.git
cd doctor-appointment
```

---

## ⚙️ Setup Backend

```bash id="3g8l2p"
cd backend
npm install
```

### ▶️ Run Backend

```bash id="u2n8v1"
npm run server
```

---

## 💻 Setup Frontend

```bash id="m9p4x7"
cd frontend
npm install
npm run dev
```

---

## 🛠️ Setup Admin Panel

```bash id="q8w2c6"
cd admin
npm install
npm run dev
```

---

## 🌐 Environment Variables

### 🔹 Backend (`/backend/.env`)

```env id="a1s9d3"
PORT=5000
MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Midtrans
MIDTRANS_SERVER_KEY=your_server_key
MIDTRANS_CLIENT_KEY=your_client_key

```

---

## 🌍 Live Demo

* 🔗 User App: https://prescripto-yzkl.vercel.app/
* 🔗 Admin Panel: https://prescripto-muas.vercel.app/
* 🔗 Backend API: https://prescripto-wheat-two.vercel.app/

---

## 📸 Screenshots

* Home page
<img width="1427" height="788" alt="image" src="https://github.com/user-attachments/assets/38e81557-d4f1-4afe-a47c-683158e9bf76" />

* Doctor listing
<img width="1425" height="790" alt="image" src="https://github.com/user-attachments/assets/f7bd2562-f3f8-4532-bee3-d3e684577844" />

* Appointment booking
<img width="1426" height="786" alt="image" src="https://github.com/user-attachments/assets/2a986a58-365b-49ed-8d26-f1483cc784aa" />

* Admin dashboard
<img width="1428" height="787" alt="image" src="https://github.com/user-attachments/assets/852a2d79-91c2-48ba-8784-2389c674724c" />

* Doctor dashboard
<img width="1431" height="788" alt="image" src="https://github.com/user-attachments/assets/8ad89e0f-a63f-4a73-9d89-2fdc7124b5c4" />

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

* Alex Mario
* GitHub: https://github.com/Alex-Mari0
