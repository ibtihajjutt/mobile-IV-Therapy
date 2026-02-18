import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-primary-dark mb-1.5">
          {label}
        </label>
      )}
      <input
        className={cn(
          "flex w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          error && "border-secondary-red focus:ring-secondary-red",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-secondary-red animate-pulse">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
