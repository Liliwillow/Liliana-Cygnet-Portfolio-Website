import bcrypt from "bcrypt";
import prisma from "./prisma/prisma.js";
import express from "express";
import cors from "cors";
import { generateAccessToken, generateRefreshToken } from "./utils/jwt.js";

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.post("/api/register", async (req, res) => {
  try{
    const {
        firstName,
        lastName,
        username,
        password,
        email,
        contact
    } = req.body;

    const existingUser = await prisma.user.findFirst({
      where: {
        OR:[
          { username }
        ]

      }
    });

    if (existingUser) {
        return res.status(400).json({
            error: "Username already exists"

        });
    }

    const existingEmail = await prisma.user.findFirst({
        where: {
            OR:[
                { email }
            ]
        }
    });

    if (existingEmail) {
        return res.status(400).json({
            error: "Email already used"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        username,
        password: hashedPassword,
        email,
        contact  
      }
    });
    
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
        )
      }
    });

    res.cookie(
      "refreshToken",
      refreshToken,
      {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
      }
    );

    res.status(201).json({
      message: "User created",
      accessToken,
      user:{
        id: user.id,
        email: user.email,
        username: user.username
      }
    });


  }
  catch (error) {
    console.error(error);

    res.status(500).json({
        error: "Server error"
    });
  }
});

app.post("/api/signin", async (req, res) => {
  
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

