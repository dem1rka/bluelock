import express from "express";
import fs from "fs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const USERS_FILE = "./users.json";
const SECRET = "super_secret_key"; 


const readUsers = () => JSON.parse(fs.existsSync(USERS_FILE) ? fs.readFileSync(USERS_FILE) : "[]");
const writeUsers = (users) => fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

  
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  const users = readUsers();

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hash = await bcrypt.hash(password, 10);
  users.push({ id: Date.now(), username, email, password: hash });
  writeUsers(users);
  res.json({ message: "User registered successfully" });
});

// Вход
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.email === email);

  if (!user) return res.status(400).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "7d" });
  res.json({ token, user });
});

// Проверка токена (для страницы Profile)
app.get("/api/me", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  try {
    const data = jwt.verify(token, SECRET);
    res.json({ user: data });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
});

app.listen(4000, () => console.log("✅ Backend running on http://localhost:4000"));
