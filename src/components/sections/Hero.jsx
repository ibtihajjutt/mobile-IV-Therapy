import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import HeroSequence from './HeroSequence';

const Hero = () => {
  return (
    <section className="relative h-[450vh] bg-secondary-gray">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side (Desktop) / Top Side (Mobile) - Text Content */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center relative z-20 bg-secondary-gray/90 lg:bg-secondary-gray/50 backdrop-blur-sm lg:backdrop-blur-none border-b lg:border-b-0 lg:border-r border-white/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
            <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-12 xl:mr-24 text-center lg:text-left pt-2 md:pt-6 lg:pt-0">
              
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg mb-3 md:mb-6 animate-fade-in-up border border-white/50 mx-auto lg:mx-0">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-secondary-gold fill-secondary-gold" />
                <span className="text-xs md:text-sm font-bold text-primary-dark tracking-wide">Rated #1 Mobile IV Service</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-dark leading-tight mb-3 md:mb-6 drop-shadow-sm">
                Medical-Grade Wellness, <br/>
                <span className="text-gradient-purple">Delivered to You</span>
              </h1>
              
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-primary-dark/80 mb-4 md:mb-8 font-medium max-w-md mx-auto lg:mx-0 leading-snug md:leading-relaxed">
                Licensed nurses arrive at your door in as little as 45 minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4 md:mb-8">
                <Link to="/book" className="w-full sm:w-auto">
                  <Button variant="primary" className="flex items-center justify-center gap-2 w-full px-6 py-2.5 md:px-8 md:py-4 text-sm md:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                    Book Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>
                <Button 
                    variant="secondary" 
                    onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto px-6 py-2.5 md:px-8 md:py-4 text-sm md:text-lg bg-white/80 backdrop-blur-md border-white/50 hover:bg-white"
                >
                  View Menu
                </Button>
              </div>

              <div className="hidden sm:flex flex-wrap gap-4 justify-center lg:justify-start text-xs md:text-sm font-bold text-primary-dark/70">
                <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 text-primary-purple" />
                  <span>Licensed Nurses</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                   <CheckCircle className="w-4 h-4 text-primary-purple" />
                   <span>HSA/FSA Accepted</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Desktop) / Bottom Side (Mobile) - Animation Area */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden bg-white">
           <HeroSequence className="m-[35px] lg:m-0 lg:mr-[480px]" />
           {/* Gradient Overlay for smooth transition */}
           <div className="absolute inset-0 bg-gradient-to-t from-secondary-gray via-transparent to-transparent lg:bg-gradient-to-l lg:to-secondary-gray lg:via-transparent lg:from-transparent pointer-events-none z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
