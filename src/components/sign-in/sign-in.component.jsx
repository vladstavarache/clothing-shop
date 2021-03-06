import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/users.actions';

import './sign-in.styles.scss';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    
    emailSignInStart(email, password);
  }

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({
      ...userCredentials,
      [ name ]: value
    });
  }

    return(
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput 
            label='email'
            type='email' 
            name="email" 
            value={email}
            handleChange={handleChange}
            required={1}
          />
          <FormInput
            label='password'
            type='password' 
            name="password" 
            value={password} 
            handleChange={handleChange}
            required={1}
          />
          <div className='buttons'>
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
          </div>
        </form>
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);