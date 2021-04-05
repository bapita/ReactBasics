import React, {useState} from 'react';

const EventsExp = () => {
    let colors = '#9b59c3';
    const [bg, setBg] = useState(colors);
    const [name, newName] = useState('Click Me');
    
    const ChangeBg = () => {
        let newColor = '#34495e';
        setBg(newColor);
        newName('Yeyy 🍏');

    };

    const ChangeAgain = () => {
        let newColor = 'orange';
        setBg(newColor);
        newName('Ouch!! 😁');
    }

    const BackBg = () => {
        setBg(bg);
        newName('Click Me');
    }
    return(
        <>
            <div className="increament" style = {{ backgroundColor: bg }}>
                <button className="btnincr" onClick={ChangeBg} onDoubleClick={ChangeAgain} onMouseOver={BackBg}>{name}</button>
            </div>
        </>
    );
}

export default EventsExp;