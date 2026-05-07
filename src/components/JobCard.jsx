import {  Box, useTheme, Divider, Stack, Typography } from "@mui/material";
import SkillButton from "./SkillButton";
import { tokens } from "../theme";

const JobCard = ({ image, title, role, date, location, description, skills }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      flexDirection="column"
      border="4px solid"
      minWidth="85vw"
      alignSelf="center"
      borderColor={colors.white[300]}
      borderRadius="4px"
      py="10px"
      px="10px"
      gap="5px"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          gap="5px"
          sx={{
            flex: 1,
            mr: 1
          }}
        >
          <img src={image} alt={title} width="100px" height="100px"/>
          <Typography fontSize="2em" fontWeight="Bold"> {title} </Typography>
          <Typography fontSize="1em"> {role} </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-end"
          sx={{
            flex: 1,
            ml: 1
          }}
        >
          <Typography> {date} </Typography>
          <Typography> {location} </Typography>
        </Box>
      </Box>

      <Divider/>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          maxWidth="40vw"
          sx={{
            flex: 0.5,
            mr: 1
          }}
        >
          <Typography fontSize="16px" sx={{ textIndent: '2em' }}> {description} </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          gap="10px"
          sx={{
            flex: 0.5,
            ml: 1
          }}
        >
          <Typography> Skills Used </Typography>
          <Stack
            direction="row"
            maxWidth="400px"
            sx={{ flexWrap: 'wrap' }}
          >
            {skills}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default JobCard;


