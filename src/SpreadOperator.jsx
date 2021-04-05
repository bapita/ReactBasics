import React from 'react';

const SpreadOperator = () => {

     // spread operator is used to concatenate one array to another (...) three dots
    const arr1 = [10, 20 ,30 ,40, 50]
    const arr2 = [...arr1,60,70,80,80,100];
    const arr3 = [...arr2,...arr1];
    const [first,...remaining] = arr3; // array destructuring 
    console.log(first);
    console.log(remaining); // remaining will be an array without the first element of arr3

    // Other scenario with Objects. It also concatenates objects
    const object1 = {
        fname: 'Bapita',
        lname: 'Roy',
    }

    const object2 = {
        id: 14,
        ...object1,
        age: 30,
        height: '5.4',
        gender: 'Female',
    }

    console.log(object2);

    return(
        <>

        </>
    );
}

export default SpreadOperator;