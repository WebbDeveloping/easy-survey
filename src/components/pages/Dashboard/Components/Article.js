import React from 'react';
import './Article.css';
// const coolImg = require('./automobile-automotive-car-1386649.jpg');

export default function Article() {
  return (
    <article>
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
        This paragraph will include the photo of a random cat that the author of
        this tutorial has found online. You can replace this text with any
        random text. The sole purpose of this copy is to fill the space and make
        sure that the image to the left has enough text to low around it. I even
        decided to copy the previous paragraph. This paragraph will include the
      </p>
    </article>
  );
}
