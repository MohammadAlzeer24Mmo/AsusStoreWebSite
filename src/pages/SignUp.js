import React from 'react';
import { Fragment, useEffect, useState } from "react"
import NavBar from "../HomeComponents/Navbar";
import "./SignStyling/Sign-up.css"

const SignUp = () => {
    const [enteredName,setEnteredName] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)
    const enteredNameIsValid =  enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const [signUpState,setSignUpState] = useState(false);

    const userNameChangeHandler = (event) =>{
        setEnteredName(event.target.value)
        }
        const userNameBlureHandler = () => {
            setEnteredNameTouched(true)
        }

    const [enteredFullName,setEnteredFullName] = useState('')
    const [enteredFullNameTouched, setEnteredFullNameTouched] = useState(false)
    const enteredFullNameIsValid =  enteredFullName.trim() !== '';
    const fullNameInputIsInvalid = !enteredFullNameIsValid && enteredFullNameTouched;

    const fullNameChangeHandler = (event) =>{
        setEnteredFullName(event.target.value)
        }
        const fullNameBlureHandler = () => {
            setEnteredFullNameTouched(true)
        }

    //Email
    const [enteredEmail,setEnteredEmail] = useState('')
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
    
    const enteredEmailIsNotEmpty=  enteredEmail.trim() !== '';
    const enteredEmailFormIsValid =   enteredEmail.includes("@");

    const enteredEmailIsValid = enteredEmailIsNotEmpty && enteredEmailFormIsValid

    const EmailInputIsInvalid = ( !enteredEmailIsNotEmpty || !enteredEmailFormIsValid ) && enteredEmailTouched;
    //End Email

    //password
    const [enteredPassword,setEnteredPassword] = useState('')
    const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false)
    
    // const enteredPasswordIsNotEmpty=  enteredPassword.length >= 4;
    // const enteredPasswordFormIsValid =   enteredPassword.includes("@");
    const enteredPasswordIsValid = enteredPassword.length >= 4;

    const passwordInputIsInvalid = !enteredPasswordIsValid && enteredPasswordTouched;
    const passwordChangeHandler = (event) =>{
        setEnteredPassword(event.target.value)
        }
        const passwordBlureHandler = () => {
            setEnteredPasswordTouched(true)
            setEnteredPasswordConfirmTouched(true)
        }

        
    
    //End password

     // password Confirm
     const [enteredPasswordConfirm,setEnteredPasswordConfirm] = useState('')
     const [enteredPasswordConfirmTouched, setEnteredPasswordConfirmTouched] = useState(false)
     

     let enteredPasswordConfirmIsValid = true ;

     if(enteredPasswordIsValid){
        enteredPasswordConfirmIsValid = enteredPasswordConfirm === enteredPassword;
     }else{
        enteredPasswordConfirmIsValid = true;
     }
 
     const passwordConfirmInputIsInvalid = !enteredPasswordConfirmIsValid  && enteredPasswordConfirmTouched;
 
     const passwordConfirmChangeHandler = (event) =>{
        setEnteredPasswordConfirm(event.target.value)
         }
         const passwordConfirmBlureHandler = () => {
             setEnteredPasswordConfirmTouched(true)
         }
 
         
     
     //End Confirm password
    let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid && enteredPasswordConfirmIsValid && enteredFullNameIsValid){
        formIsValid = true;
    }

     

        
        const EmailChangeHandler = (event) =>{
            setEnteredEmail(event.target.value)
            }
            const EmailBlureHandler = () => {
                setEnteredEmailTouched(true)
            }
            
        const formSubmissionHandler = (event) => {
            event.preventDefault();

            setEnteredNameTouched(true);
            setEnteredEmailTouched(true);
            setEnteredPasswordTouched(true);
            setEnteredPasswordConfirmTouched(true);
            setEnteredFullNameTouched(true);

            if(!enteredNameIsValid || !enteredEmailFormIsValid || !enteredPasswordIsValid || !enteredPasswordConfirmIsValid || !enteredFullNameIsValid){
                return
            }
            setEnteredName('');
            setEnteredNameTouched(false)

            setEnteredFullName('');
            setEnteredFullNameTouched(false)

            setEnteredEmail('');
            setEnteredEmailTouched(false)

            setEnteredPassword('')
            setEnteredPasswordTouched(false)

            setEnteredPasswordConfirm('')
            setEnteredPasswordConfirmTouched(false);

            setSignUpState(true);
        }
    // const [signingToggle,setSigningToggle]=useState('SignUp');
    // const [background,setBackground]=useState('somecontent');
    // const signUpHandler= () => {
    //     setSigningToggle("Account")
    // }

    const fullNameClasses = fullNameInputIsInvalid ? 'invalid' : '';
    const emailClasses = EmailInputIsInvalid ? 'invalid' : '';
    const userNameClasses = nameInputIsInvalid ? 'invalid' : '';
    const paswwordClasses = passwordInputIsInvalid ? 'invalid' : '';
    const paswwordConfirmClasses = passwordConfirmInputIsInvalid ? 'invalid' : '';

    return(
        <Fragment>
            {/* <NavBar account={signingToggle} background={background}/> */}
            <div className="sign-up-container">
            <form className="sign-up" onSubmit={formSubmissionHandler} >
                <div className="signUp-register">Register</div>
                <input className={fullNameClasses} onChange={fullNameChangeHandler} onBlur={fullNameBlureHandler}  type="text" placeholder="Full name"/>
                { fullNameInputIsInvalid  && <p> Your name must not be empty</p>}
                {/* <label>hi</label> */}
                <input className={emailClasses} onChange={EmailChangeHandler} onBlur={EmailBlureHandler} defaultValue={enteredEmail} value={enteredEmail} type="email" placeholder="E-mail"/>
                { EmailInputIsInvalid && !enteredEmailIsNotEmpty  && <p> Email must not be empty </p>}
                { EmailInputIsInvalid && enteredEmailIsNotEmpty && !enteredEmailFormIsValid && <p> Email must contain @ </p>}
                {/* <label>hi</label> */}
                <input className={userNameClasses} onChange={userNameChangeHandler} onBlur={userNameBlureHandler}  type="text" placeholder="Username"/>
                { nameInputIsInvalid  && <p> User name must not be empty</p>}
                {/* <label>hi</label> */}
                <input className={paswwordClasses} onChange={passwordChangeHandler} onBlur={passwordBlureHandler} type="password" placeholder="Password" />
                {passwordInputIsInvalid && <p>Password Must be between 4 and 8</p>}
                {/* <label>hi</label> */}
                <input disabled={!enteredPasswordIsValid} className={paswwordConfirmClasses} onChange={passwordConfirmChangeHandler} onBlur={passwordConfirmBlureHandler}  type="password" placeholder="Confirm Password"/>
                {passwordConfirmInputIsInvalid && <p>didn't match your password yet</p>}
                {formIsValid && <p className="ready">You Are Ready To Sign UP</p>}
                <button disabled = {!formIsValid}  >Sign Up</button>
                <div className="sign-up_agree">By clicking Sign Up you agree to our terms</div>
            </form>
            </div>
        </Fragment>
    )
}

export default SignUp;