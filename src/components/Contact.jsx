import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Input, TextField, Box, useTheme, Button, Typography } from "@mui/material";
import { tokens } from "../theme";

const ContactForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [result, setResult] = useState("");

  const onSubmit = async(values, { resetForm }) => {
    const formData= new FormData();
    formData.append("access_key", "61e3c857-a4d1-4999-8753-4849f7694e33");
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (!response.ok){
        throw new Error(data.error || "Failed to Send");
      }

      console.log("Message Sent Successfully");

    } catch (error) {
      console.error(error)
      alert(error.message);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    message: yup.string().required("required")
  });

  return (
    <Box
      px="100px"
      justifyContent="center"
      alignSelf="center"
    >
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              gap="30px"
              alignSelf="center"
            >
              <Typography alignSelf="center" fontSize="16px" gridRow="1">Help me expand my portfolio!</Typography>
              <TextField
                variant="filled"
                type="text"
                label="Name*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                />
              <TextField variant="filled"
                type="text"
                label="Email*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                />
              <TextField variant="filled"
                multiline
                rows={4}
                type="text"
                label="Message*"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.message}
                name="message"
                error={!!touched.message && !!errors.message}
                helperText={touched.message && errors.message}/>
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
              <Typography alignSelf="center">{result}</Typography>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
