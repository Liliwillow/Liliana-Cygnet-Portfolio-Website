import bcrypt from "bcrypt";
import prisma from "./prisma";

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

    res.status(201).json({
        message: "User created",
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

