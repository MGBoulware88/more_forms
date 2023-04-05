import React, { useState } from 'react';

const MyForm = props => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = e => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password};
        console.log("Hello, " + newUser)
    };

    const validateFirstname = e => {
        if ( e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstnameError("First Name must be at least 2 characters!");
        }
        else { setFirstnameError("") };

        setFirstname(e.target.value);
    }

    const validateLastname = e => {
        if ( e.target.value.length < 2 && e.target.value.length > 0 ) {
            setLastnameError("Last Name must be at least 2 characters!");
        }
        else { setLastnameError("") };

        setLastname(e.target.value);
    }

    const validateEmail = e => {
        if ( e.target.value.length < 5  && e.target.value.length > 0) {
            setEmailError("Email must be at least 5 characters!");
        }
        else { setEmailError("") };

        setEmail(e.target.value);
    }

    const validatePassword = e => {
        if ( e.target.value.length < 8 && e.target.value.length > 0 ) {
            setPasswordError("Password must be at least 8 characters!");
        }
        else { setConfirmPasswordError("") };

        if (e.target.value !== confirmPassword) {
            setConfirmPasswordError("Passwords must match!");
        }
        else { setPasswordError("") };

        setPassword(e.target.value);

    }

    const validateConfirmPassword = e => {
        if ( e.target.value.length < 8  && e.target.value.length > 0 ) {
            setConfirmPasswordError("Confirm Password must be at least 8 characters!");
        }
        else { setConfirmPasswordError("") };

        if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match!")
        }
        else { setConfirmPasswordError("") };

        setConfirmPassword(e.target.value);
    }

    return(
        <div>
            <form onSubmit={createUser} className="form-center">
                <div className="form-fields">
                    <label>First Name</label>
                    <input type="text" onChange={validateFirstname} />
                    {
                        firstnameError &&
                        <p style={{color:'red'}}>{firstnameError}</p>
                    }
                </div>
                <div className="form-fields">
                    <label>Last Name</label>
                    <input type="text" onChange={validateLastname} />
                    {
                        lastnameError &&
                        <p style={{color:'red'}}>{lastnameError}</p>
                    }
                </div>
                <div className="form-fields">
                    <label>Email</label>
                    <input type="text" onChange={validateEmail} />
                    {
                        emailError &&
                        <p style={{color:'red'}}>{emailError}</p>
                    }
                </div>
                <div className="form-fields">
                    <label>Password</label>
                    <input type="password" onChange={validatePassword} />
                    {
                        passwordError &&
                        <p style={{color:'red'}}>{passwordError}</p>
                    }
                </div>
                <div className="form-fields">
                    <label>Confirm Password</label>
                    <input type="password" id="confirmPassword" onChange={validateConfirmPassword} />
                    {
                        confirmPasswordError &&
                        <p style={{color:'red'}}>{confirmPasswordError}</p>
                    }
                </div>
            </form>
        </div>
    );
};

export default MyForm;

