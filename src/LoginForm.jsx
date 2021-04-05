import React, {useState} from 'react';

const LoginForm = () => {
    // passing object in Hook
    const [fullname, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });

    const InputEvent = (event) => {
        //setName(event.target.value);
        const value = event.target.value;
        const name = event.target.name;
        
        // defining a callback function inside SetfullName

        setFullName((preValue) => {
            console.log(preValue);
            return {
                ...preValue,
                [name]: value, // this is a new way to assign values in objects that was introduced in es6
                // that's why putting [ name ] : value changes the fname .  
            }
            //console.log(preValue);
            // if(name === "inputFname"){
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     }
            // }else if(name === "inputLname"){
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     }
            // }else if(name === "inputEmail"){
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.phone,
            //     }
            // }else if(name === "inputPhone"){
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value,
            //     }
            // }
        })

    }

    const ShowDetails = (e) => {
        e.preventDefault(); // to restrict the default behaviour of reloading after submitting form
        alert('Form Submitted');
    }
    return(
            <>
            <hr/>
            <form onSubmit={ShowDetails}>
                <div className="formsexp">
                    <h1 className="heading_form">Hello {fullname.fname} {fullname.lname} !</h1>
                    <p>{fullname.email}</p>
                    <p>{fullname.phone}</p>
                    <input type = "text" name = "fname" placeholder = "Enter your first name" onChange={InputEvent} value={fullname.fname} /><br/>
                    <input type = "text" name = "lname" placeholder = "Enter your last name" onChange={InputEvent} value={fullname.lname}/><br/>
                    <input type = "email" name = "email" placeholder = "Enter your valid emailID" onChange={InputEvent} value={fullname.email} /><br/>
                    <input type = "number" name = "phone" placeholder = "Enter your phone number" onChange={InputEvent} value={fullname.phone}/><br/>
                    <button type="submit">Click Me</button>
                </div>
            </form>
            </>
    );
}

export default LoginForm;