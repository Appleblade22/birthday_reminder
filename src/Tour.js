import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
  const [readMore , setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src = {image} alt = {name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <div className='tour-price'>
          <h4>{price}</h4>
          </div>
        </div>
        <p>{ readMore ? info : info.substring(0, 200) + '...'}</p>
        <button onClick={() => setReadMore(!readMore)}>{ readMore ? 'Read Less' : 'Read More'}</button>
        <button className='delete-btn' onClick = {() => removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  )      
};

export default Tour;
