import React, { useState } from 'react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { Check, Clock, Zap, Shield, Sparkles, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const treatments = [
  {
    id: 1,
    title: "Hangover Relief",
    price: 199,
    description: "Bounce back fast after a night out. Rehydrates and restores essential nutrients.",
    fullDescription: "Our Hangover Relief IV is a powerful blend of fluids, electrolytes, vitamins, and medications designed to quickly detoxify your body and cure your hangover symptoms. Includes anti-nausea and anti-inflammatory medication.",
    ingredients: ["B-Complex", "Vitamin C", "Anti-nausea Meds", "Electrolytes", "Magnesium"],
    duration: "45-60 min",
    icon: Zap,
    popular: true
  },
  {
    id: 2,
    title: "Immune Boost",
    price: 179,
    description: "Strengthen your defenses naturally. Perfect for flu season or travel prep.",
    fullDescription: "Supercharge your immune system with high-dose Vitamin C and Zinc. This drip is designed to help prevent illness and speed up recovery from colds and flu.",
    ingredients: ["Vitamin C (High Dose)", "Zinc", "B-Complex", "Glutathione"],
    duration: "30-45 min",
    icon: Shield,
    popular: false
  },
  {
    id: 3,
    title: "Beauty Glow",
    price: 249,
    description: "Radiant skin from the inside out. Brightens complexion and strengthens hair/nails.",
    fullDescription: "Get the Hollywood glow with our beauty drip. Formulated with Biotin and Glutathione to improve skin elasticity, hydration, and overall radiance.",
    ingredients: ["Biotin", "Vitamin C", "Glutathione", "B12"],
    duration: "45-60 min",
    icon: Sparkles,
    popular: false
  }
];

const ServiceGrid = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const openModal = (treatment) => setSelectedTreatment(treatment);
  const closeModal = () => setSelectedTreatment(null);

  return (
    <section id="treatments" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient-purple mb-4">
            Most Popular Treatments
          </h2>
          <p className="text-gray-600 text-lg">
            Choose from our specialized IV drips designed to help you recover, energize, and glow.
            All administered by licensed nurses in the comfort of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <div 
              key={treatment.id} 
              className={`
                relative bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col
                ${treatment.popular ? 'border-primary-purple shadow-lg' : 'border-gray-100 shadow-sm'}
              `}
            >
              {treatment.popular && (
                <div className="absolute top-0 right-0 bg-secondary-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg z-10">
                  POPULAR
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <div className="w-12 h-12 bg-primary-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-purple group-hover:text-white transition-colors text-primary-purple">
                  <treatment.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                  {treatment.title}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-primary-purple">${treatment.price}</span>
                  <span className="text-gray-500 text-sm">/ session</span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {treatment.description}
                </p>

                <div className="space-y-3 mb-8">
                  {treatment.ingredients.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-primary-purple mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>



               <div className="p-8 pt-0 mt-auto space-y-3">
                <Link to={`/book?treatment=${treatment.id}`} className="block w-full">
                    <Button 
                      variant={treatment.popular ? 'primary' : 'outline'} 
                      className="w-full justify-center"
                    >
                      Book This Drip
                    </Button>
                </Link>
                <button 
                  onClick={() => openModal(treatment)}
                  className="w-full text-center text-sm font-medium text-gray-500 hover:text-primary-dark flex items-center justify-center gap-1"
                >
                  <Info className="w-4 h-4" /> More Details
                </button>
               </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="#" className="inline-flex items-center text-primary-dark font-semibold hover:text-primary-purple transition-colors border-b-2 border-transparent hover:border-primary-purple pb-1">
              View All 12+ Treatments
           </a>
        </div>
      </div>

      {/* Treatment Detail Modal */}
      <Modal
        isOpen={!!selectedTreatment}
        onClose={closeModal}
        title={selectedTreatment?.title}
        footer={
          <Link to={`/book?treatment=${selectedTreatment?.id}`} className="block w-full" onClick={closeModal}>
              <Button 
                className="w-full justify-center" 
              >
                Book Now - ${selectedTreatment?.price}
              </Button>
          </Link>
        }
      >
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            {selectedTreatment?.fullDescription}
          </p>
          
          <div className="flex items-center gap-2 text-sm font-medium text-primary-dark bg-secondary-gray p-3 rounded-lg">
             <Clock className="w-4 h-4 text-primary-purple" />
             <span>Treatment Duration: {selectedTreatment?.duration}</span>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-dark mb-3">Ingredients Benefits</h4>
            <div className="grid grid-cols-1 gap-2">
               {selectedTreatment?.ingredients.map((ing, i) => (
                 <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-purple"></div>
                    {ing}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ServiceGrid;
