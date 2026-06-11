import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-400",
          isScrolled
            ? "bg-[#2C2520]/95 backdrop-blur-md py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex flex-col items-center group">
            <span className={cn(
              "font-serif text-2xl tracking-widest transition-colors",
              isScrolled ? "text-[#F8F5F0]" : "text-[#2C2520] group-hover:text-[#B86A4E]"
            )}>
              CASA ELAN
            </span>
            <div className="w-12 h-[1px] bg-[#B86A4E] my-1 transition-all group-hover:w-full" />
            <span className={cn(
              "font-sans text-[0.65rem] tracking-[0.3em] font-light transition-colors",
              isScrolled ? "text-[#C9B9A8]" : "text-[#2C2520]/60"
            )}>
              INTERIORS
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative py-2 group"
                  >
                    <span className={cn(
                      "text-sm font-medium tracking-wide transition-colors",
                      isScrolled ? "text-[#F8F5F0]/85 hover:text-[#B86A4E]" : "text-[#2C2520]/85 hover:text-[#B86A4E]",
                      isActive && "text-[#B86A4E]"
                    )}>
                      {link.name}
                    </span>
                    <span className={cn(
                      "absolute bottom-0 left-0 h-[1px] bg-[#B86A4E] transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              className={cn(
                "px-6 py-2.5 text-sm tracking-widest transition-all duration-300 border",
                isScrolled
                  ? "border-[#B86A4E] text-[#B86A4E] hover:bg-[#B86A4E] hover:text-white"
                  : "border-[#B86A4E] text-[#2C2520] hover:bg-[#B86A4E] hover:text-white"
              )}
            >
              BOOK CONSULTATION
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-[#B86A4E]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#2C2520] flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-2xl font-serif tracking-widest transition-colors",
                      isActive ? "text-[#B86A4E]" : "text-[#F8F5F0] hover:text-[#B86A4E]"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-4 px-8 py-3 border border-[#B86A4E] text-[#B86A4E] hover:bg-[#B86A4E] hover:text-white tracking-widest text-sm transition-all"
              >
                BOOK CONSULTATION
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
