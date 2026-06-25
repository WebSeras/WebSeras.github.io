import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Sofa, Compass, CheckCircle, ArrowRight } from 'lucide-react'

type SpaceType = 'living' | 'bedroom' | 'dining' | 'full' | 'office'
type ServiceType = 'curtains' | 'upholstery' | 'fabrics' | 'consulting'
type VibeType = 'minimalist' | 'luxury' | 'classic' | 'organic'

interface FormData {
  spaces: SpaceType[]
  services: ServiceType[]
  vibe: VibeType | ''
  name: string
  email: string
  phone: string
  timeframe: string
}

export const Booking: React.FC = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    spaces: [],
    services: [],
    vibe: '',
    name: '',
    email: '',
    phone: '',
    timeframe: '1-3-months'
  })
  const [submitted, setSubmitted] = useState(false)

  const toggleSpace = (space: SpaceType) => {
    setFormData((prev) => ({
      ...prev,
      spaces: prev.spaces.includes(space)
        ? prev.spaces.filter((s) => s !== space)
        : [...prev.spaces, space]
    }))
  }

  const toggleService = (service: ServiceType) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleVibe = (vibe: VibeType) => {
    setFormData((prev) => ({ ...prev, vibe }))
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    if (step < 4) setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send data to a backend
    console.log('Lead Captured:', formData)
    setSubmitted(true)
  }

  const spaceOptions = [
    { id: 'living', label: 'Living Room', icon: Sofa },
    { id: 'bedroom', label: 'Bedroom Space', icon: Sofa },
    { id: 'dining', label: 'Dining Area', icon: Sofa },
    { id: 'full', label: 'Full Home Interior', icon: Compass },
    { id: 'office', label: 'Home Office', icon: Compass }
  ]

  const serviceOptions = [
    { id: 'curtains', label: 'Custom Curtains & Drapes', desc: 'Premium tailoring, rods & motorized tracks' },
    { id: 'upholstery', label: 'Sofa & Fabric Upholstery', desc: 'Beautiful material selection & expert finishing' },
    { id: 'fabrics', label: 'Fabric Curation', desc: 'Handpicked textile matching & consulting' },
    { id: 'consulting', label: 'Full-Home Consultation', desc: 'End-to-end spacing, layouts, and aesthetics' }
  ]

  const vibeOptions = [
    { id: 'minimalist', label: 'Modern Minimalism', desc: 'Clean lines, hidden detail, spacious neutrals' },
    { id: 'luxury', label: 'Luxury Editorial', desc: 'Warm palettes, layered textures, rich statement pieces' },
    { id: 'classic', label: 'Classic Sophistication', desc: 'Timeless styling, rich drapery, structural elegance' },
    { id: 'organic', label: 'Cosy & Organic', desc: 'Textured linens, earthy tones, natural wood and stone' }
  ]

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -50 : 50, opacity: 0 })
  }

  return (
    <div className="pt-32 pb-24 min-h-[90vh] bg-cream-light flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl px-6 md:px-12 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal tracking-wide mb-4">
          Begin Your Design Journey
        </h1>
        <p className="text-charcoal-light/70 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          Tell us about your dream space. Deepa and our team of consultants will review your design goals before scheduling a curated visit.
        </p>
      </div>

      <div className="w-full max-w-3xl px-6">
        <div className="glass-card p-8 md:p-12 shadow-2xl relative overflow-hidden bg-white/70 border border-taupe/15">
          {/* Progress bar */}
          {!submitted && (
            <div className="mb-10">
              <div className="flex justify-between text-xxs tracking-widest uppercase text-charcoal/60 mb-2">
                <span>Step {step} of 4</span>
                <span className="font-semibold text-gold">
                  {step === 1 && 'Space Needs'}
                  {step === 2 && 'Specialties Required'}
                  {step === 3 && 'Aesthetic Preference'}
                  {step === 4 && 'Contact Information'}
                </span>
              </div>
              <div className="h-[2px] w-full bg-taupe/20 relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gold"
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait" custom={step}>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8 flex flex-col items-center gap-6"
              >
                <CheckCircle className="w-16 h-16 text-gold mb-2" />
                <h2 className="text-3xl font-serif text-charcoal">Thank You, {formData.name}!</h2>
                <p className="text-charcoal-light/80 max-w-md mx-auto text-sm leading-relaxed">
                  Your design briefing has been captured. Deepa and our consulting team are already reviewing your details. We will contact you at <span className="font-medium text-charcoal">{formData.phone}</span> or <span className="font-medium text-charcoal">{formData.email}</span> within 24 hours to coordinate your visit.
                </p>
                <Button variant="solid" onClick={() => window.location.href = '/'} className="mt-4">
                  Return to Home
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="min-h-[350px] flex flex-col justify-between">
                <div>
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-xl font-serif text-charcoal border-b border-taupe/10 pb-3">
                        Which spaces are we styling?
                      </h3>
                      <p className="text-xxs tracking-widest uppercase text-charcoal-light/60 mb-2">
                        Select all that apply
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {spaceOptions.map((opt) => {
                          const Icon = opt.icon
                          const isSelected = formData.spaces.includes(opt.id as SpaceType)
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => toggleSpace(opt.id as SpaceType)}
                              className={`p-5 flex flex-col items-center gap-4 border transition-all duration-300 ${
                                isSelected
                                  ? 'border-gold bg-gold/5 text-gold font-semibold'
                                  : 'border-taupe/20 bg-cream-light/35 text-charcoal hover:border-taupe-dark'
                              }`}
                            >
                              <Icon className="w-6 h-6" />
                              <span className="text-xs uppercase tracking-widest">{opt.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-xl font-serif text-charcoal border-b border-taupe/10 pb-3">
                        What services do you need?
                      </h3>
                      <p className="text-xxs tracking-widest uppercase text-charcoal-light/60 mb-2">
                        Select all that apply
                      </p>
                      <div className="flex flex-col gap-4">
                        {serviceOptions.map((opt) => {
                          const isSelected = formData.services.includes(opt.id as ServiceType)
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => toggleService(opt.id as ServiceType)}
                              className={`p-4 flex justify-between items-center text-left border transition-all duration-300 ${
                                isSelected
                                  ? 'border-gold bg-gold/5 text-charcoal font-semibold'
                                  : 'border-taupe/20 bg-cream-light/35 text-charcoal hover:border-taupe-dark'
                              }`}
                            >
                              <div>
                                <span className="text-xs uppercase tracking-widest font-medium block">{opt.label}</span>
                                <span className="text-xxs text-charcoal-light/60">{opt.desc}</span>
                              </div>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-gold bg-gold' : 'border-taupe/40'
                                }`}
                              >
                                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-xl font-serif text-charcoal border-b border-taupe/10 pb-3">
                        Choose your preferred design vibe
                      </h3>
                      <p className="text-xxs tracking-widest uppercase text-charcoal-light/60 mb-2">
                        Select one option
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {vibeOptions.map((opt) => {
                          const isSelected = formData.vibe === opt.id
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => handleVibe(opt.id as VibeType)}
                              className={`p-5 text-left border transition-all duration-300 ${
                                isSelected
                                  ? 'border-gold bg-gold/5 text-charcoal'
                                  : 'border-taupe/20 bg-cream-light/35 text-charcoal hover:border-taupe-dark'
                              }`}
                            >
                              <span className="text-xs uppercase tracking-widest font-semibold block mb-1">
                                {opt.label}
                              </span>
                              <span className="text-xxs text-charcoal-light/75 leading-relaxed">
                                {opt.desc}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-xl font-serif text-charcoal border-b border-taupe/10 pb-3">
                        Almost there. Let's connect
                      </h3>
                      <div className="flex flex-col gap-5 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-2">
                            <label className="text-xxs tracking-widest uppercase text-charcoal/60">
                              Your Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="e.g. Deepa Nair"
                              className="w-full bg-cream-light/45 border border-taupe/25 p-3.5 focus:outline-none focus:border-gold font-sans text-sm text-charcoal"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-xxs tracking-widest uppercase text-charcoal/60">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="e.g. +1 555-742-337"
                              className="w-full bg-cream-light/45 border border-taupe/25 p-3.5 focus:outline-none focus:border-gold font-sans text-sm text-charcoal"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-2">
                            <label className="text-xxs tracking-widest uppercase text-charcoal/60">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="e.g. client@example.com"
                              className="w-full bg-cream-light/45 border border-taupe/25 p-3.5 focus:outline-none focus:border-gold font-sans text-sm text-charcoal"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-xxs tracking-widest uppercase text-charcoal/60">
                              Target Timeframe
                            </label>
                            <select
                              name="timeframe"
                              value={formData.timeframe}
                              onChange={handleInputChange}
                              className="w-full bg-cream-light/45 border border-taupe/25 p-3.5 focus:outline-none focus:border-gold font-sans text-sm text-charcoal appearance-none cursor-pointer"
                            >
                              <option value="immediate">Immediate (Within a month)</option>
                              <option value="1-3-months">1 to 3 months</option>
                              <option value="3-6-months">3 to 6 months</option>
                              <option value="planning">Just planning/gathering ideas</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="flex justify-between mt-10 pt-6 border-t border-taupe/10">
                  {step > 1 ? (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <Button
                      type="button"
                      variant="solid"
                      onClick={nextStep}
                      disabled={
                        (step === 1 && formData.spaces.length === 0) ||
                        (step === 2 && formData.services.length === 0) ||
                        (step === 3 && formData.vibe === '')
                      }
                      className="disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next Step <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="gold"
                      disabled={!formData.name || !formData.email || !formData.phone}
                      className="disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit Consultation Request
                    </Button>
                  )}
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
