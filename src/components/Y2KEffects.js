// src/components/Y2KEffects.js
import React, { useEffect, useState } from 'react';

function Y2KEffects() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create 15 stars with random positions
    const newStars = [];
    for (let i = 0; i < 15; i++) {
      newStars.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        size: `${Math.random() * 10 + 5}px`
      });
    }
    setStars(newStars);

    // Change stars position every 5 seconds
    const interval = setInterval(() => {
      setStars(stars => stars.map(star => ({
        ...star,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="y2k-stars">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.animationDelay,
            width: star.size,
            height: star.size
          }}
        />
      ))}
    </div>
  );
}

export default Y2KEffects;
