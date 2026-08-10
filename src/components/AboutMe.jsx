import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { tokens } from "../theme";

const AboutMe = ({ image, alt }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const MotionBox = motion(Box);
  const MotionImg = motion("img");

  return(
    <Box
      display="grid"
      gridTemplateColumns="repeat(16,1fr)"
      gridTemplateRows="repeat(20,1fr)"
      minWidth="100vw"
      minHeight="90vh"
      gap="20px"
      px="75px"
    >
      <MotionBox
        gridColumn="1 / 12"
        gridRow="1 / 20"
        display="flex"
        flexDirection="column"
        gap="20px"
        initial={{ opacity: 0, y: 30}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.6, delay: 0}}
        viewport={{ amount: 0.1, once: true }}
      >
        <Typography fontSize="20px" sx={{ textIndent: '2em' }}>  My name is Liliana Cygnet, I’m a passionate software engineer who brings curiosity, creativity, and dedication to every project I undertake. Having graduated from the University of California, Merced in 2024, I developed a strong foundation in software engineering and I’ve discovered my love for solving real-world problems through code. Originally drawn to back-end development, I've since expanded my skill set to include front-end technologies, allowing me to create well-rounded, user-focused applications.</Typography> 
        <Typography fontSize="20px" sx={{ textIndent: '2em' }}>  One of my most impactful projects was developing an organizational web application for Turlock Irrigation District; the app was designed to help field workers efficiently manage water data and seamlessly transfer from working in the field to working in the office. This experience strengthened my ability to design practical solutions, collaborate with stakeholders, and build tools that make a tangible difference in day-to-day operations. I take pride in writing clean, maintainable code and continuously seek opportunities to grow as both an engineer and a problem solver.</Typography>
        <Typography fontSize="20px" sx={{ textIndent: '2em' }}>  Outside of programming, I like to spend my free time gardening, cooking meals for my family, playing piano and video gaming. These interests not only give balance to my life but also inspire my desire to help humanity through technology.</Typography>
      </MotionBox>
      <MotionBox
        gridColumn="12 / 16"
        gridRow="1 / 18"
        border="5px solid"
        borderRadius="10px"
        borderColor={colors.white[300]}
        backgroundColor={colors.darkblue[600]} 
        initial={{ opacity: 0, y: 30}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.6, delay: 0.2}}
        viewport={{ amount: 0.1, once: true }} 
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
    </Box>
  );
};

export default AboutMe;
