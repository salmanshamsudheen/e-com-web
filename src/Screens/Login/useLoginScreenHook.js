import React, { useState } from "react";

const useLoginScreenHook = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    // Only allow numeric input and a maximum of 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setIsValid(value.length === 10); // Valid if exactly 10 digits
    }
  };

  const handleSubmit = () => {
    alert(`Phone number submitted: ${phoneNumber}`);
  };

  return {
    phoneNumber,
    handleChange,
    handleSubmit,
    isValid,
  };
};

export default useLoginScreenHook;
