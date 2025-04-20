import React, { useEffect, useState } from "react";
import "./DigitalClock.css";

// const DigitalClock = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const formatTime = () => {
//     let hours = time.getHours();
//     let mins = time.getMinutes();
//     let secs = time.getSeconds();

//     const meridiem = hours >= 12 ? "PM" : "AM";

//     hours = hours % 12 || 12;

//     return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)}:${padZero(
//       meridiem
//     )}`;
//   };

//   const padZero = (number) => {
//     return (number < 10 ? "0" : "") + number;
//   };

//   return (
//     <div className="clock-container">
//       <div className="clock">
//         <span>{formatTime()}</span>
//       </div>
//     </div>
//   );
// };

// export default DigitalClock;

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  const formattedTime = () => {
    let hours = time.getHours();
    const mins = time.getMinutes();
    const seconds = time.getSeconds();

    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${padZero(hours)} : ${padZero(mins)} : ${padZero(seconds)} ${meridiem}`;
  };

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formattedTime()}</span>
      </div>
    </div>
  );
}
