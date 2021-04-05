import React, {useState} from 'react';

const HooksExp = () => {
        // introducing Hooks using useState() 
        //const state = useState(); 
        // useState is an array that returns [undefined, f()] 
        // i.e. state object (current data) and updated function (updated data)
    
        //what is Array destructuring ?
        /* consider an array as, const name = ['Bapita', 'Shweata', 'Rajjo'];
           now make it as , [name1, name2, name3] = name;
           This means name1 variable is now = Bapita
        */
       const [count, setCount] = useState(0); // 0 is the initial data, assigned to count variable
       const IncNumber = () => {
        return setCount(count+1); // updates count's state
     }
    return(
        <>
        <div className="increament">
            <h1>{count}</h1>
            <button className="btnincr" onClick={IncNumber}>++Increament</button>
        </div>
            
        </>
    );
}

export default HooksExp;