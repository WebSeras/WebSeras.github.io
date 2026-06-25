import React from 'react'
import { Link } from 'react-router-dom'
import { Sofa, Phone, Mail, MapPin } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-taupe-light pt-20 pb-10 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
        {/* Brand column */}
        <div className="flex flex-col gap-6 md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <Sofa className="w-6 h-6 text-gold" />
            <span className="font-serif text-xl font-semibold tracking-wider text-cream-light uppercase">
              Studio Shades
            </span>
          </Link>
          <p className="font-sans text-sm leading-relaxed text-taupe-light/75 max-w-sm">
            Curating luxury window dressings, premium curtains, and bespoke home interior designs. Bridging reliability, tailored craftsmanship, and personal design guidance.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors duration-300" aria-label="Instagram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:text-gold transition-colors duration-300" aria-label="Facebook">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-base tracking-widest text-cream-light uppercase font-medium border-b border-taupe-dark/30 pb-2">
            The Studio
          </h4>
          <div className="flex flex-col gap-3 font-sans text-sm">
            <Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link>
            <Link to="/about" className="hover:text-gold transition-colors duration-300">About Our Team</Link>
            <Link to="/portfolio" className="hover:text-gold transition-colors duration-300">Our Portfolio</Link>
            <Link to="/booking" className="hover:text-gold transition-colors duration-300">Book a Consultation</Link>
          </div>
        </div>

        {/* Services column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-base tracking-widest text-cream-light uppercase font-medium border-b border-taupe-dark/30 pb-2">
            Our Specialties
          </h4>
          <div className="flex flex-col gap-3 font-sans text-sm">
            <Link to="/services" className="hover:text-gold transition-colors duration-300">Custom Curtain Tailoring</Link>
            <Link to="/services" className="hover:text-gold transition-colors duration-300">Luxury Sofa Upholstery</Link>
            <Link to="/services" className="hover:text-gold transition-colors duration-300">Bespoke Fabric Curation</Link>
            <Link to="/services" className="hover:text-gold transition-colors duration-300">Full-Home Design Consulting</Link>
          </div>
        </div>

        {/* Experience Center column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-base tracking-widest text-cream-light uppercase font-medium border-b border-taupe-dark/30 pb-2">
            Visit Our Center
          </h4>
          <div className="flex flex-col gap-4 font-sans text-sm">
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <span>
                102 Design Boulevard,<br />
                Suite A, Experience District
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <a href="tel:+1555742337" className="hover:text-gold transition-colors duration-300">
                +1 (555) SHADES-VIBE
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <a href="mailto:info@studioshades.design" className="hover:text-gold transition-colors duration-300">
                deepa@studioshades.design
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-taupe-dark/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="font-sans text-xs text-taupe-light/50">
          &copy; {new Date().getFullYear()} Studio Shades. All Rights Reserved. Crafted with reliability and passion.
        </p>
        <div className="flex gap-6 font-sans text-xs text-taupe-light/50">
          <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
