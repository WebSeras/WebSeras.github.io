import { Link } from "wouter";
import { motion } from "framer-motion";
import { Instagram, Linkedin, PinIcon as Pinterest, LayoutGrid } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C2520]/60 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col group inline-block w-max">
              <span className="font-serif text-2xl tracking-widest text-white">CASA ELAN</span>
              <div className="w-12 h-[1px] bg-[#B86A4E] my-1" />
              <span className="font-sans text-[0.65rem] tracking-[0.3em] font-light text-[#C9B9A8]">INTERIORS</span>
            </Link>
            <p className="text-[#C9B9A8] text-sm leading-relaxed max-w-xs">
              Where Spaces Become Experiences. We craft elegant, timeless interiors for modern living.
            </p>
            <div className="flex items-center gap-4 text-white/40">
              <a href="#" className="hover:text-[#B86A4E] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#B86A4E] transition-colors"><Pinterest size={20} /></a>
              <a href="#" className="hover:text-[#B86A4E] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-[#B86A4E] transition-colors"><LayoutGrid size={20} /></a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-xl mb-6 text-white tracking-wide">Studio</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#C9B9A8]">
              <li><Link href="/" className="hover:text-[#B86A4E] transition-colors">Our Story</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#B86A4E] transition-colors">Selected Works</Link></li>
              <li><Link href="/services#investment" className="hover:text-[#B86A4E] transition-colors">Investment</Link></li>
              <li><Link href="/contact" className="hover:text-[#B86A4E] transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-xl mb-6 text-white tracking-wide">Expertise</h4>
            <ul className="flex flex-col gap-4 text-sm text-[#C9B9A8]">
              <li><Link href="/services" className="hover:text-[#B86A4E] transition-colors">Residential Design</Link></li>
              <li><Link href="/services" className="hover:text-[#B86A4E] transition-colors">Commercial Spaces</Link></li>
              <li><Link href="/services" className="hover:text-[#B86A4E] transition-colors">Luxury Villas</Link></li>
              <li><Link href="/services" className="hover:text-[#B86A4E] transition-colors">Space Planning</Link></li>
              <li><Link href="/services" className="hover:text-[#B86A4E] transition-colors">Furniture & Styling</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div>
              <h4 className="font-serif text-xl mb-6 text-white tracking-wide">Contact</h4>
              <address className="not-italic text-sm text-[#C9B9A8] flex flex-col gap-2">
                <p>42 West 57th Street</p>
                <p>New York, NY 10019</p>
                <p className="mt-2"><a href="mailto:hello@casaelan.com" className="hover:text-[#B86A4E] transition-colors">hello@casaelan.com</a></p>
                <p><a href="tel:+12125550190" className="hover:text-[#B86A4E] transition-colors">+1 (212) 555-0190</a></p>
              </address>
            </div>
            <div className="mt-2">
              <p className="text-xs text-white/50 mb-3 uppercase tracking-wider">Join our newsletter</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border-white/15 text-white placeholder:text-white/30 rounded-none focus-visible:ring-[#B86A4E] focus-visible:border-[#B86A4E]"
                />
                <Button type="submit" variant="outline" className="rounded-none border-[#B86A4E] text-[#B86A4E] hover:bg-[#B86A4E] hover:text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#B86A4E]/40 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {currentYear} Casa Elan Interiors. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
