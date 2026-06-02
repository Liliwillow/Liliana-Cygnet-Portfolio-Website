import { Box, Button, colors, TextField, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const Register = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = async (values, {resetForm}) => {
    try{
      const response = await fetch(
        "http://localhost:3001/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        }
      );

      const data = await response.json();
      if (!response.ok){
        throw new Error(data.error || "Registration Failed");
      }
      
      console.log("User Created:", data);

      localStorage.setItem("accessToken", data.accessToken);
      
      alert("Registration Successful");

      resetForm();


    }
    catch (error){
      console.error(error)
      alert(error.message);
    }
  };

  const phoneRegExp = /^\\(:([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/;

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    username: yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be 20 characers or less")
      .required("required"),
    password: yup.string()
      .matches(/[A-Z]/, "Must contain an uppercase letter")
      .matches(/[a-z]/, "Must contain a lowercase letter")
      .matches(/[0-9]/, "Must contain a number")
      .required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup.string().matches(phoneRegExp, "Phone Number is not valid").required("required")
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    contact: ""
  };

  return (
    <Box 
      px="200px"
      py="75px"
      alignSelf="center"
      backgroundColor={colors.darkblue[600]}
    >
        <Formik
          onSubmit={handleFormSubmit}
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
                display="grid"
                gap="30px"
                alignSelf="center"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                // sx={{
                //     "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },

                // }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    gridColumn: "span 2",
                    gridRow: "1"
                  }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    gridColumn: "span 2",
                    gridRow: "1"
                  }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                  name="username"
                  error={!!touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                  sx={{
                    gridColumn: "span 4",
                    gridRow: "2"
                  }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{
                    gridColumn: "span 4",
                    gridRow: "3"
                  }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    gridColumn: "span 2",
                    gridRow: "4"
                  }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="contact"
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{
                    gridColumn: "span 2",
                    gridRow: "4"
                  }}
                />

              </Box>
            </form>
          )}

        </Formik>
    </Box>
  );
};

export default Register;