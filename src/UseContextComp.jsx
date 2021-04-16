import React, {useContext} from 'react';
import { ContextName,ContextSecondName } from './App';

// useContext() is used to eliminate the requirement of consumer as it leads to a triangle 
// if the data providers are more in numbers 
const UseContextComp = () => {
    const usecontexthook = useContext(ContextName); // useContext hook
    const usecontexthook2 = useContext(ContextSecondName);
    return(
        <>
            <h4>useContext({usecontexthook} {usecontexthook2}) Hook </h4>
        </>
    );
}

export default UseContextComp;