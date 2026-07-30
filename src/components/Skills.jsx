import { Box, Typography, useTheme, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { tokens } from "../theme";
import SkillButton from "./SkillButton";

const Skills = ({ languages, software, other}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const MotionBox = motion(Box);
  const MotionStack = motion(Stack);

  return(
    <Box
      display="grid"
      gridTemplateRows="repeat(20, 1fr)"
      gridTemplateColumns="repeat(16, 1fr)"
      minWidth="100vw"
      minHeight="90vh"
      gap="20px"
      px="75px"
    >
      <MotionBox
        gridColumn="1 / 4"
        gridRow="1 / 3"
        display="flex"
        justifyContent="left"
        alignItems="left"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.6, delay: 0.8}}
        viewport={{ amount: 0.2, once: true}}
      >
        <Typography fontSize="16px">Languages</Typography>
      </MotionBox>
      
      <MotionStack
          gridColumn="1 / 16"
          gridRow="3 / 5"
          direction="row"
          maxWidth="100%"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1}}
          transition={{ duration: 0.6, delay: 0.8}}
          viewport={{ amount: 0.2, once: true}}
          sx={{ flexWrap: 'wrap' }}
        >
            {languages}
      </MotionStack>
      <MotionBox
        gridColumn="1 / 4"
        gridRow="5 / 8"
        display="flex"
        justifyContent="left"
        alignItems="left"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.6, delay: 0.8}}
        viewport={{ amount: 0.2, once: true}}
      >
        <Typography fontSize="16px">Software and Tools</Typography>
      </MotionBox>
      
      <MotionStack
          gridColumn="1 / 16"
          gridRow="8 / 10"
          direction="row"
          maxWidth="100%"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1}}
          transition={{ duration: 0.6, delay: 0.8}}
          viewport={{ amount: 0.2, once: true}}
          sx={{ flexWrap: 'wrap' }}
        >
            {software}
        </MotionStack>
        <MotionBox
        gridColumn="1 / 4"
        gridRow="10 / 13"
        display="flex"
        justifyContent="left"
        alignItems="left"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.6, delay: 0.8}}
        viewport={{ amount: 0.2, once: true}}
      >
        <Typography fontSize="16px">Soft Skills & Other Skills</Typography>
      </MotionBox>
      
      <MotionStack 
          gridColumn="1 / 16"
          gridRow="13 / 15"
          direction="row"
          maxWidth="100%"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1}}
          transition={{ duration: 0.6, delay: 0.8}}
          viewport={{ amount: 0.2, once: true}}
          sx={{ flexWrap: 'wrap' }}
        >
            {other}
        </MotionStack>
    </Box>
  );
};

export default Skills;