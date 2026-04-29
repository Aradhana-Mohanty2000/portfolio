# 🌐 Aradhana Mohanty — Developer Portfolio

A full-stack personal portfolio website built with **React.js** (frontend) and **Node.js + Express** (backend), featuring a live contact form with MongoDB storage and Gmail email notifications.

🔗 **Live Site:** [portfolio-seven-gray-fvo03sq7gi.vercel.app](https://portfolio-seven-gray-fvo03sq7gi.vercel.app)

---

## ✨ Features

- 🎨 Glassmorphism UI with smooth animations
- 🌀 Auto-scrolling projects section
- 📋 Skills, Education & Experience sections
- 📬 Contact form with real-time availability status
- 🕒 Live clock with open/closed hours indicator
- 💾 Messages saved to MongoDB Atlas
- 📧 Email notifications via Gmail (Nodemailer)
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

### Frontend
| Tech | Usage |
|------|-------|
| React.js | UI Framework |
| CSS3 | Animations & Glassmorphism |
| React Icons | Icon Library |
| Vercel | Deployment |

### Backend
| Tech | Usage |
|------|-------|
| Node.js | Runtime |
| Express.js | Server Framework |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| Nodemailer | Email Service |
| Railway | Deployment |

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── styles/
│   │   └── main.css
│   ├── assets/
│   ├── App.js
│   └── index.js
├── backend/
│   ├── models/
│   │   └── Message.js
│   ├── server.js
│   ├── package.json
│   └── nixpacks.toml
├── public/
└── package.json
```

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/Aradhana-Mohanty2000/portfolio.git
cd portfolio
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Install backend dependencies
```bash
cd backend
npm install
```

### 4. Set up environment variables
Create a `.env` file inside the `backend/` folder:
```env
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000
```

### 5. Run the backend
```bash
cd backend
node server.js
```

### 6. Run the frontend
```bash
# In the root portfolio/ folder
npm start
```

---

## 🌍 Deployment

| Service | Platform | URL |
|---------|----------|-----|
| Frontend | Vercel | [Live Link](https://portfolio-seven-gray-fvo03sq7gi.vercel.app) |
| Backend | Railway | [portfolio-production-69fa.up.railway.app](https://portfolio-production-69fa.up.railway.app) |
| Database | MongoDB Atlas | Cloud Hosted |

---

## 📬 Contact Form Setup

The contact form uses:
- **MongoDB Atlas** to store messages
- **Gmail App Password** for sending email notifications
- **Open hours:** Monday–Friday, 9 AM – 10 PM

To generate a Gmail App Password:
1. Enable 2-Step Verification on your Google Account
2. Go to **Security → App Passwords**
3. Generate a password and add it to `.env` as `EMAIL_PASS`

---

## 👩‍💻 Author

**Aradhana Mohanty**  
Full Stack & Cloud Development Enthusiast

[![GitHub](https://img.shields.io/badge/GitHub-Aradhana--Mohanty2000-black?logo=github)](https://github.com/Aradhana-Mohanty2000)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Aradhana%20Mohanty-blue?logo=linkedin)](https://www.linkedin.com/in/aradhana-mohanty-96a635214/)
[![Email](https://img.shields.io/badge/Email-aradhanamohanty247@gmail.com-red?logo=gmail)](mailto:aradhanamohanty247@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
