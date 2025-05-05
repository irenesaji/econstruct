import React from 'react';
import { Star } from 'lucide-react';

const Rating = ({
  value,
  outOf = 5,
  showValue = true,
  size = 'md',
  className = '',
  reviewCount
}) => {
  const safeValue = Math.max(0, Math.min(value, outOf));
  const fullStars = Math.floor(safeValue);
  const partialFill = (safeValue - fullStars) * 100;

  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const containerSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`flex items-center ${containerSizeClasses[size]} ${className}`}>
      <div className="flex">
        {[...Array(outOf)].map((_, i) => {
          if (i < fullStars) {
            return (
              <Star
                key={i}
                className={`${sizeClasses[size]} fill-[#F9A826] text-[#F9A826]`}
              />
            );
          } else if (i === fullStars && partialFill > 0) {
            return (
              <div key={i} className="relative">
                <Star
                  className={`${sizeClasses[size]} text-gray-300`}
                />
                <div
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${partialFill}%` }}
                >
                  <Star
                    className={`${sizeClasses[size]} fill-[#F9A826] text-[#F9A826]`}
                  />
                </div>
              </div>
            );
          } else {
            return (
              <Star
                key={i}
                className={`${sizeClasses[size]} text-gray-300`}
              />
            );
          }
        })}
      </div>

      {showValue && (
        <span className="ml-2 font-medium text-gray-700">
          {safeValue.toFixed(1)}
        </span>
      )}

      {reviewCount !== undefined && (
        <span className="ml-1 text-gray-500">({reviewCount})</span>
      )}
    </div>
  );
};

export default Rating;
