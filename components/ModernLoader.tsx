import React from 'react';

interface ModernLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ModernLoader: React.FC<ModernLoaderProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-green-200 border-t-green-600`}></div>
    </div>
  );
};

export default ModernLoader; 