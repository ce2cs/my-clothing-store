import React, {Component, useEffect, useState} from "react";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import './SignUp.scss'
import {auth, createUserDocument} from "../Firebase/utils";
import {signUpStart} from "../../redux/User/Actions";
import {connect} from "react-redux";

const SignUp = (props) => {
  const [userCredential, setUserCredential] = useState(
    {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: ''
    });
  const {email, password, confirmPassword, displayName} = userCredential;

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUserCredential({...userCredential, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {signUp} = props;

    if (password !== confirmPassword) {
      alert('passwords do not match!')
      return;
    }
    signUp(email, password, displayName);
    setUserCredential({
      email: '',
      password: '',
      confirmPassword: '',
      displayName: ''
    })
  }


  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span className='title'>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput type='text' name='displayName' value={displayName} handleChange={handleInputChange}
                   label='Display Name' required/>
        <FormInput type='email' name='email' value={email} handleChange={handleInputChange} label='Email'
                   required/>
        <FormInput type='password' name='password' value={password} handleChange={handleInputChange}
                   label='Password' required/>
        <FormInput type='password' name='confirmPassword' value={confirmPassword}
                   handleChange={handleInputChange}
                   label='Confirm Password' required/>
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp);