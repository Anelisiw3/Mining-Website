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
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length); // update image
        setFade(true); // fade in new image
      }, 500); // duration of fade out
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${currentSlide.image})`, zIndex: -1 }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
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
