'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'wood' | 'gold' | 'ivory' | 'outline' | 'green';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'wood',
  size = 'md',
  className = '',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 font-medium rounded-full';

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  const variantStyles = {
    wood: 'bg-[#4A2E1E] text-white shadow-sm',
    gold: 'bg-[#A0741A]/10 text-[#7A5812] border border-[#A0741A]/25',
    ivory: 'bg-white/90 text-[#4A2E1E] border border-[#E7E5E4] shadow-sm backdrop-blur-sm',
    outline: 'border border-[#7C4B27]/40 text-[#4A2E1E] bg-transparent',
    green: 'bg-[#4A5B47]/15 text-[#354332] border border-[#4A5B47]/30',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
