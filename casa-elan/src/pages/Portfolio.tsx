import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

type Category = "All" | "Residential" | "Commercial" | "Hospitality" | "Villas";

const projects = [
  { id: 1, name: "Villa Lumière", cat: "Residential" as Category, location: "Beverly Hills, CA", year: "2023", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80", tall: true },
  { id: 2, name: "The Meridian", cat: "Commercial" as Category, location: "Manhattan, NY", year: "2022", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=80", tall: false },
  { id: 3, name: "Casa Marina", cat: "Villas" as Category, location: "Miami, FL", year: "2023", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=80", tall: false },
  { id: 4, name: "Atelier Nord", cat: "Commercial" as Category, location: "Paris, France", year: "2021", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80", tall: true },
  { id: 5, name: "Hotel Azur", cat: "Hospitality" as Category, location: "Nice, France", year: "2022", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80", tall: false },
  { id: 6, name: "Penthouse 42", cat: "Residential" as Category, location: "Chicago, IL", year: "2023", img: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=700&q=80", tall: true },
  { id: 7, name: "Oak & Stone", cat: "Residential" as Category, location: "Aspen, CO", year: "2021", img: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80", tall: false },
  { id: 8, name: "The Botanist", cat: "Hospitality" as Category, location: "London, UK", year: "2022", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80", tall: false },
  { id: 9, name: "Studio V", cat: "Commercial" as Category, location: "Milan, Italy", year: "2020", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80", tall: true },
  { id: 10, name: "Villa Rossa", cat: "Villas" as Category, location: "Tuscany, Italy", year: "2023", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80", tall: false },
  { id: 11, name: "Residence Blanc", cat: "Residential" as Category, location: "Geneva, Switzerland", year: "2022", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80", tall: false },
  { id: 12, name: "The Grand Suite", cat: "Hospitality" as Category, location: "Dubai, UAE", year: "2024", img: "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=700&q=80", tall: true },
];

const categories: Category[] = ["All", "Residential", "Commercial", "Hospitality", "Villas"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  useEffect(() => {
    document.title = "Portfolio — Casa Elan Interiors";
  }, []);

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.cat === activeFilter);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80" alt="Portfolio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#2C2520]/30 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">Selected Works</motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl text-white font-light">Our Portfolio</motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 mt-4 max-w-lg text-lg font-light">
              Twelve projects. Eighteen countries. One uncompromising standard.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-8 bg-[#2C2520] border-b border-[#B86A4E]/15 sticky top-[60px] z-30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                variants={fadeUp}
                onClick={() => setActiveFilter(cat)}
                className="relative py-2 text-sm tracking-widest transition-colors"
                data-testid={`button-filter-${cat.toLowerCase()}`}
              >
                <span className={activeFilter === cat ? "text-[#B86A4E]" : "text-[#C9B9A8]/50 hover:text-[#C9B9A8]"}>
                  {cat.toUpperCase()}
                </span>
                {activeFilter === cat && (
                  <motion.div layoutId="filterUnderline" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#B86A4E]" />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 bg-[#EDE4D7]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden break-inside-avoid mb-4 cursor-pointer"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className={`overflow-hidden ${project.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#2C2520]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                      <p className="text-[#B86A4E] text-xs tracking-widest mb-1">{project.cat} · {project.location}</p>
                      <div className="flex justify-between items-end">
                        <h3 className="font-serif text-xl text-white">{project.name}</h3>
                        <div className="w-8 h-8 border border-white/30 flex items-center justify-center">
                          <ArrowUpRight size={14} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2C2520]/80 backdrop-blur-sm text-[#C9B9A8] text-xs tracking-widest px-3 py-1">
                      {project.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2C2520]">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="container mx-auto px-6 md:px-12 text-center">
          <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-6">Your Project</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl text-white font-light mb-6">
            Let's Create Something Exceptional
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#C9B9A8]/60 max-w-md mx-auto mb-10">
            Every project in our portfolio began with a single conversation. Let's start yours.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a href="/contact" className="inline-block px-10 py-4 bg-[#B86A4E] text-white text-sm tracking-widest hover:bg-[#a05a3e] transition-all duration-300" data-testid="link-portfolio-cta">
              BEGIN YOUR PROJECT
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
