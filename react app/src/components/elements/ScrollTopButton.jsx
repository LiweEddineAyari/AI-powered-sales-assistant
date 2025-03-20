import React, { useEffect, useState } from 'react';

const ScrollTopButton = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={` flex items-center justify-center w-10 h-10 rounded-[4px] shadow-solid-5 bg-purple hover:opacity-70 fixed bottom-8 right-8 z-999 
        ${
        scrollTop ? '' : 'hidden'
         }`}
      onClick={scrollToTop}
    >
      <svg
        className="fill-white w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
        />
      </svg>
    </button>
  );
};

export default ScrollTopButton;