import React, { useEffect, useState } from 'react';

const Timer = ({handleNextQuiz,questionCount,startQuize}) => {
    const [timeer, setTimeer] = useState(60)
    const [time, setTime] = useState(Date.now());
    

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (timeer > 0) {
            setTimeer(timeer - 1)
        }else if(timeer <= 0){
            if (questionCount <= 10) {
                handleNextQuiz()
            }
        }
    }, [time]);
    
    useEffect(()=>{
        setTimeer(60)
    },[questionCount])
    

    return (
        <div>
            <h1 data-testid="time-counter">Time: {timeer}</h1>
        </div>
    );
};

export default Timer;

