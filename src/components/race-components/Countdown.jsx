import React, { useEffect, useState } from "react";
import "./Countdown.css";
import { addLeadingZero } from "../../helpers";

function Countdown({ date, time }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const dateAsMilliseconds = new Date(`${date}T${time}`).getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = dateAsMilliseconds - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="countdown">
      <div className="number">
        <span className="unit">Days</span>
        {addLeadingZero(timeLeft.days)}
      </div>
      <div className="number">
        <span className="unit">Hours</span>
        {addLeadingZero(timeLeft.hours)}
      </div>
      <div className="number">
        <span className="unit">Minutes</span>
        {addLeadingZero(timeLeft.minutes)}
      </div>
    </div>
  );
}

export default Countdown;
