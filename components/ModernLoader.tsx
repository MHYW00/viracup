'use client'

import React from 'react'

interface ModernLoaderProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const ModernLoader: React.FC<ModernLoaderProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-8 h-8 border-3'
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className={`
          ${sizeClasses[size]} 
          border-green-800/20 
          border-t-green-800 
          rounded-full 
          animate-spin
        `}
        style={{
          animation: 'spin 1s linear infinite'
        }}
      />
    </div>
  )
}

export default ModernLoader 