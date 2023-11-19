import React from "react";
import { Box, TextField, Button, useMediaQuery } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Header from "../../component/Header";
const Form = () => {
  const isNonMobile = useMediaQuery("min-width:600px");

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
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
          sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
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
            sx={{ gridAutoColumns: "auto" }}
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
        </Box>
      </form>
    </Box>
  );
};

export default Form;
