import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ArrowRight, ArrowLeft, ShieldCheck, MapPin, Sparkles } from 'lucide-react'
import { Button } from '../components/ui/Button'

export const Home: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0)

  const reviews = [
    {
      text: "Beautiful collection!! I needed curtains and sofa material.... Was a really tough choice amongst all the amazing designs... Must visit store.. Thank u Deepa and team!",
      author: "Aditi S.",
      location: "Verified Homeowner"
    },
    {
      text: "I loved the vibe of the experience center, attention to detail and customer service! Finally, an interior design studio that is reliable & up for the challenge. Thank you so much for making the interiors exactly what I imagined… grateful.",
      author: "Rahul K.",
      location: "Villa Owner, Experience District"
    },
    {
      text: "Studio shades did excellent work for me at my new home. They have a wide variety of catalogues to choose from. Their finishing and tailoring is very good. Highly recommend them ! Thank you Deepa for all the guidance and patience you had with us. You have a great team!!",
      author: "Meera & Vikram Nair",
      location: "New Homeowners"
    }
  ]

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length)
  }

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  // Auto-scroll carousel every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextReview()
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-cream-light overflow-hidden">
      {/* 1. Cinematic Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/assets/hero_living_room.png"
            alt="Luxury Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-dark/35" />
        </div>

        {/* Content Box (Luxury glassmorphism-dark) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-left flex justify-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="glassmorphism-dark max-w-2xl p-8 md:p-14 text-cream-light border border-white/10 shadow-2xl"
          >
            <span className="text-xxs tracking-widest uppercase text-gold font-semibold block mb-4">
              Bespoke Window Dressings & Upholstery
            </span>
            <h1 className="text-4xl md:text-6xl font-serif tracking-wide leading-tight mb-6">
              Making Interiors Exactly What You Imagined
            </h1>
            <p className="text-taupe-light/85 font-sans text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              A reliable interior design studio specializing in tailored curtains, sofa materials, and expert guidance. Bringing texture, structure, and detail to your new home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button variant="gold" size="md">
                  Book an Experience Visit
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="md" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
                  View Collections
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-light/65 z-10">
          <span className="text-xxs tracking-widest uppercase font-medium">Scroll to Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1.5px] h-6 bg-gold"
          />
        </div>
      </div>

      {/* 2. Editorial Fabric Textures Grid */}
      <div className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="text-left flex flex-col gap-6"
          >
            <span className="text-xxs tracking-widest uppercase text-gold font-semibold">
              Master Tailoring & Upholstery
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-charcoal tracking-wide leading-tight">
              Flawless Finishing, Beautiful Textures
            </h2>
            <p className="text-charcoal-light/80 text-sm md:text-base leading-relaxed font-sans">
              Curtains and sofa materials are the tactile foundation of any luxury living space. We specialize in custom-tailored drapery and expert sofa re-upholstery that fit your home's structural dimensions perfectly.
            </p>
            <p className="text-charcoal-light/75 text-sm leading-relaxed font-sans">
              With a focus on attention to detail, we source from exclusive mills globally. Our finishings, sewing, and installations ensure that heavy drapes and sheer panels fall with perfect wave pleating.
            </p>
            <div className="mt-4">
              <Link to="/services">
                <Button variant="outline">
                  Our Specialties <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-1 gap-6"
          >
            <div className="relative aspect-[4/3] border border-taupe/15 overflow-hidden shadow-xl">
              <img
                src="/assets/luxury_fabric_texture.png"
                alt="Luxury Fabric Curation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-charcoal/80 text-cream-light text-xxs tracking-widest uppercase py-2.5 px-5 backdrop-blur-sm border border-white/10">
                Premium Linen & Velvet Catalogs
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. Teaser for the physical "Experience Center" */}
      <div className="bg-cream/45 py-24 border-y border-taupe-light/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Col */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative"
            >
              <div className="aspect-[16/10] border border-taupe/20 overflow-hidden shadow-2xl relative">
                <img
                  src="/assets/experience_center_interior.png"
                  alt="Experience Center Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Col */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 text-left flex flex-col gap-6"
            >
              <span className="text-xxs tracking-widest uppercase text-gold font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Visit Studio Shades
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-charcoal tracking-wide leading-tight">
                The Experience Center Vibe
              </h2>
              <p className="text-charcoal-light/80 text-sm leading-relaxed font-sans">
                Finally, a design destination dedicated to tactile visualization. Visit our physical Experience Center showroom to browse our massive library of catalogs, feel material drapes in natural light, and coordinate with Deepa and our team.
              </p>
              <div className="flex flex-col gap-4 font-sans text-xs text-charcoal-light/80">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <span>Private consult spaces for design briefings</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span>Wide variety of fabric catalogs to choose from</span>
                </div>
              </div>
              <div className="mt-4">
                <Link to="/booking">
                  <Button variant="solid">Book a Showroom Visit</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. Dynamic Testimonial Carousel */}
      <div className="py-24 max-w-5xl mx-auto px-6 text-center">
        <span className="text-xxs tracking-widest uppercase text-gold font-semibold block mb-4">
          Client Verbatim Reviews
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-16">
          Words from Our Clients
        </h2>

        <div className="relative glass-card bg-white/60 border border-taupe/15 px-8 py-12 md:p-16 shadow-lg min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReviewIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6 items-center"
            >
              {/* Star rating */}
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-lg md:text-2xl text-charcoal leading-relaxed max-w-3xl italic">
                “{reviews[activeReviewIndex].text}”
              </p>

              {/* Author Info */}
              <div className="mt-2">
                <h4 className="font-sans text-xs tracking-widest uppercase text-charcoal font-semibold">
                  {reviews[activeReviewIndex].author}
                </h4>
                <span className="text-xxs text-taupe-dark uppercase tracking-wider block mt-1">
                  {reviews[activeReviewIndex].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={handlePrevReview}
              className="p-3 border border-taupe/35 text-charcoal hover:border-gold hover:text-gold transition-colors duration-300 rounded-none cursor-pointer"
              aria-label="Previous Review"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextReview}
              className="p-3 border border-taupe/35 text-charcoal hover:border-gold hover:text-gold transition-colors duration-300 rounded-none cursor-pointer"
              aria-label="Next Review"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
