require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const Message = require("./models/Message");
const app = express();

// ✅ CORS — allow your Vercel frontend
app.use(cors({
  origin: "https://portfolio-seven-gray-fvo03sq7gi.vercel.app"
}));

app.use(express.json());

/* ✅ MongoDB Connect */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

/* ✅ Mail Transport — defined BEFORE routes */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ✅ CONTACT ROUTE — single clean definition */
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    /* 1. Save to DB */
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    /* 2. Send Email */
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

/* ✅ SERVER START */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});