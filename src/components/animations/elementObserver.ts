import { useEffect } from "react";

export const useObserveImages = (): void => {
  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.classList.add('animate-images');
          observer.unobserve(img);
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(callback, options);
    const images = document.querySelectorAll('img');

    images.forEach((img: HTMLImageElement) => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export const useGlobalClickListener = (): void => {
  useEffect(() => {
    const handleClick = () => {
      const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.classList.add('animate-images');
            observer.unobserve(img);
          }
        });
      };

      const options: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver(callback, options);
      const images = document.querySelectorAll('img');

      images.forEach((img: HTMLImageElement) => {
        observer.observe(img);
      });

      return () => {
        observer.disconnect();
      };
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};