import {useState, useEffect} from "react"
import "../css/Counter.css"
const Counter = () => {

    const startDateTime = new Date("February, 16, 2025 11:00:00")
    const endDateTime = new Date("Febraury, 17, 2025 15:00:00")

    const [status, setStatus] = useState("before")
    const [timeRemaining, setTimeRemaining] = useState(0)

    useEffect(() => {

        const updaterTimer = () => {
            const currentDateTime = new Date()
            
            if(currentDateTime < startDateTime){
                const remainingTime = startDateTime.getTime() - currentDateTime.getTime()
                setStatus("before")
                setTimeRemaining(remainingTime)
            } else if (currentDateTime >= startDateTime && currentDateTime <= endDateTime){
                const remainingTime = endDateTime.getTime() - currentDateTime.getTime()
                setStatus("during")
                setTimeRemaining(remainingTime)
            } else {
                setStatus("ended")
                setTimeRemaining(0)
            }
        }

        const interval = setInterval(updaterTimer, 1000);

        return () => clearInterval(interval)
    }, [])

    const formatTime = (time) => {
        const totalSeconds = Math.floor(time / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24)); 
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

  return `${String(days).padStart(2, "0")} Days ${String(hours).padStart(2, "0")} Hrs ${String(minutes).padStart(2, "0")} Min ${String(seconds).padStart(2, "0")} S`;      }

    return(
        <div className="counter-container">
            {status === "before" && (
                <div className="counter-wrapper">
                    <p className="counter-heading">
                        Event Countdown:
                    </p>
                    <p className="counter">
                        {formatTime(timeRemaining)}
                    </p>
                </div>
            )}
            {status === "during" && (
                <div className="counter-wrapper">
                    <p className="counter-heading">
                        Hacking Time Remaining:
                    </p>
                    <p className="counter">
                        {formatTime(timeRemaining)}
                    </p>
                </div>
            )}
            {status === "ended" && (
                <div className="counter-wrapper">
                <p className="counter-heading">
                    Thank you for participating! 
                    <br />
                    See Your Next Year!
                </p>
            </div>
            )}
        </div>
    )
}

export default Counter;