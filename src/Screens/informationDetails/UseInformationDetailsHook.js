import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const UseInformationDetailsHook = () => {
  const addInitialValue = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
  };

  const addvalidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: addInitialValue,
    validationSchema: addvalidationSchema,
    onSubmit: (values) => {
      onPressButton(values);
    },
  });

  const onPressButton = (values) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      email: values.email,
    };
    console.log("DATA===", payload);
  };

  return {
    formik,
  };
};

export default UseInformationDetailsHook;
