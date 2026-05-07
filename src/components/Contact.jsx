import { useState } from "react";
import { Input, TextField, Box, useTheme, Button, Typography } from "@mui/material";
import { tokens } from "../theme";

const ContactForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [result, setResult] = useState("");

  const onSubmit = async(event) => {
    event.preventDefault();
    const formData= new FormData(event.target);
    formData.append("access_key", "61e3c857-a4d1-4999-8753-4849f7694e33")

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignSelf="center"
      minWidth="50vw"
      minHeight="40vh"
      gap="20px"
      sx={{
        '& .MuiTextField-root': {m: 1, width: '60ch', alignSelf: 'center'}
      }}
    >
      <Typography alignSelf="center" fontSize="16px">Help me expand my portfolio!</Typography>
      <TextField name="name" id="outlined-required" required label="Name"/>
      <TextField name="email" id="outlined-required" required label="Email"/>
      <TextField name="message" id="outlined-multiline-flexible" required multiline rows={4} label="Message"/>
      <Button 
        type="submit" 
        variant="outlined" 
        sx={{
          color: colors.green[300],
          border: "2px solid",
          borderRadius: "8px",
          borderColor: colors.white[100],
          backgroundColor: colors.green[600],
          width: "30ch",
          alignSelf: "center"
        }}
        
      > 
        Submit 
      </Button>
      <p alignSelf="center">{result}</p>
    </Box>
  );
};

export default ContactForm;
