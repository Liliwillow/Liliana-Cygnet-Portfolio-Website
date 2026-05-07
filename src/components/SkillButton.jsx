import { useTheme, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { tokens } from "../theme";

const SkillButton = ({ icon, label }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Button
            startIcon={icon}
            variant="outlined"
            sx={{
                backgroundColor: colors.green[600],
                color: colors.green[100],
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                    backgroundColor: colors.green[700],
                },

            }}    
        >
            <Typography sx={{ fontSize: "0.80rem" }}>{label}</Typography>
        </Button>
    );
};

export default SkillButton;