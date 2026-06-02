router.post("/refresh", async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    
    if(!refreshToken) {
      return res.sendStatus(401);
    }

    const storedToken = await prisma.refreshToken.findUnique({
      where: {
        token: refreshToken
      }
    });

    if(!storedToken) {
      return res.sendStatus(403);
    }

    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const accessToken = jwt.sign(
      {
        userId: decoded.userId
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m"
      }
    );
      
    res.json({
        accessToken
    });

  }
  catch (error) {
    res.sendStatus(403); 
  }
});