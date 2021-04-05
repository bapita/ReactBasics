import React from 'react';
import './index.css';

const SlotM = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😄';
    let x= props.x;
    let y = props.y;
    let z = props.z;

    if((x===y) && (y===z)){
        return (
            <>
                <div className="slot_inner">
                    <h1>{x} {y} {z}</h1>
                    <h1>This is Matching</h1>
                    <hr />
                </div>
            </>
        );
    }else{
        return (
            <>
                <div className="slot_inner">
                    <h1>{x} {y} {z}</h1>
                    <h1>This is NOT Matching</h1>
                    <hr />
                </div>
            </>
        );
    }
}

const Slot = () => {
    return (
            <>
                <h1 className="heading_style"> 🎰 Welcome to
                <span style ={ { fontWeight: 'bold' } }> Slot Machine</span> 🎰</h1>
                <div className="slotmachine">
                    <SlotM x = '😄' y = '😈' z = '🐕'/>
                    <hr/>
                    <SlotM x = '🍎' y = '😈' z = '😼'/>
                    <hr/>
                    <SlotM x = '😄' y = '🍌' z = '🎅'/>
                    <hr/>
                    <SlotM x = '😄' y = '😄' z = '😄'/>
                </div>
            </>
    );
}

export default Slot;