import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sofa } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' }
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 glassmorphism shadow-sm'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Sofa className="w-6 h-6 text-gold group-hover:text-gold-dark transition-colors duration-300" />
          <span className="font-serif text-2xl font-semibold tracking-wider text-charcoal uppercase">
            Studio Shades
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-sans text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                    isActive ? 'text-gold font-medium' : 'text-charcoal-light/80'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-charcoal hover:bg-charcoal-light text-cream-light font-sans text-xs tracking-widest uppercase py-3 px-6 rounded-none transition-all duration-300 border border-charcoal hover:border-charcoal-light cursor-pointer shadow-md"
            >
              Book an Experience Visit
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-charcoal focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism border-t border-taupe-light/20 absolute top-full left-0 right-0 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-8 py-8 bg-cream-light/95">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-sans text-base tracking-widest uppercase transition-colors duration-300 ${
                      isActive ? 'text-gold font-medium' : 'text-charcoal-light/70'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/booking" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-charcoal hover:bg-charcoal-light text-cream-light font-sans text-xs tracking-widest uppercase py-4 rounded-none transition-all duration-300">
                  Book an Experience Visit
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
