import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Sofa, ShieldCheck, Sparkles, BookOpen, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/Button'

export const Services: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const services = [
    {
      icon: Sofa,
      title: 'Custom Tailoring & Finishing',
      category: 'Curtains & Drapes',
      description:
        'Our tailoring workshop delivers flawless custom pleating, linings, and precise hem lengths. We specialize in custom curtains, draperies, and sheer panels, backed by clean finishing and professional hanging.',
      details: ['Bespoke lining selections', 'Motorized tracking setups', 'Pinch pleats, wave headers, and grommets', 'Professional measurement & installation'],
      highlight: '“Their finishing and tailoring is very good.”'
    },
    {
      icon: Sparkles,
      title: 'Luxury Sofa & Upholstery Material',
      category: 'Furniture Dressing',
      description:
        'Dress your sofas and accent furniture in premium materials. Select from our beautiful collection of luxury velvets, durable textured linens, structured bouclés, and performance blends built for longevity.',
      details: ['High double-rub count fabrics', 'Premium leather & suede options', 'Custom cushioning foam replacement', 'Stain-resistant finishes'],
      highlight: '“A really tough choice amongst all the amazing designs.”'
    },
    {
      icon: BookOpen,
      title: 'Luxury Fabric Curation',
      category: 'Catalog Library',
      description:
        'Access a wide variety of global catalogs. Deepa and our fabric experts will guide you through matching textures, colors, and drape weights to find the perfect backdrop for your interior.',
      details: ['Access to 50+ designer catalogs', 'Private viewing rooms', 'Custom material samples to take home', 'Detailed fiber guidance'],
      highlight: '“Wide variety of catalogues to choose from.”'
    },
    {
      icon: ShieldCheck,
      title: 'Full-Home Interior Consulting',
      category: 'Interior Design',
      description:
        'Bring your dream home to life. From initial spatial layouts to final material installations, our team guides you with extreme patience, complete reliability, and detail-oriented craftsmanship.',
      details: ['Moodboards & spatial layouts', 'Lighting & color coordinate matching', 'Reliable timeline and project management', 'Personalized designer supervision'],
      highlight: '“Reliable & up for the challenge.”'
    }
  ]

  return (
    <div className="pt-32 pb-24 bg-cream-light">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xxs tracking-widest uppercase text-gold font-semibold block mb-3"
        >
          Specialties & Services
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif text-charcoal tracking-wide mb-6 max-w-3xl mx-auto"
        >
          Crafting Flawless Interiors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-charcoal-light/75 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
        >
          Whether tailoring luxury curtains, sourcing materials, or redesigning an entire home, we combine rich materials with professional, patient guidance.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="glass-card bg-white/60 p-8 md:p-10 flex flex-col justify-between border border-taupe/15 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 group"
              >
                <div>
                  {/* Category and Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xxs tracking-widest uppercase text-gold font-semibold">
                      {service.category}
                    </span>
                    <div className="p-3 bg-cream text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-500 rounded-none">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-serif text-charcoal mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-light/80 text-sm leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-8 text-left">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xxs tracking-wider uppercase text-charcoal-light/70">
                        <span className="w-1.5 h-1.5 bg-gold shrink-0 rounded-full" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial snippet / highlight */}
                <div className="mt-auto border-t border-taupe/10 pt-6">
                  <span className="block font-serif text-sm italic text-charcoal/60 mb-2">
                    {service.highlight}
                  </span>
                  <span className="text-xxs tracking-widest uppercase text-taupe-dark">
                    Verified Client Verdict
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* CTA section */}
      <div className="bg-charcoal text-cream-light py-20 border-t border-charcoal-light">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <span className="text-xxs tracking-widest uppercase text-gold font-semibold">
            Ready to redesign?
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-wide leading-tight">
            Let’s Customize Your Spaces
          </h2>
          <p className="text-taupe-light/70 text-sm md:text-base max-w-lg leading-relaxed">
            Need curtains, sofa materials, or consulting on custom catalogs? Book a private experience session and let our designers help you create the space you imagined.
          </p>
          <Link to="/booking">
            <Button variant="gold" size="lg">
              Book a Showroom Visit <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
