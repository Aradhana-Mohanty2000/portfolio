
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const Message = require("./models/Message");
const app = express();

app.use(cors());
app.use(express.json());

/* ✅ MongoDB Connect */
mongoose.connect(process.env.MONGO_URI)
  
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err));
 
// 📩 CONTACT ROUTE
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const newMessage = new Message({
      name,
      email,
      message,
      time: new Date()
    });

    await newMessage.save();

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    });

    res.status(200).json({ success: true });

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});

/* ✅ Mail Transport */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ✅ API ROUTE */
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    /* 1. Save to DB */
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    /* 2. Send Email */
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

/* ✅ SERVER START */
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});