import React, {useState, useEffect} from 'react';
// useEffect() tells the program what to do after / before the render method is called. 
/* It does the work of all these 3 class lifecycle methods componentDidMount,
componentDidUpdate, componentWillUnmount 
*/
const UseEffectComp = () => {
    const [num, setNum] = useState(0);
    const [state, setState] = useState(num);

    // useEffect always accepts a function
    useEffect(() => { 
        // alert ("useEffect() called");
        document.title = `Awesome App clicked ${num} times`;
    }, [num]); 
    // [] empty array after the comma would let the function execute when the page is refreshed first time
    // [num] useEffect() will be called only num
    return(
        <>
            <center>
            <br/><hr />
            <button onClick={() => {setNum(num+1);}}> Call useEffect() {num}</button>
            <button onClick={() => {setState(state-1);}}> No useEffect() {state}</button>
            </center>
        </>
    );
}

export default UseEffectComp;