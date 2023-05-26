const dontenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sendEmail = require("./utils/sendEmail");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/sendemail", async (req, res) => {
    const {email} = req.body;

    try {
        const send_from = process.env.EMAIL_USER;
        const send_to = email;
        const subject = "Hoşgeldiniz";
        const html = "<h1>Hoşgeldiniz</h1>";

        await sendEmail(send_to, send_from, subject, html);
        res.status(200).json({ success: true, message: "Email Sent." });
    } catch (error) {
        res.status(500).json(error.message);
    }
})

const PORT = process.env.PORT || 8600;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})