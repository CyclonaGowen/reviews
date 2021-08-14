import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(3);
  const{name, breed, image, text, owner} = people[index];
  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
        </span>
    </div>
    <h4 className="author">
    <p className="breed">
      {breed}
    </p>
      {name}
    </h4>
    
    <p className="info">
      {text}
    </p>
    <p className="info">
      <lable>Pet Parent: {owner}</lable>
    </p>
  </article>;
};

export default Review;
