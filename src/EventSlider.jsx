import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper/modules"; // Added EffectCreative
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative"; // Import creative effect style

import bgimage from "./assets/bg.png";
import slideImage1 from "./assets/slide1.png"; // Replace with actual image paths
import slideImage2 from "./assets/slide2.png"; // Replace with actual image paths

const EventSection = () => {
  const slides = [
    { id: 1, image: slideImage1, text: "E cell event 1 " },
    { id: 2, image: slideImage2, text: "E cell event 2 " },
    { id: 8, image: slideImage1, text: "E cell event 3 " },
    { id: 9, image: slideImage2, text: "E cell event 4 " },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900">
      {/* Heading */}
      <h1 className="mb-6 text-6xl font-bold tracking-wide text-white uppercase">
        Events
      </h1>

      {/* Container */}
      <div className="relative flex w-11/12 max-w-7xl bg-gray-800 shadow-lg rounded-xl overflow-hidden h-[500px]">
        {/* Left Side: Background Image Section */}
        <div className="flex-[1.5] relative">
          <div
            className="w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${bgimage})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-8 text-left">
              <h2 className="mb-4 text-4xl font-semibold text-white">EVENT</h2>
              <p className="text-sm leading-6 text-white">
                DJHDHGCNCVXNXXXXXXXXXXXXXXX<br />
                NNNNNNNNNNNNNNNNNNNHFGDXHFCH<br />
                GJ,BV,CGHMGXCBXMJHGFJHKFCJKGFJ<br />
                VBNBVXCVBNVCBNMBVCBNMBVCBNMBCV
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Carousel Section */}
        <div className="flex-[1] flex items-center justify-center ">
          <div className="w-full h-full bg-white border border-gray-300 rounded-md">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCreative]} // Added EffectCreative
              loop={true}
              autoplay={{ delay: 3000 }}
              navigation
              pagination={{ clickable: true }}
              effect="creative" // Set the effect to "creative"
              creativeEffect={{
                prev: {
                  translate: ["-5%", 0, -100],
                },
                next: {
                  translate: ["5%", 0, -100],
                },
                shadow: true, // Enable shadow effect
                limitProgress: 2, // Control the progress limit for animation
              }}
              className="h-full w-[500px] md:w-[525px] lg:w-[550px] xl:w-[600px]"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative h-full bg-center bg-cover rounded-xl">
                    <img
                      src={slide.image}
                      alt={slide.text}
                      className="object-cover w-full h-full rounded-lg"
                    />
                    <div className="absolute text-white bottom-4 left-4">
                      <h3 className="px-2 py-1 text-xl font-bold rounded bg-black/60">
                        {slide.text}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
