import React from 'react';

const logos = [
  { name: "Vogue", scale: 1 },
  { name: "Forbes", scale: 1.1 },
  { name: "Men's Health", scale: 1 },
  { name: "Elle", scale: 0.9 },
  { name: "Allure", scale: 1 }
];

const TrustBar = () => {
  return (
    <section className="bg-white border-b border-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
          As Seen In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* 
             In a real project, these would be SVG images. 
             For this artifact, I'll use text representations styled to look like logos 
           */}
           {logos.map((brand, idx) => (
             <span 
              key={idx} 
              className="font-serif text-2xl md:text-3xl font-bold text-primary-dark"
              style={{ transform: `scale(${brand.scale})` }}
             >
               {brand.name}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
