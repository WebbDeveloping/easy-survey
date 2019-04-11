import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className='main-register-container'>
      <div class='login-box'>
        <h1>Login</h1>

        <input type='text' name='username' placeholder='Username' />
        <input type='text' name='email' placeholder='E-mail' />
        <input type='password' name='password' placeholder='Password' />
        <input type='submit' name='signup_submit' value='Sign me up' />
      </div>
      <article className='login-article'>
        <h1>Breaking News: Cat does not give a damn</h1>
        {/* <p>
        <strong>Author:</strong> Bill Clinton, <strong>Published:</strong>{' '}
        Yesterday
      </p> */}
        <div className='row'>
          <div className='login-image-wrapper'>
            <img
              alt='cat'
              src='http://peoplecancode-public.s3.amazonaws.com/cat.jpg'
            />
          </div>
          <div className='article-login-stuff'>
            <div className='login-paragraph'>
              This paragraph will include the photo of a random cat that the
              author of this tutorial has found online.
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
