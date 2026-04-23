'use client';

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const imagePaths = [
  '/Logo.webp',
  '/assets/nail-1.jpg',
  '/assets/nail-2.jpg',
  '/assets/nail-3.jpg',
  '/assets/nail-4.jpg',
  '/assets/nail-5.jpg',
  '/assets/nail-6.jpg',
];

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 0 }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {imagePaths.map((imagePath, index) => (
          <div 
            className={`embla__slide embla__slide__fade ${index === activeIndex ? 'is-active' : ''}`}
            key={imagePath}
            style={{ borderRadius: '30px', overflow: 'hidden' }}
          >
            <Image
              src={imagePath}
              alt={`Nail design ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{objectFit: "contain"}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
