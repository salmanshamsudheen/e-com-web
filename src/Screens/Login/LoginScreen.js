import React from "react";
import "./Login.css";
import { ReactComponent as Logo } from "../../Assets/SVG/logo.svg";
import { Link } from "react-router-dom";
import Buttons from "../../Components/Buttons/Buttons";
import useLoginScreenHook from "./useLoginScreenHook";

const LoginScreen = () => {
  const { phoneNumber, handleChange, handleSubmit, isValid } =
    useLoginScreenHook();
  return (
    <div className="LsWrapper">
      <div className="LsContainer1">
        <div className="LsImage">
          <img
            src={require("../../Assets/Images/loginImage.png")}
            alt="Login Form"
          />
        </div>
        <div className="LsContents">
          <div className="LsContentsDiv">
            <div>
              <Logo style={{ width: "55" }} />
            </div>
            <h3>Welcome back to buycart</h3>
            <h4>Let's continue purchase with us</h4>
            <div className="LsInputOtp">
              <div>
                <p>Mobile number</p>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={phoneNumber}
                  onChange={handleChange}
                />
                {!isValid && phoneNumber.length > 0 && (
                  <p style={{ color: "red", fontSize: 12 }}>
                    Phone number must be exactly 10 digits
                  </p>
                )}
              </div>
              <Link to="/otp">
                <Buttons
                  label={"Get otp"}
                  onPress={handleSubmit}
                  isDisabled={!isValid}
                  buttonStyle={{
                    backgroundColor: isValid ? "#FFD700" : "grey",
                    color: isValid ? "black" : "white",
                  }}
                />
              </Link>
            </div>
            <p className="LsSignInP">
              Doesn't have an account?{" "}
              <Link className="LsSignInLink" to="/otp">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
