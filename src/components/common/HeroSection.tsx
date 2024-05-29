import React, { useEffect, useState } from 'react';
import Typical from 'react-typical';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [showBrushedAI, setShowBrushedAI] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBrushedAI(true);
    }, 4000); // Adjust timing to match the typing effect duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="py-section relative w-full h-screen bg-cover bg-center bg-no-repeat md:bg-[url('/hero-image.png')] bg-[url('/hero-image-mobile.png')]"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-left h-full">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1 
            className="font-bold mb-4 text-darkGray text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Personalized <br /> Nutrition Coaching<br />
            <Typical 
              steps={[' ', 1000, 'Powered ', 1000,'Powered by ', 2000, 'Powered by AI', 1000]}
              wrapper="span"
              className="inline-block"
            />
            {showBrushedAI && (
              <span className="inline-block text-white brushing-effect">
                AI
              </span>
            )}
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray mb-8">
            Achieve your health goals with tailored plans designed just for you.
          </p>
          <button className="py-2 px-4 bg-ctaBlue text-white font-bold rounded-md hover:bg-ctaBlueHover">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
