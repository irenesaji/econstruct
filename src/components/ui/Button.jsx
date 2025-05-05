import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-[#CF5C36] text-white hover:bg-[#B34F2E] focus:ring-[#CF5C36]',
    secondary: 'bg-[#4A6D7C] text-white hover:bg-[#3B5864] focus:ring-[#4A6D7C]',
    outline: 'border border-[#CF5C36] text-[#CF5C36] bg-transparent hover:bg-[#CF5C36]/10 focus:ring-[#CF5C36]',
    ghost: 'text-[#CF5C36] bg-transparent hover:bg-[#CF5C36]/10 focus:ring-[#CF5C36]',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600',
  };

  const disabledClasses = disabled || isLoading ? 'opacity-60 cursor-not-allowed' : '';
  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabledClasses}
    ${widthClass}
    ${className}
  `;

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}

      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
