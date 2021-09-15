import React, {useState, useEffect} from "react";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton"
import {auth, signInWithGoogle} from "../Firebase/utils";
import {emailSignInStart, GoogleSignInStart} from "../../redux/User/Actions";
import {connect} from "react-redux";

import "./SignIn.scss"

const SignIn = (props) => {
  const [userCredential, setUserCredential] = useState({email: '', password: ''});

  const {email, password} = userCredential;
  const {signInWithEmail, signInWithGoogle} = props;
  const handleSubmit = async event => {
    event.preventDefault();
    signInWithEmail(email, password);
    setUserCredential({
      email: '',
      password: ''
    })
  }

  const handleInputChange = event => {
    const {name, value} = event.target;

    setUserCredential({
      ...userCredential,
      [name]: value
    });
  }

  return (
    <div className='sign-in' onSubmit={handleSubmit}>
      <h2 className='title'>I already have an account</h2>
      <span className='title'>Sign in with your email and password</span>
      <form>
        <FormInput type='email' name='email' value={email} label='Email'
                   handleChange={handleInputChange} required/>
        <FormInput name='password' type='password' value={password} label='Password'
                   handleChange={handleInputChange} required/>
        <div className='buttons'><CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(GoogleSignInStart()),
  signInWithEmail: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);