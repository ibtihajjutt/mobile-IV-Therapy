import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Calendar, CheckCircle, MapPin, Clipboard } from 'lucide-react';

const steps = [
  { id: 1, title: 'Treatment', icon: Clipboard },
  { id: 2, title: 'Date & Time', icon: Calendar },
  { id: 3, title: 'Details', icon: MapPin },
];

const treatments = [
  { id: 'hangover', name: 'Hangover Relief', price: 199 },
  { id: 'immune', name: 'Immune Boost', price: 179 },
  { id: 'beauty', name: 'Beauty Glow', price: 249 },
  { id: 'nad', name: 'NAD+ Therapy', price: 599 },
  // Add other IDs to match ProductSlider/ServiceGrid if they differ, or map them
];

const BookingWizard = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: '',
    date: '',
    time: '',
    address: '',
    city: '',
    zip: '',
    name: '',
    email: '',
    phone: ''
  });

  // Auto-select treatment from URL query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const treatmentId = params.get('treatment'); // e.g., '1', 'hangover'
    
    // Simple mapping or direct assignment if IDs match. 
    // Since IDs in previous files were integers (1, 2, 3) and string slugs ('hangover'), we might need to reconcile them.
    // For this demo, let's assume we map or strictly use ID.
    // The previous treatments array here uses string IDs ('hangover').
    // The ServiceGrid used numeric IDs (1, 2, 3).
    // Let's support both or just set it.
    
    if (treatmentId) {
       // Logic to find matching treatment
       // If coming from ServiceGrid/ProductSlider, it might be an ID. 
       // We should update the static `treatments` array here to match or have a lookup.
       // For now, let's just set it and assume we'll fix the IDs later or it matches 'hangover'.
       // Actually ServiceGrid had IDs like 1, 2, 3.
       
       let matched = treatments.find(t => t.id == treatmentId);
       if (!matched) {
          // If numeric ID passed (1, 2, 3), map to these strings for demo
           const map = { 1: 'hangover', 2: 'immune', 3: 'beauty' };
           const mappedId = map[treatmentId];
           if (mappedId) matched = treatments.find(t => t.id === mappedId);
       }
       
       if (matched) {
         setFormData(prev => ({ ...prev, treatment: matched.id }));
       } else if (treatmentId) {
          // If we passed a name or other ID
          setFormData(prev => ({ ...prev, treatment: treatmentId }));
       }
    }
    
    const planName = params.get('plan');
    if (planName) {
        // Handle membership plan selection if needed (could be a separate state or just a note)
        setFormData(prev => ({ ...prev, treatment: `Membership: ${planName}` }));
    }

  }, [location]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto border-t-4 border-primary-purple">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-heading font-bold text-primary-dark mb-4">Booking Confirmed!</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Thank you, {formData.name}. A nurse has been scheduled for your <strong>{treatments.find(t => t.id === formData.treatment)?.name || 'Treatment'}</strong> on <strong>{formData.date}</strong>. You will receive a confirmation SMS shortly.
        </p>
        <Button onClick={() => {setIsSubmitted(false); setCurrentStep(1); setFormData({})}} variant="primary">
          Book Another
        </Button>
      </div>
    );
  }

  return (
    <section id="book-now" className="section-padding bg-secondary-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient-purple mb-4">
              Book Your Appointment
            </h2>
            <p className="text-gray-600">
              Select your treatment and preferred time. We'll handle the rest.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-primary-dark p-4 md:p-6">
              <div className="flex justify-between items-center max-w-2xl mx-auto">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center relative z-10 w-1/3">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors duration-300 border-2
                      ${currentStep >= step.id ? 'bg-primary-purple border-primary-purple text-white' : 'bg-transparent border-gray-600 text-gray-400'}
                    `}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className={`text-xs md:text-sm font-medium ${currentStep >= step.id ? 'text-white' : 'text-gray-400'}`}>
                      {step.title}
                    </span>
                  </div>
                ))}
                {/* Connector Line */}
                <div className="absolute top-[4.5rem] md:top-[5.5rem] left-0 w-full h-0.5 bg-gray-700 -z-0 hidden"></div> 
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-10">
              {/* Step 1: Treatment Selection */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in-up">
                   <h3 className="text-xl font-heading font-bold text-primary-dark mb-4">{currentStep === 1 ? 'Select Treatment' : (currentStep === 2 ? 'Select Availability' : 'Location & Details')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {treatments.map((t) => (
                      <div 
                        key={t.id}
                        onClick={() => setFormData({...formData, treatment: t.id})}
                        className={`
                          p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary-purple/50
                          ${formData.treatment === t.id ? 'border-primary-purple bg-primary-purple/5' : 'border-gray-100'}
                        `}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-heading font-bold text-primary-dark">{t.name}</span>
                          <span className="font-bold text-primary-purple">${t.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in-up">
                   <h3 className="text-xl font-heading font-bold text-primary-dark mb-4">Select Availability</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input 
                        type="date" 
                        label="Preferred Date" 
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                      <Input 
                        type="time" 
                        label="Preferred Time" 
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                      />
                   </div>
                </div>
              )}

              {/* Step 3: Location & Contact */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in-up">
                   <h3 className="text-xl font-heading font-bold text-primary-dark mb-4">Location & Details</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input 
                        label="Full Name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                      <Input 
                        label="Phone Number" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        required
                      />
                      <Input 
                        label="Street Address" 
                        name="address"
                        className="md:col-span-2"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Wellness Way"
                        required
                      />
                       <Input 
                        label="City" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                       <Input 
                        label="Zip Code" 
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                      />
                   </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
                <Button 
                  type="button" 
                  variant="ghost" 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={currentStep === 1 ? 'invisible' : ''}
                >
                  Back
                </Button>
                
                {currentStep < 3 ? (
                  <Button type="button" onClick={nextStep}>
                    Next Step
                  </Button>
                ) : (
                  <Button type="submit" variant="primary">
                    Confirm Booking
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWizard;
