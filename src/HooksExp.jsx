import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


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

     const DecNumber = () => {
        if(count>0){
           return setCount(count-1);
        }else{
            alert("Can not decrease further");
            return setCount(0);
        }
     }
    return(
        <>
        <div className="increament">
            <h1>{count}</h1>
            <AddIcon className="btnincr" onClick={IncNumber} />
            
            <RemoveIcon className="btnincr" onClick={DecNumber}/>
        </div>
            
        </>
    );
}

export default HooksExp;