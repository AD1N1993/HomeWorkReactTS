import React, {useEffect, useState} from "react";
import {Button} from "../Button/Button";
import s from "./Clock.module.scss"

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [startStop,setStartStop] = useState(false);
  useEffect(() => {
    if(startStop === true){
	  let timerID = setInterval( () => setDate(new Date()), 1000 );

	  return function cleanup() {
		clearInterval(timerID);
	  };
	}

  });

  return (
	<>
	  <div className={s.clockWrapper}>
		<div className={s.date}><h1>{date.toLocaleDateString()}</h1></div>
		<span className={s.time}>{date.toLocaleTimeString()}</span>
		<Button value={"start"} action={()=>{setStartStop(true)}} />
		<Button value={"stop"} action={()=>{setStartStop(false)}}/>
	  </div>
	</>
  );
}

