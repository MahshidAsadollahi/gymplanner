'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CurvedArrow from '@/components/CurvedArrow';
import Image from 'next/image';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('zoom-paragraph');
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSearchForm = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="px-6 lg:w-5/6 xl:w-4/6 py-10 mx-auto">
      <div className="space-y-12 text-md md:text-lg text-gray-500 pb-4 md:pb-8">
        <div className="text-center">
          <h2 className="sunday-s text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium text-gray-700">
            <span className="sduk-curved-underline-animation">MAHSHID<br /> Asadollahi</span>
          </h2>
          <p className="sunday-s text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-12 sm:mt-10">
            web <span className="highlight-text">developer</span>
          </p>
          <p className="sunday-s text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-10">
            I love designing and coding
          </p>
          <motion.p
            id="zoom-paragraph"
            className="sunday-s text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-12 mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Check out my other works{' '}
            <motion.span
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="inline-block"
            >
              {!isHovered ? (
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: '#fcd34d' }}
                >
                  here
                </motion.span>
              ) : (
                <motion.a
                  href="https://github.com/MahshidAsadollahi"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-black underline"
                >
                  click me
                </motion.a>
              )}
            </motion.span>{' '}
            or say hi to me
          </motion.p>
          <div className="flex justify-center">
            <CurvedArrow />
          </div>

          {/* email text display here */}
          <div className="search-form mt-12 flex justify-center">
            <form>
              <motion.div
                className={`relative ${isActive ? 'active' : ''}`}
                animate={isActive ? { width: '300px' } : { width: '64px' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {isActive && (
                  <motion.p
                    className={`absolute text-sm sm:text-base md:text-lg font-semibold text-gray-700 transition-all duration-500 ease-in-out ${
                      isActive ? 'left-20 sm:left-3 md:left-5' : 'left-0'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ top: '20px', marginLeft: '-50px' }}
                  >
                    sarah.cummingss96@gmail.com
                  </motion.p>
                )}
                <button
                  type="button"
                  onClick={toggleSearchForm}
                  className="absolute h-16 w-16 bg-white rounded-full flex items-center justify-center transition-transform duration-500 ease-in-out"
                  style={{ transform: isActive ? 'translateX(260px)' : 'translateX(0)' }}
                >
                  <Image
                    src="LetterDoodle.svg"
                    alt="send me msg"
                    width={100}
                    height={100}
                    className="max-w-full h-auto"
                  />
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
