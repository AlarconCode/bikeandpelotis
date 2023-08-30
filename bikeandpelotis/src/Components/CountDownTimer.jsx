import { useCountDown } from "../Hooks/useCountDown"
import { ShowCounter } from "./ShowCounter"


const CountDownTimer = ({ targetDate }) => {
  
  const [days, hours, minutes, seconds] = useCountDown(targetDate)

  return (
    <ShowCounter 
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  )
}

export { CountDownTimer }