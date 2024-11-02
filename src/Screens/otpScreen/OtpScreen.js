import React from "react";
import "./Otp.css";
import Buttons from "../../Components/Buttons/Buttons";
import { Link } from "react-router-dom";
import useOtpScreenHook from "./useOtpScreenHook";

const OtpScreen = () => {
  const { inputRefs, handleChange, handleKeyDown, handleSubmit, otp ,isOtpComplete } = useOtpScreenHook();
  return (
    <div className="OtpWrapper">
      <div className="OtpContainer1">
        <div className="OtpImage">
          <img
            src={require("../../Assets/Images/loginImage.png")}
            alt="Login Form"
          />
        </div>
        <div className="OtpContents">
          <div className="OtpContentsDiv">
            <div className="OtpContentsDivMain">
              <h6>Enter otp</h6>
              <div className="otpInput">
                {otp.map((digit,index) => (
                     <div className="otpOutBox" key={index}>
                     <input
                     
                       type="text"
                       maxLength="1"
                       value={digit}
                       onChange={(e) => handleChange(e, index)}
                       onKeyDown={(e) => handleKeyDown(e, index)}
                       ref={(el) => (inputRefs.current[index] = el)}
                     />
                   </div>
                ))}
              </div>
              <p>OTP will send to your registered mobile number</p>
            </div>
            <div>
                <Link to="/informationdetails">
              <Buttons label={"Get otp"} onPress={handleSubmit}  isDisabled={!isOtpComplete}
        buttonStyle={{
          backgroundColor: isOtpComplete ? "yellow" : "grey",
          color: isOtpComplete ? "black" : "white"
        }}/></Link>
              <p style={{ textAlign: "center", paddingTop: 10 }}>
                Didn't recieve OTP? <Link className="resendLink" to="/informationdetails">Resend</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpScreen;
