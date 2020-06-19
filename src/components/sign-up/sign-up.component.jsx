import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/users.actions'

import './sign-up.styles.scss';

export const SignUp = ({signUpStart}) => {
  const [userInfo, setUserInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = userInfo;

  const handleChange = event => {
    const { name, value } = event.target;

    setUserInfo({
      ...userInfo,
      [name]: value
    })
  } 

  const handleSubmit = async event => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    
    signUpStart(displayName, email, password);
  }

  return (
    <div className='sign-up'>
      <h1 className="title">I do not have an account</h1>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange} 
          label='Display Name'
          required={1}
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange} 
          label='Email'
          required={1}
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange} 
          label='Password'
          required={1}
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange} 
          label='Confirm Password'
          required={1}
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password) => dispatch(signUpStart({
    displayName,
    email,
    password,
  })),
})

export default connect(null, mapDispatchToProps)(SignUp);