import React from 'react';
import Button from '../ui/Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Essential",
    price: 99,
    features: [
      "1 IV Treatment per month (up to $199 value)",
      "10% off additional treatments",
      "Priority booking",
      "Rollover unused credits"
    ],
    recommended: false
  },
  {
    name: "Premium",
    price: 189,
    features: [
      "2 IV Treatments per month",
      "15% off additional treatments",
      "Free B12 shots with every visit",
      "Priority booking + Weekend access",
      "Share credits with family"
    ],
    recommended: true
  },
  {
    name: "Elite",
    price: 279,
    features: [
      "4 IV Treatments per month",
      "20% off additional treatments",
      "Free Add-ons (Glutathione, B12)",
      "VIP Concierge Booking Line",
      "Share credits with friends & family"
    ],
    recommended: false
  }
];

const Membership = () => {
  return (
    <section id="membership" className="section-padding bg-secondary-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
            Join the Club
          </h2>
          <p className="text-gray-600 text-lg">
            Commit to your wellness and save up to 30% with our monthly membership plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                relative bg-white rounded-2xl p-8 border transition-transform duration-300 hover:-translate-y-2
                ${plan.recommended ? 'border-primary-purple shadow-xl ring-2 ring-primary-purple/20 scale-105 md:scale-110 z-10' : 'border-gray-100 shadow-lg'}
              `}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-purple text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-primary-dark mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary-dark">${plan.price}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-purple shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>



              <Link to={`/book?plan=${plan.name}`} className="block w-full">
                  <Button 
                    variant={plan.recommended ? 'primary' : 'outline'} 
                    className="w-full"
                  >
                    Choose {plan.name}
                  </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
