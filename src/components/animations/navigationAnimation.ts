import { useEffect } from 'react';
import gsap from 'gsap';

const hideNavOnScroll: React.FC = () => {
  useEffect(() => {
    const nav = document.querySelector('.main-nav') as HTMLElement | null;

    if (!nav) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        gsap.to(nav, {
          duration: 0.3,
          y: -nav.offsetHeight,
          ease: 'power2.inOut',
        });
      } else {
        gsap.to(nav, {
          duration: 0.3,
          y: 0,
          ease: 'power2.inOut',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default hideNavOnScroll;