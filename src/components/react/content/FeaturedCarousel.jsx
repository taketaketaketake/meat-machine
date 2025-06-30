import React, { useState, useEffect, useCallback, useContext } from 'react';

// --- UI Primitives (Stateless) ---
// Simple styled components for the card layout.
const Card = ({ children, className = '' }) => <div className={`relative w-full h-full rounded-xl overflow-hidden shadow-2xl ${className}`}>{children}</div>;
const CardContent = ({ children, className = '' }) => <div className={`flex h-full w-full items-center justify-center p-6 ${className}`}>{children}</div>;


// --- Carousel Context and Custom Hook ---
// The context will provide carousel state to all child components.
const CarouselContext = React.createContext(null);

// The hook is a clean way for components to access the context data.
const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
};


// --- Main Exported Component ---
// This component manages the state and renders the context provider.
export default function FeaturedCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const count = slides ? slides.length : 0;

  const scrollPrev = useCallback(() => {
    setCurrent(prev => (prev === 0 ? count - 1 : prev - 1));
  }, [count]);

  const scrollNext = useCallback(() => {
    setCurrent(prev => (prev === count - 1 ? 0 : prev + 1));
  }, [count]);
  
  const scrollTo = useCallback((index) => {
    if (index >= 0 && index < count) {
      setCurrent(index);
    }
  }, [count]);

  // Autoplay functionality
  useEffect(() => {
    const timer = setTimeout(() => scrollNext(), 7000); // Advance slide every 7 seconds
    return () => clearTimeout(timer); // Cleanup timer on component unmount or re-render
  }, [current, scrollNext]);

  // The value provided to all children via context
  const contextValue = { current, count, scrollPrev, scrollNext, scrollTo };

  if (!slides || slides.length === 0) {
    return null; // Don't render if there are no slides
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <section className="w-full max-w-4xl mx-auto mb-16" >
        <div className="relative group cursor-pointer">
          {/* This outer div clips the content that overflows */}
          <div className="overflow-hidden rounded-xl">
            {/* This inner div is the sliding track. The transform property is what creates the slide effect. */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <CarouselItem key={index} slide={slide} />
              ))}
            </div>
          </div>
          
          {/* All controls and indicators are in a separate component for cleanliness */}
          <ControlsAndIndicators slides={slides} />
        </div>
      </section>
    </CarouselContext.Provider>
  );
}


// --- Child Components that Consume the Context ---

// Renders a single slide
const CarouselItem = ({ slide }) => (
  <div className="min-w-full shrink-0 grow-0 basis-full">
    <div className="aspect-video">
      <Card className={`bg-gradient-to-br ${slide.gradient}`}>
        <CardContent>
          <div className="text-center text-gray-200">
            <div className="text-6xl mb-4">{slide.emoji}</div>
            <div className="text-2xl font-bold text-white">{slide.title}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

// Renders all the buttons, labels, and pagination dots
const ControlsAndIndicators = ({ slides }) => {
  const { current, count, scrollPrev, scrollNext, scrollTo } = useCarousel();

  return (
    <>
      {/* Play Icon Overlay on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-xl pointer-events-none">
        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center"><span className="text-black text-3xl ml-1">▶</span></div>
      </div>
      
      {/* Featured Label */}
      <div className="absolute bottom-4 left-4 bg-pink-500 text-white px-3 py-1 rounded font-bold z-10">
        {slides[current]?.label || 'FEATURED'}
      </div>

      {/* Prev/Next Buttons */}
      <button onClick={scrollPrev} className="absolute h-8 w-8 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 text-white hover:bg-white/50 disabled:opacity-50 left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button onClick={scrollNext} className="absolute h-8 w-8 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 text-white hover:bg-white/50 disabled:opacity-50 right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
      
      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${current === index ? 'w-6 bg-pink-500' : 'w-2 bg-gray-600 hover:bg-gray-500'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
