import { Box, Button, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";  
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GitHubLogo from "../logos/github.png";
import LinkedinLogo from  "../logos/linkedin.png";


const LandingPage = ({ image, alt}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const MotionImg = motion("img");
  const MotionBox = motion(Box);
  
  return(
    <Box
      display="grid"
      gridTemplateColumns="repeat(16, 1fr)"
      gridTemplateRows="repeat(20, 1fr)"
      minHeight="90vh"
      minWidth="100vw"
      gap="20px"
      px="75px"
      pt="75px"
    >
        <MotionBox
          gridColumn="1 / 5"
          gridRow="1 / 16"
          display="flex"
          alignItems="center"
          justifyContent="center"
          maxHeight="100%"
          border="5px solid"
          borderRadius="10px"
          borderColor={colors.white[300]}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1}}
          transition={{ duration: 0.6, delay: 0.8}}
          viewport={{ amount: 0.9, once: true}}
        >
          <MotionImg
            src={image}
            alt={alt}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.6, delay: 0.8}}
            viewport={{ amount: 0.9, once: true}}
            style={{ width: "100%",
              height: "100%",
              objectFit: "cover"
              
            }}
          />
        </MotionBox>
        <MotionBox
          gridColumn="5 / 16"
          gridRow="1 / 8"
          display="flex"
          flexDirection="column"
          alignItems="left"
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.6, delay: 0.2}}
          viewport={{ amount: 0.9, once: true }}
        >
          <Typography fontSize="32px">Hi, my name is</Typography>
          <Typography fontSize="64px" fontWeight="bold">Liliana Cygnet</Typography>
          <Typography fontSize="16px">Software Developer</Typography>
        </MotionBox>
        <MotionBox
          gridColumn="5 / 16"
          gridRow="8 / 13"
          display="flex"
          alignItems="left"
          justifyContent="left"
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.6, delay: 0.4}}
          viewport={{ amount: 0.9, once: true }}
        >
          <Typography fontSize="16px">I’m Liliana Cygnet, a budding computer science graduate from the University of California Merced eager to get her feet in the water.  Throughout my coursework, I was a highly motivated active learner with particular interests in web development, robotics, and databases; I liked to spend my time with independent study and have experience with a variety of languages, software and libraries.  
          </Typography>
        </MotionBox>
        <MotionBox
          gridColumn="5 / 6"
          gridRow="13 / 16"
          backgroundColor={colors.darkblue[600]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="10px"
          borderRadius="8px"
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.6, delay: 0.6}}
          viewport={{ amount: 0.9, once: true }}
        >
          <Button startIcon={<img src={LinkedinLogo} alt="LinkedIn Logo" height="40" width="40"/>} component="a" href="https://www.linkedin.com/in/liliana-cygnet/" target="_blank" rel="noopener noreferrer"></Button>
        </MotionBox>
    </Box>
  );
};

export default LandingPage;