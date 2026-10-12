'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group select-none overflow-hidden';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#4A2E1E] text-white hover:bg-[#342014] focus:ring-[#4A2E1E] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white text-[#1C1917] hover:bg-[#F5F5F4] border border-[#D6D3D1] focus:ring-[#7C4B27] hover:-translate-y-0.5',
    outline:
      'border border-[#4A2E1E] text-[#4A2E1E] hover:bg-[#4A2E1E] hover:text-white focus:ring-[#4A2E1E] hover:-translate-y-0.5',
    gold:
      'bg-[#A0741A] text-white hover:bg-[#8A6315] focus:ring-[#A0741A] shadow-md hover:shadow-lg hover:-translate-y-0.5',
    ghost:
      'text-[#4A2E1E] hover:bg-[#F5F5F4]/60 focus:ring-[#7C4B27]',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
}
