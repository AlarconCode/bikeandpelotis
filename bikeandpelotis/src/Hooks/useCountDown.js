import { useEffect, useState } from "react";

const useCountDown = (targetDate) => {
    const finalDate = new Date(targetDate).getTime();
    const startDate = new Date().getTime();

    const countDownDate = finalDate - startDate;

    const [countDown, setCountDown] = useState(countDownDate);

    useEffect(() => {

    const interval = setInterval(() => {
            setCountDown(countDownDate)
        }, 1000);

    return () => clearInterval(interval)

    }, [countDownDate])
}