import React, { useEffect, useState, useRef } from "react";

const Otp = () => {
  const OTP_DIGITS = 5;
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));
  const inputRef = useRef([]);
  const handleInputChange = (value, index) => {
    const newArr = [...inputArr];
    if (isNaN(value)) return;
    const updatedVal = value.trim();
    newArr[index] = updatedVal.slice(-1);

    if (index < OTP_DIGITS - 1 && updatedVal) {
      inputRef.current[index + 1].focus();
    }

    setInputArr(newArr);
  };

  const handleOnKeyDown = (e, index) => {
    const key = e.key;

    if (key === "Backspace") {
      e.preventDefault();
      const newArr = [...inputArr];
      if (inputArr[index]) {
        newArr[index] = "";
        setInputArr(newArr);
      } else if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    } else if (key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRef.current[index - 1].focus();
    } else if (key === "ArrowRight" && index < OTP_DIGITS - 1) {
      e.preventDefault();
      inputRef.current[index + 1].focus();
    }
  };

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  return (
    <div>
      <h2> OTP Validation</h2>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        {inputArr.map((_, index) => (
          <input
            type="text"
            key={index}
            style={{ width: "50px", height: "50px", fontSize: "2rem" }}
            onChange={(e) => handleInputChange(e.target.value, index)}
            value={inputArr[index] ?? ""}
            ref={(item) => (inputRef.current[index] = item)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;
