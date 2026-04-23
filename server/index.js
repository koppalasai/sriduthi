import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Message Schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  product: { type: String },
  details: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Email Transporter (Placeholder - user needs to provide app password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, product, details } = req.body;

    // Save to Database
    const newMessage = new Message({ name, email, product, details });
    await newMessage.save();

    // Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'koppalasaisantosh@gmail.com', // Admin email
      subject: `New Lead: ${product || 'General Inquiry'} from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Product:</strong> ${product || 'N/A'}</p>
        <p><strong>Details:</strong> ${details}</p>
        <hr />
        <p>Sent from Sri Dhuthi Enterprises Website</p>
      `
    };

    // Send Email Notification (Non-blocking)
    if (process.env.EMAIL_PASS) {
      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Email sending failed, but message was saved to DB:', emailError.message);
      }
    }

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Submission Error:', error);
    res.status(500).json({ success: false, message: 'Failed to save message. Please try again.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
