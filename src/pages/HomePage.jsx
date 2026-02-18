import React from 'react';
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import ProductSlider from '../components/sections/ProductSlider';
import WellnessOptions from '../components/sections/WellnessOptions';
import ServiceGrid from '../components/sections/ServiceGrid';
import HowItWorks from '../components/sections/HowItWorks';
import Membership from '../components/sections/Membership';
import Locations from '../components/sections/Locations';
import FAQ from '../components/sections/FAQ';
import Testimonials from '../components/sections/Testimonials';

const HomePage = () => {
  return (
    <>
        <Hero />
        <TrustBar />
        <ProductSlider />
        <WellnessOptions />
        <ServiceGrid />
        <HowItWorks />
        <Membership />
        <Locations />
        <FAQ />
        <Testimonials />
    </>
  );
};

export default HomePage;
