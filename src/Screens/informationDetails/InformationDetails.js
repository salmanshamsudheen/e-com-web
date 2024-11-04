import React from "react";
import "./InformationDetails.css";
import Buttons from "../../Components/Buttons/Buttons";
import { Link } from "react-router-dom";
import UseInformationDetailsHook from "./UseInformationDetailsHook";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const InformationDetails = () => {
  const { formik } = UseInformationDetailsHook();
  return (
    <div className="IsWrapper">
      <div className="IsContainer1">
        <div className="IsImage">
          <img
            src={require("../../Assets/Images/loginImage.png")}
            alt="Login Form"
          />
        </div>
        <div className="IsContents">
          <div className="IsContentsDiv">
            <h4>Enter your detail</h4>
            <div className="isflex">
              <h5>Name</h5>
              <div className="isInput">
                <div>
                  <input
                    placeholder="First name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                    name="firstName"
                  />
                  {formik.errors.firstName && formik.touched.firstName && (
                    <p className="validation">{formik.errors.firstName}</p>
                  )}
                </div>
                <div>
                  <input
                    placeholder="Last name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                    name="lastName"
                  />
                  {formik.errors.lastName && formik.touched.lastName && (
                    <p className="validation">{formik.errors.lastName}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="isflex">
              <h5>Gender</h5>
              <div className="islabels">
                <label className="islabel">
                  <input
                    type="radio"
                    onChange={formik.handleChange}
                    value="male"
                    onBlur={formik.handleBlur}
                    name="gender"
                    checked={formik.values.gender === "male"}
                  />
                  <h6>Male</h6>
                </label>
                <label className="islabel">
                  <input
                    type="radio"
                    onChange={formik.handleChange}
                    value="female"
                    onBlur={formik.handleBlur}
                    name="gender"
                    checked={formik.values.gender === "female"}
                  />
                  <h6>Female</h6>
                </label>

                <label className="islabel">
                  <input
                    type="radio"
                    onChange={formik.handleChange}
                    value="other"
                    onBlur={formik.handleBlur}
                    name="gender"
                    checked={formik.values.gender === "other"}
                  />
                  <h6>Other</h6>
                </label>
              </div>
              {formik.errors.gender && formik.touched.gender && (
                <p className="validation">{formik.errors.gender}</p>
              )}
            </div>
            <div className="isflex">
              <h5>Email address</h5>
              <input
                className="emailInput"
                placeholder="Enter your mail address"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                name="email"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="validation">{formik.errors.email}</p>
              )}
            </div>
            <div className="isflex">
              <Buttons label={"Signin"} 
              isDisabled={!(formik.isValid && formik.dirty)}
              buttonStyle={{
                backgroundColor: !(formik.isValid && formik.dirty) ? "grey" : "#FFD700", // Check if this is consistent
                color: !(formik.isValid && formik.dirty) ? "white" : "black",
              }}
              onPress={() => formik.handleSubmit()} 
              />
              <Link className="islink">Skip now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationDetails;
