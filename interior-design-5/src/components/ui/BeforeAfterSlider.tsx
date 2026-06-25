import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpDown } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  heightClass?: string
  useFiltersForBefore?: boolean
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After Design',
  heightClass = 'h-[500px]',
  useFiltersForBefore = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPosition, setSliderPosition] = useState(50) // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isDragging) {
      handleMove(e.clientX)
    }
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      className={`relative w-full ${heightClass} overflow-hidden select-none cursor-ew-resize group border border-taupe/20 shadow-xl`}
    >
      {/* Before Image (Bottom Layer) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={beforeImage}
          alt="Before styling"
          className={`w-full h-full object-cover ${
            useFiltersForBefore ? 'grayscale brightness-75 contrast-90 sepia-[15%]' : ''
          }`}
          draggable={false}
        />
        <div className="absolute bottom-6 left-6 bg-charcoal/80 text-cream-light font-sans text-xs tracking-widest uppercase py-2 px-4 backdrop-blur-sm">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Top Layer, Clipped) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={afterImage}
          alt="After styling"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
          draggable={false}
        />
        <div className="absolute bottom-6 right-6 bg-gold/90 text-charcoal font-sans text-xs tracking-widest uppercase py-2 px-4 backdrop-blur-sm font-semibold">
          {afterLabel}
        </div>
      </div>

      {/* Slider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gold-light/80 z-20 cursor-ew-resize flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center shadow-lg border border-cream-light relative z-30"
        >
          <ArrowUpDown className="w-5 h-5 rotate-90" />
        </motion.div>
      </div>

      {/* Interactive Helper Text */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-charcoal-dark/60 text-cream-light/80 text-xxs tracking-widest uppercase py-1.5 px-4 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Drag or move to compare
      </div>
    </div>
  )
}
