import React, { useEffect, useRef, useState } from "react";

const useOtpScreenHook = () => {
  // const inputRef = useRef(null)

  // otp

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
//   const inputRefs = [useRef(null),useRef(null),useRef(null),useRef(null)]


  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/[0-9]$/.test(value) ) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input if it exists
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      // Move focus to the previous input if it exists
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };
  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleSubmit = () => {
    alert(`OTP Submitted: ${otp.join("")}`);
  };

  return {
    inputRefs,
    handleChange,
    handleKeyDown,
    handleSubmit,
    otp,
    isOtpComplete,
  };
};

export default useOtpScreenHook;
