// src/components/backgroundslideshow.jsx
import React, { useEffect, useState } from 'react';

const images = [
  require('../assets/slideshow2.jpg'),
  require('../assets/slideshow5.png'),
];

const BackgroundSlideshow = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Slideshow container */}
      <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
           style={{
             transform: `translateX(-${currentImageIndex * 100}%)`,
             width: `${images.length * 80}%`,
           }}>
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0 h-screen bg-cover bg-center"
               style={{ backgroundImage: `url(${img})` }}>
          </div>
        ))}
      </div>

      {/* Overlay for darkening and content */}
      <div className="relative z-10 bg-black bg-opacity-50 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default BackgroundSlideshow;
