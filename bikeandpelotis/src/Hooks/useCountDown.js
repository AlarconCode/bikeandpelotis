import { useEffect, useState } from "react";

const useCountDown = (targetDate) => {
    const finalDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(finalDate - new Date().getTime());

    useEffect(() => {

    const interval = setInterval(() => {
            setCountDown(finalDate - new Date().getTime())
        }, 1000);

    return () => clearInterval(interval)

    }, [finalDate])

    return getReturnValues(countDown)
}

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor(countDown % (1000 * 60 * 60 * 24) / (1000 * 3600))
  const minutes = Math.floor(countDown % (1000 * 3600) / (1000 * 60))
  const seconds = Math.floor(countDown % (1000 * 60) / 1000)

  return [days, hours, minutes, seconds]

}

export { useCountDown }

