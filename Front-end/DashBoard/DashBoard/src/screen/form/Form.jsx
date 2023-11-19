import React from "react";
import { Box, TextField, Button, useMediaQuery } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Header from "../../component/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const userSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    contact: yup
      .string()
      .required("Required")
      .matches(phoneRegExp, "Phone Number is not valid"),
    address1: yup.string().required("Required"),
    address2: yup.string().required("Required"),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,
    onsubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <Box m="20px">
      <Header title="CREATE USER" subTitle="Create a New User Profile " />
      <form onSubmit={formik.handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {/* Fisrt name */}
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="First Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            name="firstName"
            error={!!formik.touched.firstName && !!formik.errors.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName}
            sx={{ gridColumn: "span 2" }}
          />
          {/* Last name */}
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Last Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            name="lastName"
            error={!!formik.touched.lastName && !!formik.errors.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName}
            sx={{ gridColumn: "span 2" }}
          />
          {/* email */}
          <TextField
            fullWidth
            variant="filled"
            type="email"
            label="Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            error={!!formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ gridColumn: "span 4" }}
          />
          {/* contact */}
          <TextField
            fullWidth
            variant="filled"
            type="tel"
            label="Contact Number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contact}
            name="contact"
            error={!!formik.touched.contact && !!formik.errors.contact}
            helperText={formik.touched.contact && formik.errors.contact}
            sx={{ gridColumn: "span 4" }}
          />
          {/* address */}
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Address 1"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address1}
            name="address1"
            error={!!formik.touched.address1 && !!formik.errors.address1}
            helperText={formik.touched.address1 && formik.errors.address1}
            sx={{ gridColumn: "span 4" }}
          />
          {/* address */}
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Address 2"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address2}
            name="address2"
            error={!!formik.touched.address2 && !!formik.errors.address2}
            helperText={formik.touched.address2 && formik.errors.address2}
            sx={{ gridColumn: "span 4" }}
          />
        </Box>
        {/* Button */}
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New User
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
