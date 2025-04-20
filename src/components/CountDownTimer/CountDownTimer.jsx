import React, { useEffect, useState } from "react";
import "./CountDownTimer.css";

const CountDownTimer = () => {
  const [time, setTime] = useState();
  const [hours, setHours] = useState("");
  const [mins, setMins] = useState("");
  const [secs, setSecs] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  // const getFormattedTime = (milliseconds) => {
  //   const total_seconds = Math.floor(milliseconds / 1000);
  //   const total_minutes = Math.floor(total_seconds / 60);
  //   const total_hours = Math.floor(total_minutes / 60);
  //   const days = Math.floor(total_hours / 24);

  //   const seconds = total_seconds % 60;
  //   const minutes = total_minutes % 60;
  //   const hours = total_hours % 60;

  //   return `${days}Days ${hours}Hours ${minutes}Minutes ${seconds}Seconds`;
  // };

  const startInterval = () => {
    if (hours === "" && mins === "" && secs === "") return;
    setIsRunning(true);
    const id = setInterval(() => {
      setSecs((prev) => {
        let updatedSec = parseInt(prev);
        let updatedMins = parseInt(mins);
        let updatedHour = parseInt(hours);

        if (updatedSec === 0 && updatedMins === 0 && updatedHour === 0) {
          clearInterval(id);
          return "00";
        }

        if (updatedSec > 0) {
          updatedSec--;
        } else if (updatedMins > 0 && updatedSec === 0) {
          updatedSec = 59;
          updatedMins--;
        } else if (updatedHour > 0 && updatedMins === 0 && updatedSec === 0) {
          updatedMins = 59;
          updatedHour--;
        }

        setHours(updatedHour.toString().padStart(2, "0"));
        setMins(updatedMins.toString().padStart(2, "0"));
        setSecs(updatedSec.toString().padStart(2, "0"));

        return updatedSec.toString().padStart(2, "0");
      });
    }, 1000);
    setIntervalId(id);
  };
  // Pause Timer Logic
  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  // Reset Timer Logic
  const resetTimer = () => {
    clearInterval(intervalId);
    setHours("");
    setMins("");
    setSecs("");

    setIsRunning(false);
  };

  return (
    <div className="container">
      <div className="title">CountDown Timer</div>
      <div className="below-container">
        <div className="time-container">
          <div className="label hours">Hours</div>
          <div className="label mins">Mintues</div>
          <div className="label secs">Seconds</div>
        </div>
        <div className="input-container">
          <input
            className="input hours"
            value={hours}
            onChange={(e) => setHours(e.target.value.slice(0, 2))}
            maxLength="2"
            type="number"
            placeholder="00"
          />
          <p className="semi-colon">:</p>
          <input
            className="input mins"
            type="number"
            value={mins}
            onChange={(e) => setMins(e.target.value.slice(0, 2))}
            maxLength="2"
            placeholder="00"
          />
          <p className="semi-colon">:</p>
          <input
            className="input secs"
            type="number"
            maxLength="2"
            value={secs}
            onChange={(e) => setSecs(e.target.value.slice(0, 2))}
            placeholder="00"
          />
        </div>
        <div className="btn-container">
          <button className="btn start" onClick={startInterval}>
            Start
          </button>
          {isRunning ? (
            <button className="btn stop" onClick={stopTimer}>
              Stop
            </button>
          ) : (
            <button className="btn reset" onClick={resetTimer}>
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
