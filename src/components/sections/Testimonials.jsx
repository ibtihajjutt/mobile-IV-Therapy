import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Los Angeles, CA",
    text: "Best hangover cure ever! The nurse was at my door in 45 minutes and I felt human again within the hour. Professional and painless.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael R.",
    location: "Miami, FL",
    text: "I get the Immune Boost monthly during flu season. Haven't been sick in over a year! Worth every penny for the convenience.",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica L.",
    location: "New York, NY",
    text: "The Beauty IV before my wedding was a game-changer. My skin was glowing! The nurse was so sweet and made me feel totally relaxed.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-purple/20 rounded-full blur-3xl -ml-20 -mt-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-purple/20 rounded-full blur-3xl -mr-20 -mb-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-blue-200 text-lg">
            See why we are the top-rated mobile IV service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-purple text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 fill-current" />
            </div>

            <div className="min-h-[200px] flex flex-col justify-center items-center text-center">
               <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary-gold fill-secondary-gold" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed">
                "{testimonials[activeIndex].text}"
              </p>
              
              <div>
                <h4 className="font-heading font-bold text-lg">{testimonials[activeIndex].name}</h4>
                <p className="text-blue-300 text-sm">{testimonials[activeIndex].location}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-8">
               <button 
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2 items-center">
                 {testimonials.map((_, idx) => (
                   <button 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${idx === activeIndex ? 'bg-primary-purple scale-125' : 'bg-gray-500'}`}
                   />
                 ))}
              </div>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
                 aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
