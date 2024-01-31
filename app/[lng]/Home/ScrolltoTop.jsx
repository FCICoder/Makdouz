'use client'
import React, { useEffect, useState } from 'react';

const ScrolltoTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top when the button is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {isScrolled && (
        <a
          aria-label="Scroll to the top of the page"
          href="#"
          id="scroll-top"
          className="scroll-top-right"
          style={{ opacity: '1', display: 'block' }}
          onClick={scrollToTop}
        >
          <i className="fa fa-angle-up" aria-hidden="true" role="img"></i>
        </a>
      )}
    </div>
  );
};

export default ScrolltoTop;
