import React from 'react';
import './Register.css';
import Article from '../../pages/Dashboard/Components/Article';

export default function Register() {
  return (
    <div className='main-register-container'>
      <h2>Register</h2>
      <hr className='green-line' />
      <div className='style-row'>
        <div class='register-box'>
          <h1>Sign up</h1>

          <input type='text' name='username' placeholder='Username' />
          <input type='text' name='email' placeholder='E-mail' />
          <input type='password' name='password' placeholder='Password' />
          <input
            type='password'
            name='password2'
            placeholder='Retype password'
          />

          <input type='submit' name='signup_submit' value='Sign me up' />
        </div>
        <aside className='aside-article'>
          <article className='register-article'>
            <h1>Breaking News: Cat does not give a damn</h1>
            {/* <p>
        <strong>Author:</strong> Bill Clinton, <strong>Published:</strong>{' '}
        Yesterday
      </p> */}

            <div className='image-wrapper'>
              <img src='http://peoplecancode-public.s3.amazonaws.com/cat.jpg' />
              {/* <span>Image source: The WEB</span> */}
            </div>

            <p>
              This paragraph will include the photo of a random cat that the
              author of this tutorial has found online. You can replace this
              text with any random text. The sole purpose of this copy is to
              fill the space and make sure that the image to the left has enough
              text to low around it. I even decided to copy the previous
              paragraph. This paragraph will include the
            </p>
          </article>
        </aside>
      </div>
    </div>
  );
}
