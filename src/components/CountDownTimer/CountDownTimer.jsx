import React, { useState, useEffect } from "react";
import "./CountDownTimer.css";

const CountDownTimer = () => {
  const [hours, setHours] = useState("");
  const [mins, setMins] = useState("");
  const [secs, setSecs] = useState("");
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = () => {
    const h = parseInt(hours) || 0;
    const m = parseInt(mins) || 0;
    const s = parseInt(secs) || 0;
    const total = h * 3600 + m * 60 + s;

    if (total <= 0) return;

    setTotalSeconds(total);
    setIsRunning(true);

    const id = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setHours("");
    setMins("");
    setSecs("");
    setTotalSeconds(0);
  };

  useEffect(() => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    setHours(h.toString().padStart(2, "0"));
    setMins(m.toString().padStart(2, "0"));
    setSecs(s.toString().padStart(2, "0"));
  }, [totalSeconds]);

  return (
    <div className="container">
      <div className="title">CountDown Timer</div>
      <div className="below-container">
        <div className="time-container">
          <div className="label hours">Hours</div>
          <div className="label mins">Minutes</div>
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
            disabled={isRunning}
          />
          <p className="semi-colon">:</p>
          <input
            className="input mins"
            type="number"
            value={mins}
            onChange={(e) => setMins(e.target.value.slice(0, 2))}
            maxLength="2"
            placeholder="00"
            disabled={isRunning}
          />
          <p className="semi-colon">:</p>
          <input
            className="input secs"
            type="number"
            value={secs}
            onChange={(e) => setSecs(e.target.value.slice(0, 2))}
            maxLength="2"
            placeholder="00"
            disabled={isRunning}
          />
        </div>

        <div className="btn-container">
          <button
            className="btn start"
            onClick={startInterval}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className="btn stop"
            onClick={stopTimer}
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            className="btn reset"
            onClick={resetTimer}
            disabled={isRunning}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
