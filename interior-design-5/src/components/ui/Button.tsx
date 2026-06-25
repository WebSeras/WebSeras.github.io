import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'> {
  variant?: 'solid' | 'gold' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyle =
    'font-sans uppercase tracking-widest text-xs font-medium cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none'

  const variants = {
    solid: 'bg-charcoal hover:bg-charcoal-light text-cream-light border border-charcoal hover:border-charcoal-light',
    gold: 'bg-gold hover:bg-gold-dark text-charcoal-dark border border-gold hover:border-gold-dark font-semibold',
    outline: 'bg-transparent border border-taupe text-charcoal hover:bg-charcoal hover:text-cream-light hover:border-charcoal',
    text: 'bg-transparent text-charcoal hover:text-gold border-b border-transparent hover:border-gold px-0 py-1'
  }

  const sizes = {
    sm: 'py-2 px-4 text-[10px]',
    md: 'py-3.5 px-7',
    lg: 'py-4 px-9 text-sm'
  }

  return (
    <motion.button
      whileHover={{ scale: variant === 'text' ? 1.0 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
