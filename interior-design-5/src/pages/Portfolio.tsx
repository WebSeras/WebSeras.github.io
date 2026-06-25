import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider'
import { Eye } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

type CategoryFilter = 'all' | 'living' | 'windows'

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all')

  const projects = [
    {
      id: 1,
      title: 'Warm Editorial Lounge',
      category: 'living',
      image: '/assets/hero_living_room.png',
      desc: 'Bespoke sectional upholstery paired with floor-to-ceiling sheer linen curtains in warm neutrals.',
      specs: 'Custom tailoring, velvet upholstery'
    },
    {
      id: 2,
      title: 'Premium Custom Drapery',
      category: 'windows',
      image: '/assets/luxury_fabric_texture.png',
      desc: 'Double-pleated drapery with premium linen threads, blocking harsh glare while filtering soft ambient light.',
      specs: 'Tailored pleats, brass rods'
    },
    {
      id: 3,
      title: 'The Experience Lounge',
      category: 'living',
      image: '/assets/experience_center_interior.png',
      desc: 'Curve-structured olive velvet sofa matched with dual-rail wave heading drapes.',
      specs: 'Curated catalogs, modern consulting'
    },
    {
      id: 4,
      title: 'Bespoke Window Dressings',
      category: 'windows',
      image: '/assets/luxury_fabric_texture.png',
      desc: 'Tailored sheer panels paired with blackout velvet panels for high-contrast luxury bedroom spaces.',
      specs: 'Pinch pleating, wave headers'
    },
    {
      id: 5,
      title: 'Luxury Velvet Sectional',
      category: 'living',
      image: '/assets/hero_living_room.png',
      desc: 'Re-upholstering a statement lounge sofa with heavy-duty luxury textured bouclé fabric.',
      specs: 'Sofa upholstery, custom foam'
    },
    {
      id: 6,
      title: 'Linen Master Drapery',
      category: 'windows',
      image: '/assets/experience_center_interior.png',
      desc: 'Floating curtains in neutral hues, matching minimalist living room aesthetics.',
      specs: 'Premium tailoring, hidden tracking'
    }
  ]

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true
    return p.category === filter
  })

  return (
    <div className="pt-32 pb-24 bg-cream-light">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
        <span className="text-xxs tracking-widest uppercase text-gold font-semibold block mb-3">
          Our Projects
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-charcoal tracking-wide mb-6">
          Tailored Transformations
        </h1>
        <p className="text-charcoal-light/75 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-sans">
          Browse through our curated residential installations. Slide between unstyled spaces and our custom tailoring and fabric configurations.
        </p>
      </div>

      {/* Interactive Before & After Slider Section */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-2">
            The Transformation Power of Shades
          </h2>
          <p className="text-xxs tracking-widest uppercase text-gold font-semibold">
            Drag the handle to view the design transition
          </p>
        </div>
        <BeforeAfterSlider
          beforeImage="/assets/hero_living_room.png"
          afterImage="/assets/hero_living_room.png"
          beforeLabel="Raw Space (Cold & Plain)"
          afterLabel="Styled Studio Shades (Warm & Luxury)"
          useFiltersForBefore={true}
          heightClass="h-[400px] md:h-[550px]"
        />
      </div>

      {/* Filter Menu */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex justify-center gap-6 md:gap-8 border-b border-taupe-light/30 pb-4">
        {[
          { id: 'all', label: 'All Collections' },
          { id: 'living', label: 'Living Spaces' },
          { id: 'windows', label: 'Window Dressings' }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id as CategoryFilter)}
            className={`font-sans text-xxs md:text-xs tracking-widest uppercase pb-2 transition-all duration-300 relative cursor-pointer ${
              filter === btn.id ? 'text-gold font-medium' : 'text-charcoal-light/60 hover:text-charcoal'
            }`}
          >
            {btn.label}
            {filter === btn.id && (
              <motion.span
                layoutId="portfolioFilterUnderline"
                className="absolute left-0 bottom-[-1px] w-full h-[1.5px] bg-gold"
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card bg-white/50 border border-taupe/15 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-2xl group transition-all duration-500"
              >
                {/* Image Wrap */}
                <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-taupe/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-cream-light/95 rounded-full text-charcoal shadow-lg">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-gold font-semibold block mb-1">
                      {project.category === 'living' ? 'Living Room & Furniture' : 'Curtains & Drapes'}
                    </span>
                    <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-charcoal-light/80 text-xs leading-relaxed mb-4 font-sans">
                      {project.desc}
                    </p>
                  </div>
                  <div className="border-t border-taupe/10 pt-4 flex justify-between items-center text-xxs tracking-wider uppercase text-taupe-dark">
                    <span>{project.specs}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Booking CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
          Want a Custom Layout for Your Home?
        </h2>
        <p className="text-charcoal-light/75 text-xs font-sans max-w-md mx-auto mb-8 leading-relaxed">
          Let’s start selecting fabrics and designs. Click below to begin our interactive briefing questionnaire.
        </p>
        <Link to="/booking">
          <Button variant="gold" size="lg">
            Consult on Your Space
          </Button>
        </Link>
      </div>
    </div>
  )
}
