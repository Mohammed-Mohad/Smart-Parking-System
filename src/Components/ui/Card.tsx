// Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children ,className}:CardProps) => {
  return (
    <div className={` ${className} border border-gray-50 shadow rounded-lg p-4 flex items-center justify-center mt-5 ` } >
      {children}
    </div>
  );
}

export default Card;