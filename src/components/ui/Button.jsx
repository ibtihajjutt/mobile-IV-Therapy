import React from 'react';
import { cn } from '@/lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}) => {
  const baseStyles = "font-heading font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-purple text-white hover:bg-brand-hover shadow-lg hover:shadow-xl",
    secondary: "bg-primary-dark text-white hover:bg-opacity-90 shadow-md",
    outline: "bg-white text-primary-dark border-2 border-primary-dark hover:bg-primary-dark hover:text-white",
    ghost: "bg-transparent text-primary-dark hover:bg-secondary-gray",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
