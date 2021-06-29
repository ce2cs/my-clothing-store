import React, {Component} from "react";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton"
import {signInWithGoogle} from "../Firebase/utils";

import "./SignIn.scss"

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
  }

  handleInputChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='sign-in' onSubmit={this.handleSubmit}>
        <h2 className='title'>I already have an account</h2>
        <span className='title'>Sign in with your email and password</span>
        <form>
          <FormInput type='email' name='email' value={this.state.email}
                     onChange={this.handleInputChange} required/>
          <FormInput name='password' type='password' value={this.state.password}
                     onChange={this.handleInputChange} required/>
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;