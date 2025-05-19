import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import BackgroundSlideshow from './components/backgroundslideshow';
import slideshow1 from './assets/slideshow1.png'; 

const App = () => {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    market: useRef(null),
    explore: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (key) => {
    refs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onScrollTo={scrollToSection} />

      <BackgroundSlideshow>
        {/* Home Section */}
        <section ref={refs.home} className="w-full h-[100vh] flex flex-col justify-center items-center text-center px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Oreways: Your Trusted Partner</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Gateway to global markets with top-grade Chrome Ore and Concentrate.
          </p>
          <button
            className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition"
            onClick={() => scrollToSection('about')}
          >
            Learn More
          </button>
        </section>

        {/* About Us Section */}
        <section
          ref={refs.about}
          className="min-h-screen bg-white text-black px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-center"
        >
          {/* Left: Text */}
          <div className="md:w-2/3 md:pr-12">
            <h2 className="text-lg font-bold text-yellow-600 mb-2">Who we are</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Pioneering Conscientious Mineral Procurement and International Collaboration
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">
              Oreways Mining South Africa (Pty) Ltd, led by Robert Sun and associates in Bedfordview, specializes in the careful procurement of chrome minerals. Our primary focus is on serving global clients, particularly in China. Through partnerships with various Chinese entities, we ensure a reliable supply of essential South African Chrome Concentrate needed for their Ferro Chrome refineries. Committed to strict compliance with legal regulations and the OECD Due Diligence Guidance, we prioritize responsible sourcing of chrome, especially from regions identified as high-risk areas. Positioned for expansion, Oreways Mining SA (Pty) Ltd aims to broaden its influence across diverse sectors and international borders, emphasizing conscientious mining practices for chrome.
            </p>
          </div>
          {/* Right: Image */}
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <img
              src={slideshow1}
              alt="Chrome Ore"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </section>

        {/* Mission, Vision, Core Values, Objectives */}
        <section className="bg-white text-black px-6 md:px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h3 className="text-3xl font-extrabold mb-2">
                <span className="text-yellow-600 mr-2">01.</span>Our Mission
              </h3>
              <p className="text-lg text-gray-700">
                Our mission is to diligently source and deliver superior-grade chrome minerals, precisely tailored to meet and exceed the specific requirements and expectations of our esteemed clients and purchasers.
              </p>
            </div>
            {/* Vision */}
            <div>
              <h3 className="text-3xl font-extrabold mb-2">
                <span className="text-yellow-600 mr-2">02.</span>Vision
              </h3>
              <p className="text-lg text-gray-700">
                Our vision is to create a world where the sourcing and utilization of chrome resources are conducted responsibly, prioritizing human rights, environmental protection, and the support of local communities. We aspire to be the leading procurer of ethically sourced chrome solutions in South Africa, dedicated to upholding the highest standards of quality, transparency, and accountability.
              </p>
            </div>
            {/* Core Values */}
            <div>
              <h3 className="text-3xl font-extrabold mb-2">
                <span className="text-yellow-600 mr-2">03.</span>Our Core Values
              </h3>
              <p className="text-lg text-gray-700">
                Our company is deeply committed to ethical procurement principles for chrome minerals. We prioritize respect by valuing the dignity, rights, and interests of everyone involved in the chrome supply chain. Taking responsibility, we actively address our impact on the environment, society, and economy. Ensuring top-tier services is our commitment to quality, achieved through nurturing ethical relationships with suppliers and consistently exceeding expectations within the chrome industry. Transparency is fundamental to us, maintaining open and timely communication with stakeholders at every stage.
              </p>
            </div>
            {/* Objectives */}
            <div>
              <h3 className="text-3xl font-extrabold mb-2">
                <span className="text-yellow-600 mr-2">04.</span>Our Objectives
              </h3>
              <p className="text-lg text-gray-700">
                Our key objective is to become the preferred purchase partner for South African suppliers of metals and minerals, embodying an unwavering commitment to fundamental environmental and social responsibility issues relevant to the region. We aim to build a distinguished reputation grounded in principles of fairness, respect, transparent communication, and trust in all our engagements. Ensuring prompt, equitable, and transparent payments to our suppliers is a priority. Additionally, we are dedicated to sourcing minerals and metals of the highest quality for our clients.
              </p>
            </div>
          </div>
        </section>
      </BackgroundSlideshow>

      {/* Partner Testimonials */}
      <section className="bg-gray-50 text-black px-6 md:px-20 py-20">
        <div className="text-center mb-10">
          <h4 className="text-lg font-bold uppercase text-yellow-600 tracking-widest mb-2">
            Partner Testimonials
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            SEE WHAT OUR PARTNERS<br />SAY ABOUT US
          </h2>
          <div className="mx-auto w-24 h-1 bg-yellow-600 rounded mb-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-start">
            <span className="text-5xl text-yellow-600 mb-4 leading-none">66</span>
            <p className="italic text-xl mb-6">
              Oreways has been a real lifeline for my business. They always need what I produce, and the prices are fair. They’ve even helped me get my chrome to international buyers. The team really cares about us small guys
            </p>
            <div>
              <span className="font-bold text-lg">Small-Scale Chrome Miner</span>
              <div className="text-gray-500">Rustenburg</div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="flex flex-col items-start">
            <span className="text-5xl text-yellow-600 mb-4 leading-none">66</span>
            <p className="italic text-xl mb-6">
              Oreways gets what we do. They’re reliable, offer fair deals, and make everything run smoothly. It’s a relief to have a partner that understands our needs so we can focus on
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-6 text-center text-black">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-left">
    <div>
      <h3 className="text-xl font-semibold mb-4">About Us</h3>
      <ul className="space-y-2 text-sm">
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Careers</li>
        <li>FAQs</li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li>Home</li>
        <li>Resources</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-4">Oreways</h3>
      <p className="text-yellow-700 font-bold">info@oreways.com</p>
      <p className="text-black font-semibold mt-1">+27 10 158 4305</p>
    </div>
  </div>

  <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
    <div className="flex items-center gap-4 mb-4 md:mb-0">
      <img
        src="/your-logo-path.png" // replace with actual logo path
        alt="Oreways Mining Logo"
        className="w-16 h-16 object-contain"
      />
      <p className="text-sm text-gray-600">
        Oreways Mining South Africa © 2025 all rights reserved, <br />
        managed by <span className="font-semibold">Charged Media</span>
      </p>
    </div>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <img
        src="/linkedin-icon-path.png" // replace with actual LinkedIn icon path
        alt="LinkedIn"
        className="w-6 h-6"
      />
    </a>
  </div>
</section>
      {/* Main content starts here */}
      <main className="pt-24">
        {/* Market Insights */}
        <section ref={refs.market} className="min-h-screen bg-gray-100 text-black px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-6">Market Insights</h2>
          {/* Add market data components here */}
        </section>

        {/* Explore More */}
        <section ref={refs.explore} className="min-h-screen bg-white text-black px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-6">Explore More</h2>
          {/* Content goes here */}
        </section>

        {/* Contact Section */}
        <section ref={refs.contact} className="min-h-screen bg-black text-white px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          {/* Form or contact info */}
        </section>
      </main>
    </>
  );
};

export default App;
