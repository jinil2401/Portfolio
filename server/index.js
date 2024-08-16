const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const mail = require("./api/mail.js");

const db = require("./db.js");

const app = express();
const port = process.env.PORT || "8888";

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*"); // Allow all headers
  next();
});
// Nodemailer endpoint
app.post("/api/send-email", async (req, res) => {
  const { to, name, text } = req.body;

  try {
    await mail(to, name, text);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// About page route
app.get("/api/skill", async (request, response) => {
  let skillList = await db.getSkill();
  response.status(200).json(skillList)
});


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});