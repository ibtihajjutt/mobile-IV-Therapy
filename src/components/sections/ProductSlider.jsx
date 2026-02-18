import React, { useRef } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: "All-Inclusive",
    price: 399,
    description: "Optimize wellness with our most comprehensive IV.",
    ingredients: ["B-Complex Vitamins", "Vitamin B12", "Vitamin C", "Lipostat (MIC)", "Magnesium", "Glutathione", "Biotin", "Zinc"],
    tag: "Rejuvenate & Restore",
    popular: true,
    image: "./assets/images/All-Inclusive_DRIP.png" 
  },
  {
    id: 2,
    title: "The Myers Cocktail",
    price: 199,
    description: "The gold standard for overall wellness and energy.",
    ingredients: ["Magnesium", "B-Complex Vitamins", "Vitamin B12", "Vitamin C", "Calcium"],
    tag: "Energy & Balance",
    popular: false,
    image: "./assets/images/Myers-Cocktail_DRIP.png"
  },
  {
    id: 3,
    title: "Immune Boost",
    price: 229,
    description: "Supercharge your immunity and fight off illness.",
    ingredients: ["Vitamin C (High Dose)", "Zinc", "B-Complex", "Glutathione"],
    tag: "Immunity Defense",
    popular: true,
    image: "./assets/images/Super-Immune-Boost_DRIP.png"
  },
  {
    id: 4,
    title: "Stomach Flu",
    price: 249,
    description: "Fast relief from nausea, vomiting, and dehydration.",
    ingredients: ["Zofran (Anti-Nausea)", "Pepcid", "B-Complex", "Electrolytes"],
    tag: "Relief & Recovery",
    popular: false,
    image: "./assets/images/Energy-Boost_DRIP.png"
  },
  {
    id: 5,
    title: "The Hangover",
    price: 199,
    description: "Reset your body after a long night out.",
    ingredients: ["Zofran", "Toradol", "B-Complex", "Electrolytes"],
    tag: "Detox & Relief",
    popular: true,
    image: "./assets/images/Hangover_DRIP.png"
  },
  {
    id: 6,
    title: "Beauty Glow",
    price: 259,
    description: "Radiate from within for healthier skin and hair.",
    ingredients: ["Biotin", "Glutathione", "Vitamin C", "B-Complex"],
    tag: "Beauty & Youth",
    popular: false,
    image: "./assets/images/Super-Immune-Boost_DRIP.png"
  },
  {
    id: 7,
    title: "Athletic Performance",
    price: 279,
    description: "Recover faster and improve your endurance.",
    ingredients: ["Amino Acids", "B12", "B-Complex", "Magnesium"],
    tag: "Performance & Recovery",
    popular: false,
    image: "./assets/images/Myers-Cocktail_DRIP.png"
  },
  {
    id: 8,
    title: "NAD+ Boost",
    price: 599,
    description: "Support brain function and anti-aging at a cellular level.",
    ingredients: ["NAD+ (500mg)", "Saline Solution"],
    tag: "Anti-Aging & Brain",
    popular: false,
    image: "./assets/images/Dehydration_DRIP.png"
  },
  {
    id: 9,
    title: "Prenatal Relief",
    price: 189,
    description: "Hydration and vitamin support for expecting mothers.",
    ingredients: ["Folic Acid", "B-Complex", "Electrolytes", "B6"],
    tag: "Pregnancy Safe",
    popular: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 10,
    title: "Migraine Relief",
    price: 219,
    description: "Fast-acting relief for severe headaches and migraines.",
    ingredients: ["Toradol", "Zofran", "Magnesium", "B-Complex"],
    tag: "Pain Relief",
    popular: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400"
  }
];

const ProductSlider = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4 leading-tight">
              Explore our range of in-home vitamin IV treatments designed for optimal health.
            </h2>
            <p className="text-gray-600 text-lg">
              Medical-grade formulations tailored to your specific wellness goals.
            </p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
             <button 
              onClick={scrollLeft}
              className="p-3 rounded-full border border-gray-200 hover:bg-primary-dark hover:text-white transition-all text-primary-dark"
              aria-label="Scroll left"
             >
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button 
              onClick={scrollRight}
              className="p-3 rounded-full border border-gray-200 hover:bg-primary-dark hover:text-white transition-all text-primary-dark"
              aria-label="Scroll right"
             >
               <ChevronRight className="w-6 h-6" />
             </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="min-w-[280px] md:min-w-[360px] bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 snap-center flex flex-col overflow-hidden group"
            >
              {/* Card Image Area */}
              <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="h-full object-contain mix-blend-multiply drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {product.popular && (
                  <div className="absolute top-6 left-6 bg-gray-200/80 backdrop-blur-sm text-primary-dark text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-primary-dark mb-1">
                  {product.title}
                </h3>
                
                <div className="text-lg font-bold text-primary-dark mb-4">
                  <span className="text-xs align-top top-1 relative">$</span>
                  {product.price}
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                   {/* Combined Ingredients String for cleaner look or list */}
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Contains:</p>
                   {product.ingredients.slice(0, 5).map((ing, i) => (
                     <div key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <Check className="w-4 h-4 text-primary-purple shrink-0 mt-0.5 rounded-full border border-primary-purple p-0.5" />
                        <span>{ing}</span>
                     </div>
                   ))}
                   {product.ingredients.length > 5 && (
                     <p className="text-xs text-primary-purple italic pl-6">+ {product.ingredients.length - 5} more</p>
                   )}
                </div>

                <div className="mt-auto">
                  {product.tag && (
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-5 h-5 rounded-full border border-primary-purple flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-purple" />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{product.tag}</span>
                    </div>
                  )}
                  

                  
                  <Link to={`/book?treatment=${product.id}`} className="block w-full">
                      <button 
                        className="w-full bg-primary-dark text-white font-heading font-bold py-4 rounded-xl hover:bg-primary-purple transition-colors duration-300 shadow-lg hover:shadow-primary-purple/25"
                      >
                        BOOK NOW
                      </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
