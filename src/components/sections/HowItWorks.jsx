import React from 'react';
import { Calendar, MapPin, Activity } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Book Online",
    description: "Select your treatment and preferred time. Our easy booking system takes less than 2 minutes.",
    icon: Calendar
  },
  {
    num: "02",
    title: "We Come to You",
    description: "A licensed registered nurse arrives at your home, hotel, or office with all necessary equipment.",
    icon: MapPin
  },
  {
    num: "03",
    title: "Relax & Recover",
    description: "Sit back and relax while the treatment is administered. Feel the effects in as little as 30 minutes.",
    icon: Activity
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary-gray relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
            Wellness on Your Schedule
          </h2>
          <p className="text-gray-600 text-lg">
            No waiting rooms, no traffic. Just premium care delivered to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           {/* Connecting line for desktop */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-300 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-10 h-10 text-primary-purple" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-dark text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">
                  {step.num}
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
