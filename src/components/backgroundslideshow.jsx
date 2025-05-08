import React, { useEffect, useState } from 'react';
import slideshow2 from '../assets/slideshow2.jpg';
import slideshow5 from '../assets/slideshow5.png'; 

const slides = [
  {
    image: slideshow2,
    title: "Advanced Mining Equipment",
    description: "Check out our state-of-the-art mining tools and gear.",
    buttonText: "View Products",
  },
  {
    image: slideshow5,
    title: "Industry Insights",
    description: "Stay ahead with the latest mining trends and news.",
    buttonText: "Read More",
  },
];

const BackgroundSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${currentSlide.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        zIndex: -10,
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen text-white text-center bg-black bg-opacity-50 px-4">
        <h1 className="text-5xl font-bold">{currentSlide.title}</h1>
        <p className="mt-4 text-xl">{currentSlide.description}</p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold">
          {currentSlide.buttonText}
        </button>
      </div>
    </div>
  );
};

export default BackgroundSlideshow;
