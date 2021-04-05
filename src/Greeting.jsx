import React from 'react';
import './index.css';

function Greeting() {

    // getting current hours in time
    const dateCurrent = new Date();
    const hourTime = dateCurrent.getHours();
    const cssStyle = {};
    let greeting = "";
    if (hourTime >= 1 && hourTime < 12) {
        greeting = 'Good Morning';
        cssStyle.color = "green";
    } else if (hourTime >= 12 && hourTime < 19) {
        greeting = 'Good Afternoon';
        cssStyle.color = "orange";
    } else {
        greeting = 'Good Night';
        cssStyle.color = "red";
    }
    return (
        <>
            <div className='greetingBody'>
                <h1 className='greeting'>Hello,<span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    );
}

export default Greeting;