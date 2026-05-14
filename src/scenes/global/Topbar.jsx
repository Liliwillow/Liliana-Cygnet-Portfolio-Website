import { Box, IconButton, useTheme, Button, Typography} from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import { motion } from "framer-motion";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const MotionBox = motion(Box);

    return <MotionBox 
      
      display="flex" 
      justifyContent="space-between" 
      p={2}
      initial={{ y: -70 }}
      whileHover={{ y: 0 }}
      animate={{ y: -55 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
        

      <Box 
        display="flex" 
        backgroundColor={colors.darkblue[400]} 
        borderRadius="3px">

            <InputBase
                sx={{ml:2, flex:1}}
                placeholder="Search">
                <IconButton type="button" sx={{ p:1 }}>
                    <SearchIcon />
                </IconButton>
            </InputBase>
        </Box>

        <Box display="flex">
            <Button onClick={() => navigate("/register")}
              variant="outlined"
              sx={{
                border: "2px solid",
                borderRadius: "6px",
                borderColor: colors.black[900],
                backgroundColor: colors.green[600]
              }}
            >
              <Typography color={colors.white[100]}>Register</Typography>
            </Button>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon />
                ) : (
                <LightModeOutlinedIcon/>
                )}
            </IconButton>
            <IconButton component={Link} to="/">
                <HomeIcon/>
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton>
                <PersonOutlinedIcon/>
            </IconButton>
        </Box>
    </MotionBox>
    

    
};

export default Topbar;