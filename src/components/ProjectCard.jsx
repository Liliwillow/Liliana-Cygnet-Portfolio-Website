import { Card, CardMedia, CardContent, Typography, Stack, useTheme } from "@mui/material";
import SkillButton from "./SkillButton";
import { tokens } from "../theme";

const ProjectCard = ({ image, title, description, skills }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Card
      sx={{
        width: "1000px",
        height: "500px",
        maxWidth: 1200, 
        backgroundColor: "transparent",
        boxShadow: "none",
        display: "flex",
        flexDirection: "row",
        border: "4px solid",
        borderColor: colors.white[300],
        borderRadius: 4,
        padding: "40px",
        alignSelf: "center"

      }}
    >
      <CardContent
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alightItems: "center",
            textAlign: "left",
            gap: "20px"
        }}
      >
        <Typography variant="b" fontSize="1.75rem">
            {title}
        </Typography>
        <Typography variant="body2">
            {description}
        </Typography>
        <Stack 
          direction="row"
          maxWidth="400px"
          sx={{ flexWrap: 'wrap' }}
        >
            {skills}
        </Stack>
      </CardContent>

      <CardMedia
        component="img"
        src={image}
        alt={title}
        sx={{
            width: 600,
            height: 300 ,
            alignSelf: 'center',
            border: "1px solid",
            borderRadius: 3,
        }}
      />
    </Card>
  );
};

export default ProjectCard;


