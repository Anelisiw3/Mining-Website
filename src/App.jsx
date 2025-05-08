import React, { useEffect, useState } from 'react';
import slideshow2 from './assets/slideshow2.jpg';
import slideshow5 from './assets/slideshow5.png';

const images = [slideshow2, slideshow5]; 

const BackgroundSlideshow = ({ children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-10] transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      />
      <div className="bg-black bg-opacity-50 min-h-screen w-full">{children}</div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="min-h-screen flex flex-col justify-center items-center text-white text-center pt-20">
            <h1 className="text-6xl font-extrabold drop-shadow-lg">
              Welcome to the E-Mining Store
            </h1>
            <p className="mt-4 text-xl drop-shadow-md">
              Explore our products and services in the mining industry.
            </p>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
              onClick={() => setCurrentPage('about')}
            >
              Learn More
            </button>
          </div>
        );
      case 'about':
        return (
          <div className="min-h-screen bg-white text-black px-6 md:px-20 py-10">
            {/* Section 1: Who We Are */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-16">
              <div className="md:w-1/2 text-left">
                <h2 className="text-sm uppercase text-yellow-500 font-bold mb-2">Who we are</h2>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  Pioneering Conscientious Mineral Procurement and International Collaboration
                </h1>
                <p className="text-lg leading-relaxed text-gray-700">
                  Oreways Mining South Africa (Pty) Ltd, led by Robert Sun and associates in Bedfordview...
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img
                  src={slideshow1}
                  alt="Mining Industry"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Other sections... */}
          </div>
        );
      case 'market-insights':
        return (
          <div className="min-h-screen flex flex-col justify-center items-center text-white text-center pt-20">
            <h1 className="text-4xl font-bold">Market Insights</h1>
            <p className="mt-4 text-lg max-w-xl">
              Get the latest insights on mining technologies and industry trends.
            </p>
          </div>
        );
      case 'contact':
        return (
          <div className="min-h-screen flex flex-col justify-center items-center text-white text-center pt-20">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg max-w-xl">
              Reach out to us for more information or inquiries.
            </p>
          </div>
        );
      case 'login':
        return (
          <div className="min-h-screen flex flex-col justify-center items-center text-white text-center pt-20">
            <h1 className="text-4xl font-bold">Login</h1>
            <p className="mt-4 text-lg">Enter your credentials to access your account.</p>
          </div>
        );
      case 'admin':
        return (
          <div className="min-h-screen flex flex-col justify-center items-center text-white text-center pt-20">
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="mt-4 text-lg">Manage the website content and user data.</p>
          </div>
        );
      default:
        return (
          <div className="min-h-screen flex flex-col justify-center items-center text-white text-center pt-20">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          </div>
        );
    }
  };

  return (
    <BackgroundSlideshow>
      <nav className="flex justify-between items-center bg-transparent text-white px-8 py-4 fixed top-0 left-0 w-full z-10">
        <div className="flex-1 flex justify-center space-x-6 text-lg cursor-pointer">
          <span onClick={() => setCurrentPage('home')} className="hover:underline">Home</span>
          <span onClick={() => setCurrentPage('about')} className="hover:underline">About Us</span>
          <span onClick={() => setCurrentPage('market-insights')} className="hover:underline">Market Insights</span>
          <span onClick={() => setCurrentPage('contact')} className="hover:underline">Contact</span>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => setCurrentPage('login')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </button>
          <button
            onClick={() => setCurrentPage('admin')}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Admin
          </button>
        </div>
      </nav>
      <main className="pt-24">{renderPage()}</main>
    </BackgroundSlideshow>
  );
};

export default App;
