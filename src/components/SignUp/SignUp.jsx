import React, {Component} from "react";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import './SignUp.scss'
import {auth, createUserDocument} from "../Firebase/utils";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: ''
    }
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {email, password, confirmPassword, displayName} = this.state;

    if (password !== confirmPassword) {
      alert('passwords do not match!')
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserDocument(user, {displayName});

      this.setState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: ''
      })
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const {email, password, confirmPassword, displayName} = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span className='title'>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type='text' name='displayName' value={displayName} handleChange={this.handleInputChange}
                     label='Display Name' required/>
          <FormInput type='email' name='email' value={email} handleChange={this.handleInputChange} label='Email'
                     required/>
          <FormInput type='password' name='password' value={password} handleChange={this.handleInputChange}
                     label='Password' required/>
          <FormInput type='password' name='confirmPassword' value={confirmPassword}
                     handleChange={this.handleInputChange}
                     label='Confirm Password' required/>
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;