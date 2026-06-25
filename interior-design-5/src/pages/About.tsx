import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ShieldCheck, Compass, Heart, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/Button'

export const About: React.FC = () => {
  const pillarVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const teamMembers = [
    {
      name: 'Deepa Nair',
      role: 'Principal Designer & Founder',
      bio: 'Known for her infinite patience, fabric curation expertise, and commitment to realizing the exact layouts clients imagine.',
      quote: '“Bringing design intent to life is a journey of patience, alignment, and listening.”'
    },
    {
      name: 'The Tailoring Team',
      role: 'Master Craftsmen & Drapers',
      bio: 'Our dedicated workshop team specializing in precise custom pleating, finishing, and sofa upholstery tailoring.',
      quote: '“Their finishing and tailoring is very good. Highly recommend.”'
    },
    {
      name: 'Project Logistics',
      role: 'Reliability Engineers',
      bio: 'The project execution team that takes on complex installation challenges, managing timelines and site deliveries.',
      quote: '“Finally, an interior design studio that is reliable & up for the challenge.”'
    }
  ]

  return (
    <div className="pt-32 pb-24 bg-cream-light">
      {/* Editorial Narrative Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <span className="text-xxs tracking-widest uppercase text-gold font-semibold">
              The Story of Studio Shades
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-charcoal tracking-wide leading-tight">
              Designing Exactly What You Imagined
            </h1>
            <p className="text-charcoal-light/80 text-sm md:text-base leading-relaxed font-sans">
              Founded on the belief that a home should reflect its owner's individual story, Studio Shades curate fabrics, curtains, and interiors that transcend temporal trends. Led by Deepa, we approach design as a collaborative consultation.
            </p>
            <p className="text-charcoal-light/75 text-sm leading-relaxed font-sans">
              We understand that choosing custom materials can be a tough choice. That is why we invest deep guidance and patience into every client relationship—ensuring that every pleated drape, sofa material, and layouts align with your vision.
            </p>
            <div className="mt-4">
              <Link to="/portfolio">
                <Button variant="outline">
                  Explore Our Work <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full border border-taupe/20 overflow-hidden shadow-2xl relative">
              <img
                src="/assets/experience_center_interior.png"
                alt="Studio Shades Experience Center"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gold p-6 text-charcoal border border-cream hidden md:block max-w-xs shadow-lg">
              <span className="block font-serif text-xl italic mb-1">“Must visit store”</span>
              <span className="text-xxs tracking-widest uppercase font-semibold text-charcoal/70">
                Verified Client Quote
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Philosophy / Pillars */}
      <div className="bg-cream/45 py-24 border-y border-taupe-light/35 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xxs tracking-widest uppercase text-gold font-semibold block mb-2">
              Our Core Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal">
              Why Discerning Homeowners Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <motion.div
              variants={pillarVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-card bg-white/50 p-8 border border-taupe/15 flex flex-col gap-4"
            >
              <Heart className="w-8 h-8 text-gold" />
              <h3 className="text-xl font-serif text-charcoal">Patient Design Guidance</h3>
              <p className="text-charcoal-light/80 text-sm leading-relaxed font-sans">
                Selecting fabrics, curtain drapery weight, and layouts can be a tough choice. Deepa and the design team guide you through our catalogs with infinite patience.
              </p>
            </motion.div>

            <motion.div
              variants={pillarVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card bg-white/50 p-8 border border-taupe/15 flex flex-col gap-4"
            >
              <Compass className="w-8 h-8 text-gold" />
              <h3 className="text-xl font-serif text-charcoal">Uncompromising Reliability</h3>
              <p className="text-charcoal-light/80 text-sm leading-relaxed font-sans">
                We believe interior designers should be dependable partners. We handle timelines, tailoring quality control, and custom layouts with extreme attention to detail.
              </p>
            </motion.div>

            <motion.div
              variants={pillarVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card bg-white/50 p-8 border border-taupe/15 flex flex-col gap-4"
            >
              <ShieldCheck className="w-8 h-8 text-gold" />
              <h3 className="text-xl font-serif text-charcoal">Bespoke Tailoring Quality</h3>
              <p className="text-charcoal-light/80 text-sm leading-relaxed font-sans">
                Our tailoring finishing is pristine. We take pride in custom curtains and luxury sofa material installations that hang and sit with perfect structure.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Meet Deepa & Team Spotlight */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <span className="text-xxs tracking-widest uppercase text-gold font-semibold block mb-3">
          Behind the Crafts
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-16">
          Meet Deepa & Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card bg-white/60 p-8 flex flex-col justify-between border border-taupe/15"
            >
              <div>
                <span className="text-xxs tracking-widest uppercase text-gold font-semibold block mb-1">
                  {member.role}
                </span>
                <h3 className="text-2xl font-serif text-charcoal mb-4">{member.name}</h3>
                <p className="text-charcoal-light/80 text-sm leading-relaxed mb-6 font-sans">
                  {member.bio}
                </p>
              </div>
              <div className="border-t border-taupe/10 pt-6">
                <p className="font-serif text-sm italic text-charcoal/70 leading-relaxed">
                  {member.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Small Banner to Booking */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="glassmorphism p-8 md:p-12 border border-taupe/20 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-md">
            <h3 className="font-serif text-2xl text-charcoal mb-2">Want to plan your dream interior?</h3>
            <p className="text-charcoal-light/70 text-xs font-sans leading-relaxed">
              Consult with Deepa and our team today. We will guide you through catalog collections and bespoke fabric options.
            </p>
          </div>
          <Link to="/booking">
            <Button variant="solid" size="md">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
