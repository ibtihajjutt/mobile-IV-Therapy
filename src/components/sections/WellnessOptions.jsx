import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const wellnessProducts = [
  {
    id: 'nad-injection',
    title: "NAD+ Injection Therapy",
    description: "NAD+ injections are delivered to the home for self-administration.",
    image: "./assets/images/Peptide_General_DRIP_NEW.png", // Placeholder vial
    popular: false
  },
  {
    id: 'nad-nasal',
    title: "NAD+ Nasal Spray",
    description: "Our NAD+ nasal spray is shipped directly to your door for easy self-administration and fast results.",
    image: "./assets/images/Nasal-Spray_DRIP_NEW.png", // Placeholder spray
    popular: false
  },
  {
    id: 'peptide',
    title: "Peptide Therapy",
    description: "At-home self-administered peptide injections can offer a wide variety of anti-aging benefits.",
    image: "./assets/images/NAD_Injection_DRIP_NEW.png", // Placeholder vial
    popular: false
  },
  {
    id: 'testosterone',
    title: "Testosterone Therapy",
    description: "Self-administered testosterone injections can help improve workouts, boost energy, and enhance sex drive.",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400", // Placeholder bottle
    popular: false
  },
  {
    id: 'enclomiphene',
    title: "Enclomiphene",
    description: "We deliver convenient oral tablets that stimulate your body's own natural testosterone production and help you feel your best.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400", // Placeholder pill bottle
    popular: false
  },
  {
    id: 'weight-loss',
    title: "Medical Weight Loss",
    description: "Our medical weight loss injections can help patients effectively lose weight.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400", // Placeholder vial
    popular: true
  },
  {
    id: 'ketamine',
    title: "Ketamine Therapy",
    description: "We offer low-dose ketamine lozenges paired with holistic protocols to treat anxiety and depression and foster positive transformation and growth.",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=400", // Placeholder bottle
    popular: false
  }
];

const WellnessOptions = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-secondary-beige/30"> {/* Light beige background similar to screenshot */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-dark mb-6 leading-tight">
            The best in health - <span className="text-primary-dark border-b-4 border-primary-purple inline-block pb-1">Delivered</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We offer a comprehensive suite of wellness options—choose from in-home care with our skilled providers or advanced treatments delivered right to your doorstep.
          </p>
        </div>

        {/* Carousel Controls (Mobile/Tablet) */}
        <div className="flex justify-end gap-3 mb-4 md:hidden">
            <button onClick={scrollLeft} className="p-2 rounded-full bg-white shadow-md border hover:bg-gray-50"><ChevronLeft className="w-5 h-5 text-primary-dark"/></button>
            <button onClick={scrollRight} className="p-2 rounded-full bg-white shadow-md border hover:bg-gray-50"><ChevronRight className="w-5 h-5 text-primary-dark"/></button>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
            {/* Desktop Arrows */}
            <button 
                onClick={scrollLeft} 
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-primary-purple hover:scale-110 transition-transform focus:outline-none"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
                onClick={scrollRight} 
                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-primary-purple hover:scale-110 transition-transform focus:outline-none"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scroll Area */}
            <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {wellnessProducts.map((product) => (
                    <div 
                        key={product.id}
                        className="min-w-[280px] md:min-w-[300px] bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 snap-center flex flex-col overflow-hidden border border-gray-100"
                    >
                        {/* Image */}
                        <div className="h-56 p-6 flex items-center justify-center bg-white relative">
                            <img 
                                src={product.image} 
                                alt={product.title}
                                className="h-full object-contain mix-blend-multiply" 
                            />
                            {product.popular && (
                                <div className="absolute top-4 left-4 bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-grow flex flex-col text-center">
                            <h3 className="font-heading font-bold text-xl text-primary-dark mb-3 leading-tight">
                                {product.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                {product.description}
                            </p>
                            
                            <div className="mt-auto">
                                <Link to={`/book?treatment=${product.id}`} className="block w-full">
                                    <button className="w-full bg-primary-dark text-white text-xs font-bold py-3 rounded-full hover:bg-primary-purple transition-colors uppercase tracking-wider">
                                        Order Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default WellnessOptions;
