import React from 'react';
import { MapPin } from 'lucide-react';

const cities = [
  "Los Angeles, CA", "San Francisco, CA", "San Diego, CA",
  "Miami, FL", "New York, NY", "Austin, TX",
  "Phoenix, AZ", "Las Vegas, NV", "Chicago, IL"
];

const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
            We Come to You
          </h2>
          <p className="text-gray-600 text-lg">
            Our nurses are available in major cities across the country. Check if we service your area.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <div key={index} className="flex items-center p-4 bg-secondary-gray rounded-lg hover:bg-primary-purple/10 transition-colors group cursor-default">
              <MapPin className="w-5 h-5 text-primary-purple mr-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-primary-dark">{city}</span>
            </div>
          ))}
          <div className="flex items-center p-4 border-2 border-dashed border-gray-300 rounded-lg justify-center text-gray-500">
             <span>More cities coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
