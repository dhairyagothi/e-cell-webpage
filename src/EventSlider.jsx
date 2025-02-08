'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Define items array directly in the same file
const items = [
  { id: 1, url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, url: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, url: "https://plus.unsplash.com/premium_photo-1679547202671-f9dbbf466db4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

function FramerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  // Auto-slide every 3 seconds for infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Update scroll width
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="flex flex-col items-center w-full px-4 bg-black  ">
      {/* Active Image Display */}
      <motion.div
        layoutId="activeItem"
        className="rounded-md w-full max-w-3xl pb-4 gap-2 items-center cursor-auto"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.figure
            key={items[activeIndex].id}
            className="dark:bg-gray-900/60 bg-gray-100/60 border rounded-md p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  type: 'ease',
                  ease: 'easeInOut',
                  duration: 0.3,
                  delay: 0.2,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  type: 'ease',
                  ease: 'easeInOut',
                  duration: 0.2,
                },
              }}
            >
              <img
                src={items[activeIndex].url}
                alt="preview_img"
                className="w-full h-64 md:h-80 lg:h-96 object-cover mx-auto rounded-md"
              />
            </motion.div>
          </motion.figure>
        </AnimatePresence>
      </motion.div>

      {/* Thumbnail Carousel */}
      <motion.div className="w-full max-w-3xl mt-4 mx-auto overflow-hidden dark:bg-gray-900/60 bg-gray-100/60 border rounded-md">
        <motion.div
          ref={carousel}
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -width }}
          dragTransition={{ bounceDamping: 30 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="flex overflow-x-auto space-x-2 p-2"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative p-2 flex-shrink-0 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={item.url}
                alt="thumbnail"
                className={`w-24 h-14 md:w-28 md:h-16 object-cover rounded-md transition-transform ${
                  index === activeIndex ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FramerCarousel;
