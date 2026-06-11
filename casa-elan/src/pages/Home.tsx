import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Star, Home as HomeIcon, Building2, Trees, Wrench } from "lucide-react";
import { Marquee } from "@/components/Marquee";

/* ── animation presets ──────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ── animated counter ───────────────────────────────────── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const c = animate(count, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return c.stop;
  }, [isInView, target, count]);

  return <span ref={ref}>{display}{suffix}</span>;
}

/* ── word-by-word reveal ────────────────────────────────── */
function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 60, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.08 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── diagonal svg divider ───────────────────────────────── */
function Divider({ topColor, bottomColor }: { topColor: string; bottomColor: string }) {
  return (
    <div style={{ background: topColor, lineHeight: 0, display: "block" }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: 60, display: "block" }}>
        <polygon points="0,0 1440,60 0,60" fill={bottomColor} />
      </svg>
    </div>
  );
}

/* ── data ───────────────────────────────────────────────── */
const services = [
  { icon: HomeIcon, num: "01", title: "Residential Design", desc: "Homes that are elegant without being cold, personal without being cluttered." },
  { icon: Building2, num: "02", title: "Commercial Spaces", desc: "Environments that communicate brand values the moment you cross the threshold." },
  { icon: Trees, num: "03", title: "Luxury Villas", desc: "Full villa design from architecture to interiors — inside and outside as one." },
  { icon: Wrench, num: "04", title: "Turnkey Solutions", desc: "End-to-end delivery. We manage every detail; you simply move in." },
];

const testimonials = [
  { name: "Alexandra Marchetti", title: "Homeowner, Beverly Hills", quote: "Casa Elan transformed our house into a genuine sanctuary. Every detail reflects an extraordinary sense of proportion and material. We've never felt more at home.", rating: 5 },
  { name: "James & Priya Thornton", title: "Penthouse Residence, Manhattan", quote: "Working with Casa Elan was a revelation. They understood our aesthetic before we could articulate it ourselves. The result exceeded every expectation.", rating: 5 },
  { name: "Sofia Reinholt", title: "CEO, The Meridian Group", quote: "Our headquarters now speaks the language of our brand in a way no other firm could have achieved. The response from clients and staff alike has been overwhelming.", rating: 5 },
  { name: "Étienne Beaumont", title: "Villa Owner, Saint-Tropez", quote: "They brought a Mediterranean soul to our villa while maintaining the contemporary edge we love. Masterful, patient, and deeply talented.", rating: 5 },
  { name: "Caroline Whitfield", title: "Restaurateur, Chicago", quote: "The atmosphere they created for our restaurant is inseparable from our reputation. Guests consistently remark on the space. Casa Elan delivered something truly special.", rating: 5 },
];

const marqueeItems = [
  "Award-Winning Design",
  "New York",
  "Est. 2009",
  "AD100 Listed",
  "Where Spaces Become Experiences",
  "250+ Projects",
  "18 Countries",
  "Interior Design Magazine",
  "Best of Year",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const isPhilosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });

  useEffect(() => {
    document.title = "Casa Elan — Where Spaces Become Experiences";
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTestimonialIdx((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO — editorial, left-aligned
      ══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
        {/* Parallax image */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale, y: heroY }}
        >
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1920&q=80"
            alt="Casa Elan luxury interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 via-[#2C2520]/50 to-transparent" />
        </motion.div>

        {/* Ghost watermark */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none z-[1]">
          <span className="font-serif leading-none tracking-tighter text-white/[0.03]"
            style={{ fontSize: "22vw", marginLeft: "-0.02em" }}>
            ELAN
          </span>
        </div>

        {/* Corner labels */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-28 right-8 z-20 text-right hidden md:block"
        >
          <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase">40°44′N  73°59′W</p>
          <p className="text-white/15 text-[9px] tracking-[0.3em] mt-1">New York</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 right-8 z-20 hidden md:flex flex-col items-end gap-1"
        >
          <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase">01 / 07</p>
        </motion.div>

        {/* Animated draw-in line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:block h-[160px] w-[1px] overflow-hidden ml-8">
          <motion.div
            className="w-full bg-[#B86A4E]/50"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          />
        </div>

        {/* Main content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 px-8 md:px-20 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-[#B86A4E]" />
            <p className="text-[#B86A4E] text-[10px] tracking-[0.5em] uppercase">Award-Winning Interior Design Studio</p>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-[88px] text-white font-light leading-[1.05] mb-6">
            <WordReveal text="Timeless Interior" />
            <br />
            <WordReveal text="Design for" />
            <br />
            <motion.span
              className="inline-block text-[#B86A4E]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            >
              Modern Living
            </motion.span>
          </h1>

          {/* Draw-in horizontal rule */}
          <div className="overflow-hidden mb-8">
            <motion.div
              className="h-[1px] bg-white/15"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-white/60 text-base md:text-lg font-light max-w-md mb-10 leading-relaxed"
          >
            We craft spaces that blend beauty, functionality, and personality — built to last a lifetime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/portfolio"
              className="group flex items-center gap-3 px-8 py-4 bg-[#B86A4E] text-white text-xs tracking-[0.3em] hover:bg-[#a05a3e] transition-all duration-300 hover:shadow-xl hover:shadow-[#B86A4E]/25 w-max"
            >
              VIEW PROJECTS
              <motion.span whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                <ArrowRight size={14} />
              </motion.span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-xs tracking-[0.3em] hover:bg-white hover:text-[#2C2520] transition-all duration-300 w-max"
            >
              BOOK CONSULTATION
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <p className="text-white/25 text-[9px] tracking-[0.4em] uppercase">Scroll</p>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          STATS bar — bold display numbers
      ══════════════════════════════════════════ */}
      <section className="bg-[#2C2520] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "repeating-linear-gradient(90deg, #B86A4E 0px, #B86A4E 1px, transparent 1px, transparent 80px)" }} />
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="container mx-auto px-6 md:px-12 py-14 grid grid-cols-2 md:grid-cols-4 gap-0"
        >
          {[
            { target: 250, suffix: "+", label: "Projects Completed" },
            { target: 15, suffix: " yrs", label: "In Practice" },
            { target: 98, suffix: "%", label: "Client Satisfaction" },
            { target: 30, suffix: "+", label: "Design Awards" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="relative flex flex-col items-center py-6 px-4 group">
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#B86A4E]/20" />
              )}
              <p className="font-serif text-5xl md:text-6xl text-[#B86A4E] font-light tracking-tight mb-1">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <motion.div
                className="w-0 h-[1px] bg-[#B86A4E]/50 mb-2 group-hover:w-full transition-all duration-500"
              />
              <p className="text-[#C9B9A8]/50 text-[10px] tracking-[0.35em] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE ticker
      ══════════════════════════════════════════ */}
      <Marquee
        items={marqueeItems}
        duration={35}
        bgColor="#B86A4E"
        textColor="#F8F5F0"
        dotColor="#F8F5F0"
        textSize="text-[10px]"
        py="py-3.5"
      />

      {/* ══════════════════════════════════════════
          SERVICES — icon cards with draw-in borders
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#F8F5F0] relative overflow-hidden">
        {/* Ghost background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
          <span className="font-serif font-light text-[#2C2520]/[0.025] leading-none"
            style={{ fontSize: "18vw" }}>
            EXPERTISE
          </span>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
                <div className="w-10 h-[1px] bg-[#B86A4E]" />
                <p className="text-[#B86A4E] text-[10px] tracking-[0.45em] uppercase">Our Expertise</p>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl text-[#2C2520] font-light">
                What We Create
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link
                href="/services"
                className="group flex items-center gap-2 text-xs tracking-[0.3em] text-[#2C2520] border-b border-[#2C2520]/25 pb-1 hover:text-[#B86A4E] hover:border-[#B86A4E] transition-colors"
              >
                ALL SERVICES
                <motion.span whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <ArrowRight size={12} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="card-border-draw group flex flex-col gap-5 p-8 bg-[#EDE4D7] cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="w-11 h-11 border border-[#B86A4E]/30 flex items-center justify-center group-hover:bg-[#B86A4E] group-hover:border-[#B86A4E] transition-all duration-400">
                    <service.icon size={18} className="text-[#B86A4E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-serif text-4xl text-[#2C2520]/[0.06] leading-none">{service.num}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#2C2520] mb-3 leading-tight">{service.title}</h3>
                  <div className="w-6 h-[1px] bg-[#B86A4E] mb-4 group-hover:w-full transition-all duration-500" />
                  <p className="text-[#9E8E82] text-sm leading-relaxed">{service.desc}</p>
                </div>
                <Link
                  href="/services"
                  className="self-start flex items-center gap-1.5 text-[10px] tracking-[0.3em] text-[#B86A4E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto"
                >
                  EXPLORE <ArrowRight size={10} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED PROJECTS — asymmetric grid
      ══════════════════════════════════════════ */}
      <Marquee
        items={["Residential", "Commercial", "Hospitality", "Villas", "Selected Works", "Portfolio"]}
        duration={25}
        bgColor="#EDE4D7"
        textColor="#9E8E82"
        dotColor="#B86A4E"
        textSize="text-[9px]"
        py="py-3"
      />

      <section className="py-24 bg-[#EDE4D7]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
                <div className="w-10 h-[1px] bg-[#B86A4E]" />
                <p className="text-[#B86A4E] text-[10px] tracking-[0.45em] uppercase">Portfolio</p>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl text-[#2C2520] font-light">
                Selected Works
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link
                href="/portfolio"
                className="group flex items-center gap-2 text-xs tracking-[0.3em] text-[#2C2520] border-b border-[#2C2520]/25 pb-1 hover:text-[#B86A4E] hover:border-[#B86A4E] transition-colors"
              >
                VIEW ALL <ArrowRight size={12} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* Large left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="md:col-span-3 group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80" alt="Villa Lumière" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2520]/90 via-[#2C2520]/10 to-transparent flex items-end p-8 opacity-80 group-hover:opacity-100 transition-opacity">
                <div>
                  <p className="text-[#B86A4E] text-[10px] tracking-[0.4em] uppercase mb-1">Residential · Beverly Hills</p>
                  <h3 className="font-serif text-2xl text-white font-light">Villa Lumière</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 border border-white/20 bg-[#2C2520]/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </motion.div>

            {/* Two stacked right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-2 flex flex-col gap-3"
            >
              {[
                { img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=80", name: "The Meridian", cat: "Commercial · Manhattan" },
                { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=80", name: "Casa Marina", cat: "Villa · Miami" },
              ].map((p, i) => (
                <div key={i} className="group relative overflow-hidden cursor-pointer flex-1">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2520]/80 via-transparent to-transparent flex items-end p-5 opacity-70 group-hover:opacity-100 transition-opacity">
                    <div>
                      <p className="text-[#B86A4E] text-[9px] tracking-[0.35em] uppercase mb-0.5">{p.cat}</p>
                      <h3 className="font-serif text-lg text-white font-light">{p.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Bottom row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-2 group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80" alt="Atelier Nord" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2520]/80 via-transparent to-transparent flex items-end p-6 opacity-70 group-hover:opacity-100 transition-opacity">
                <div>
                  <p className="text-[#B86A4E] text-[9px] tracking-[0.35em] uppercase mb-0.5">Commercial · Paris</p>
                  <h3 className="font-serif text-lg text-white font-light">Atelier Nord</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-3 group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80" alt="Hotel Azur" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2520]/90 via-transparent to-transparent flex items-end p-8 opacity-80 group-hover:opacity-100 transition-opacity">
                <div>
                  <p className="text-[#B86A4E] text-[10px] tracking-[0.4em] uppercase mb-1">Hospitality · Nice</p>
                  <h3 className="font-serif text-2xl text-white font-light">Hotel Azur</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 border border-white/20 bg-[#2C2520]/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PHILOSOPHY — dark, with ghost "250" + image
      ══════════════════════════════════════════ */}
      <section ref={philosophyRef} className="py-28 bg-[#1A1A1A] relative overflow-hidden">
        {/* Ghost number */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
          <motion.span
            className="font-serif text-white leading-none block"
            style={{ fontSize: "30vw", opacity: 0.025 }}
            initial={{ x: 80, opacity: 0 }}
            animate={isPhilosophyInView ? { x: 0, opacity: 0.025 } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            250
          </motion.span>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[1px] bg-[#B86A4E]" />
                <p className="text-[#B86A4E] text-[10px] tracking-[0.45em] uppercase">Our Philosophy</p>
              </div>
              <blockquote className="font-serif text-2xl md:text-4xl text-white font-light leading-snug mb-8">
                "Design is not just what it looks like. Design is how it works — and how it{" "}
                <em className="not-italic text-[#B86A4E]">feels</em>."
              </blockquote>
              <motion.div
                className="h-[1px] bg-[#B86A4E]/40 mb-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
              />
              <p className="text-[#C9B9A8]/60 leading-relaxed mb-5 text-[15px]">
                At Casa Elan, great design transcends the visual. It is felt in the way a space makes you pause, breathe, and feel at ease. Every project begins with a conversation — about how you live, what you love, and where your home should take you.
              </p>
              <p className="text-[#C9B9A8]/40 leading-relaxed mb-10 text-[15px]">
                We draw from art, architecture, and nature to create interiors that are simultaneously timeless and deeply personal.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-[10px] tracking-[0.4em] text-[#B86A4E]"
              >
                <span className="border-b border-[#B86A4E]/40 pb-0.5 group-hover:border-[#B86A4E] transition-colors">OUR STORY</span>
                <motion.span whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <ArrowRight size={12} />
                </motion.span>
              </Link>
            </motion.div>

            {/* Right: image + stat overlay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618219944342-824e40a13285?w=800&q=80"
                  alt="Studio philosophy"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
                {/* Stat overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-2 gap-4">
                  {[
                    { num: "AD100", sub: "Since 2017" },
                    { num: "18", sub: "Countries" },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#2C2520]/80 backdrop-blur-sm p-4 border border-[#B86A4E]/20">
                      <p className="font-serif text-2xl text-[#B86A4E]">{item.num}</p>
                      <p className="text-[#C9B9A8]/60 text-xs tracking-wider mt-1">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating accent box */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-[#B86A4E]/25 hidden lg:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS — dramatic, centered
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#2C2520] relative overflow-hidden">
        {/* Giant ghost quote */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 font-serif text-white/[0.025] leading-none pointer-events-none select-none"
          style={{ fontSize: "40vw" }}>
          "
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-[#B86A4E]" />
              <p className="text-[#B86A4E] text-[10px] tracking-[0.45em] uppercase">Client Stories</p>
              <div className="w-10 h-[1px] bg-[#B86A4E]" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl text-white font-light">
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-center flex flex-col items-center gap-6"
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#B86A4E] fill-[#B86A4E]" />
                  ))}
                </div>
                <p className="font-serif text-xl md:text-2xl text-white/90 font-light leading-relaxed italic">
                  "{testimonials[testimonialIdx].quote}"
                </p>
                <div className="w-10 h-[1px] bg-[#B86A4E]/40" />
                <div>
                  <p className="font-serif text-[#B86A4E] text-lg">{testimonials[testimonialIdx].name}</p>
                  <p className="text-[#C9B9A8]/40 text-xs tracking-widest mt-1">{testimonials[testimonialIdx].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`transition-all duration-400 rounded-full ${i === testimonialIdx ? "w-8 h-[3px] bg-[#B86A4E]" : "w-2 h-[3px] bg-white/15 hover:bg-white/30"}`}
                  data-testid={`button-testimonial-${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS — architectural connecting line
      ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#F8F5F0] relative overflow-hidden">
        {/* Ghost "PROCESS" */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
          <span className="font-serif font-light text-[#2C2520]/[0.03] leading-none"
            style={{ fontSize: "16vw" }}>
            PROCESS
          </span>
        </div>

        <div ref={processRef} className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-[#B86A4E]" />
              <p className="text-[#B86A4E] text-[10px] tracking-[0.45em] uppercase">How We Work</p>
              <div className="w-10 h-[1px] bg-[#B86A4E]" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl text-[#2C2520] font-light">
              Our Process
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Animated connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-[#B86A4E]/10 overflow-hidden">
              <motion.div
                className="h-full bg-[#B86A4E]/40"
                initial={{ scaleX: 0 }}
                animate={isProcessInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4"
            >
              {[
                { num: "01", title: "Discovery", desc: "Deep-dive consultations to understand your vision, lifestyle, and aspirations." },
                { num: "02", title: "Concept", desc: "Mood boards, spatial narratives, and material stories that define the design direction." },
                { num: "03", title: "Development", desc: "Detailed drawings, specifications, and material selections refined to perfection." },
                { num: "04", title: "Execution", desc: "Precision project management, coordinating every craftsman, supplier, and detail." },
                { num: "05", title: "Reveal", desc: "The moment your transformed space is unveiled — exactly as envisioned, and then some." },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 } }
                  }}
                  className="flex flex-col items-center text-center gap-4 group"
                >
                  <div className="w-16 h-16 rounded-full border border-[#B86A4E]/30 bg-[#F8F5F0] flex items-center justify-center relative z-10 group-hover:bg-[#B86A4E] group-hover:border-[#B86A4E] transition-all duration-400">
                    <span className="font-serif text-[#B86A4E] group-hover:text-white text-lg transition-colors duration-300">{step.num}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#2C2520] group-hover:text-[#B86A4E] transition-colors duration-300">{step.title}</h3>
                  <p className="text-[#9E8E82] text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — deep forest with radiating gradient
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-[#2A4A3F] relative overflow-hidden">
        {/* Animated radial gradient */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,106,78,0.18) 0%, transparent 70%)"
          }}
        />

        {/* Ghost CTA text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-serif text-white/[0.025] leading-none"
            style={{ fontSize: "20vw" }}>
            BEGIN
          </span>
        </div>

        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="container mx-auto px-6 md:px-12 text-center relative z-10"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-[#B86A4E]/50" />
            <p className="text-[#B86A4E] text-[10px] tracking-[0.45em] uppercase">Begin Your Journey</p>
            <div className="w-10 h-[1px] bg-[#B86A4E]/50" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-7xl text-white font-light mb-6 leading-tight">
            Ready to Transform<br />
            <span className="text-[#B86A4E]">Your Space?</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/40 max-w-md mx-auto mb-12 leading-relaxed">
            Schedule a complimentary consultation with one of our principal designers. We'd love to hear about your vision.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-[#B86A4E] text-white text-xs tracking-[0.35em] hover:bg-[#a05a3e] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B86A4E]/30"
              data-testid="link-schedule-consultation"
            >
              SCHEDULE A CONSULTATION
              <motion.span whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                <ArrowRight size={14} />
              </motion.span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-white text-xs tracking-[0.35em] hover:border-[#B86A4E] hover:text-[#B86A4E] transition-all duration-300"
            >
              VIEW PORTFOLIO
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
