'use client';

import React, { useCallback } from 'react';
import './Carousel.css';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const imagePaths = Array.from({ length: 48 }, (_, i) => `/assets/nail-${i + 1}.jpg`);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {imagePaths.map((path, index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={path}
                alt={`Nail image ${index + 1}`}
                fill
                className="embla__slide__img"
              />
            </div>
          ))}
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
