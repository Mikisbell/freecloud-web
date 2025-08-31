"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

interface LogoCarouselProps {
  logos: string[];
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  return (
    <div className="w-full overflow-hidden py-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 0, // Sin retardo entre slides para scroll continuo
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        speed={3000} // Velocidad ajustada para un scroll más suave y continuo
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 70,
          },
        }}
        className="mySwiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-full">
              <Image
                src={logo}
                alt={`Cliente ${index + 1}`}
                width={150} // Aumentar el ancho para que los logos sean más visibles
                height={75} // Aumentar la altura
                style={{ height: 'auto' }}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}