import React from 'react';

const Card = ({
  children,
  className = '',
  onClick,
  hoverEffect = false
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-md overflow-hidden';
  const hoverClasses = hoverEffect ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const CardImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`h-48 overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

const CardContent = ({ children, className = '' }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

const CardTitle = ({ children, className = '' }) => {
  return <h3 className={`text-lg font-semibold text-gray-900 mb-1 ${className}`}>{children}</h3>;
};

const CardDescription = ({ children, className = '' }) => {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
};

const CardFooter = ({ children, className = '' }) => {
  return <div className={`px-4 py-3 bg-gray-50 ${className}`}>{children}</div>;
};

// Attach subcomponents
Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Footer = CardFooter;

export default Card;
