import React from 'react';
import {ContextName, ContextSecondName} from './App';
/* React hooks provide a context call concept. 
    React context API allows us to easily access data at different levels of 
    the component tree, without passing props to evenry level

    step 1: createContext() --> to create the data
    step 2: Provider --> to provide the data
    step3: Consumer --> to consume the data. It only accepts function
*/

const ContextApi = () => {
    return(
        <>
            <ContextName.Consumer>
                {(contextname) => {
                    return (
                        <ContextSecondName.Consumer>
                            {(conceptname) => {
                                return (
                                    <>
                                        <h4>This is Example of {contextname} {conceptname}</h4>
                                    </>
                                );
                            }}
                        </ContextSecondName.Consumer>
                    );
                }}
            </ContextName.Consumer>
            
        </>
    );
}

export default ContextApi;
