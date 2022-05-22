import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [current, setCurrent] = useState(0);
  const {name, job, image, text} = people[current];
  const nextPerson = () => {
    current === people.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  }
  const prevPerson = () => {
    current === 0 ? setCurrent(people.length - 1) : setCurrent(current - 1);
  }
  const randPerson = () => {
    let random = Math.floor(Math.random() * people.length);
    if(random === current) {
      random = current === people.length - 1 ? 0 : current + 1;
    }
    setCurrent(random);
  }
  return (
    <article className = 'review'>
      <div className = 'img-container'>
        <img src = {image} alt = {name} className="person-img"/>
        <span className = 'quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <div className = 'text-container'>
        <h3 className = 'author'>{name}</h3>
        <p className = 'job'>{job}</p>
        <p className = 'info'>{text}</p>
        <div className = 'button-container'>
          <button onClick = {prevPerson} className = 'prev-btn'>
            <FaChevronLeft />
          </button>
          <button onClick = {nextPerson} className = 'next-btn'>
            <FaChevronRight />
          </button>
          </div>
          <button onClick = {randPerson} className = 'random-btn'>Suprise Me</button>
      </div>

    </article>
    )
};

export default Review;
