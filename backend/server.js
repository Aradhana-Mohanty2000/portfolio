require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Message = require("./models/Message");

const app = express();

// ✅ CORS
app.use(cors({
  origin: [
    "https://aradhana-mohanty-fvo03sq7gi.vercel.app",
    "https://portfolio-seven-gray-fvo03sq7gi.vercel.app",
    "https://portfolio-5etho065i-aradhana-mohanty2000s-projects.vercel.app"
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// ✅ MongoDB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// ✅ Mail Transport — IPv4 forced to fix ENETUNREACH on IPv6 hosts
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  family: 4  // ✅ Force IPv4 — fixes ENETUNREACH (2607:f8b0:... IPv6 unreachable)
});

// ✅ CONTACT ROUTE
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Save to DB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log("✅ Message saved to DB");

    // 2. Respond immediately
    res.status(200).json({ success: true });

    // 3. Send email notification in background
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    }).then(() => {
      console.log("✅ Email sent");
    }).catch((emailErr) => {
      console.error("❌ Email failed:", emailErr.message);
    });

  } catch (err) {
    console.error("❌ Route error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ SERVER START
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});