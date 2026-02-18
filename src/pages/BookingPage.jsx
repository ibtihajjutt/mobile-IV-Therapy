import React, { useEffect } from 'react';
import BookingWizard from '../components/sections/BookingWizard';
import { ShieldCheck, Clock, Star } from 'lucide-react';

const BookingPage = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="pt-20 bg-secondary-gray min-h-screen">
       <div className="bg-primary-dark text-white py-12">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                    Book Your Appointment
                </h1>
                <p className="text-blue-200 max-w-2xl mx-auto text-lg">
                    Secure your spot with our licensed nurses. We'll be at your door in as little as 45 minutes.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary-purple" />
                        <span>HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary-purple" />
                        <span>Same-Day Availability</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary-purple" />
                        <span>5-Star Rated Service</span>
                    </div>
                </div>
            </div>
       </div>

       <div className="-mt-8 pb-20">
            <BookingWizard />
       </div>
    </div>
  );
};

export default BookingPage;
