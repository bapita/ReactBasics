import React, {useState} from 'react';

const HooksChallenge = () => {
    let t = new Date().toLocaleTimeString();
    const [ctime,newTime] = useState(t);
    const [ctimer,newTimer] = useState(t);

    const UpdatedTime = () => {
        t = new Date().toLocaleTimeString();
        return newTime(t);
    }
    // for the timer
    const UpdatedTimer = () => {
        let timer = new Date().toLocaleTimeString();
        return newTimer(timer);
    }
    // using setInterval 
    setInterval(UpdatedTimer,1000);

    return(
        <>
            <div className="increament">
            <h1>{ctime}</h1><hr/><h1>{ctimer}</h1>
            <button className="btnincr" onClick={UpdatedTime}>Update Time</button>
        </div>
        </>
    );
}

export default HooksChallenge;