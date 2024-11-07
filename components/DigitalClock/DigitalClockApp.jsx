// rafce -- emmet shortcut to create a react arrow function component
import React, {useState, useEffect} from 'react'
import './clock.css'


const DigitalClockApp = (props) => {

  const [time, setTime] = useState(new Date());
  const clockType = props.type;

  useEffect(() => {
      const intervalId = setInterval(() => { setTime(new Date()) }, 1000)

      return () => {
        clearInterval(intervalId);
      }
  }, []);

  function formatTime(timeType){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    //convert from military time
      hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function countdownToMidnight(){
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    const timeLeft = midnight - now;
    const hours = Math.floor(timeLeft / 1000 / 60 / 60);
    const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(num){
    return (num < 10 ? "0" : "")+num;

  }

  return (
    <>
      <div className="clock-container">        
        <h1>{clockType == "1" ? "Current Time" : "Time until Midnight"}</h1>
        <div className='clock-container-inner'>
            <div className="clock">
              <span>{clockType == "1" ? formatTime() : countdownToMidnight()}</span>
            </div>
            {/* {militaryTime ? <button>Military Time</button> : ""} */}
        </div>
      </div>
    </>
  )
}

export default DigitalClockApp