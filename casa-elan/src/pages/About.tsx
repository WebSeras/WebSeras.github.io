import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Award, Heart, Lightbulb, Users, Leaf, Gem } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const timeline = [
  { year: "2009", title: "The Beginning", desc: "Founded in New York by Isabelle Fontaine and Marco Delacroix with a singular vision: interiors that outlast trends." },
  { year: "2012", title: "First Major Award", desc: "Received the Interior Design Best of Year Award for the Thornton Penthouse, establishing our reputation nationally." },
  { year: "2015", title: "International Expansion", desc: "Opened our London studio and completed our first European project — a 14th-century château in Bordeaux." },
  { year: "2017", title: "AD100 Recognition", desc: "Named to the Architectural Digest AD100 list for the first time, a distinction we have maintained ever since." },
  { year: "2020", title: "Studio Expansion", desc: "Relocated to our current flagship studio on West 57th Street. Grew the team to 24 designers and architects." },
  { year: "2024", title: "250 Projects", desc: "Reached the milestone of 250 completed projects across 18 countries, with our Dubai office now in development." },
];

const team = [
  { name: "Isabelle Fontaine", title: "Founding Principal & Creative Director", bio: "Trained at the École Boulle in Paris and the Pratt Institute, Isabelle's work is a dialogue between European classicism and American modernism.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Marco Delacroix", title: "Founding Principal & Architect", bio: "With a background in structural architecture and a passion for material honesty, Marco ensures every Casa Elan project is as beautifully built as it is designed.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Priya Nair", title: "Senior Design Director", bio: "Priya leads our residential practice with a sensitivity to how spaces feel in daily life — not just how they photograph.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Thomas Brennan", title: "Head of Commercial Design", bio: "Thomas brings over a decade of hospitality and workplace design experience, specializing in environments that perform as beautifully as they look.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
];

const values = [
  { icon: Gem, title: "Excellence", desc: "We refuse to settle. Every material selected, every line drawn is subject to the highest standard we know." },
  { icon: Heart, title: "Integrity", desc: "Transparent process, honest counsel, and a commitment to delivering what we promise — always." },
  { icon: Lightbulb, title: "Innovation", desc: "Tradition informs our sensibility; curiosity drives our craft. We continuously explore new approaches and materials." },
  { icon: Users, title: "Collaboration", desc: "The best outcomes emerge from genuine partnership with our clients. We listen before we design." },
  { icon: Leaf, title: "Sustainability", desc: "We source with conscience — championing artisans, reclaimed materials, and long-lived design over disposable trends." },
  { icon: Award, title: "Craftsmanship", desc: "We believe in the hand-made, the custom, the considered. Objects built to last a generation, not a season." },
];

export default function About() {
  useEffect(() => {
    document.title = "About — Casa Elan Interiors";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600210491892-03d54079f5b4?w=1920&q=80" alt="About Casa Elan" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#2C2520]/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">Casa Elan</motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl text-white font-light">Our Story</motion.h1>
          </motion.div>
        </div>
      </section>

      {/* STUDIO STORY — text only, no decorative portrait */}
      <section className="py-24 bg-[#F8F5F0]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-6">The Studio</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C2520] font-light mb-6 leading-tight">
              Fifteen Years of<br />Intentional Design
            </h2>
            <div className="w-12 h-[1px] bg-[#B86A4E] mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-[#9E8E82] leading-relaxed">
                Casa Elan was founded in 2009 with a deceptively simple belief: that beautiful spaces make better lives. What began as a two-person studio in a rented loft in SoHo has grown into one of the most respected interior design practices in North America and Europe.
              </p>
              <p className="text-[#9E8E82] leading-relaxed">
                Our work spans private residences, luxury hotels, corporate headquarters, and private villas across 18 countries. Yet despite our growth, we remain committed to the same principle that guided our first project: understanding the client before picking up a pencil.
              </p>
              <p className="text-[#9E8E82] leading-relaxed md:col-span-2">
                We do not have a signature style. We have a signature quality of attention. Every client deserves a home that is entirely, unmistakably their own — elevated by our knowledge, not defined by it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-[#EDE4D7]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: "Mission", title: "To Create Enduring Beauty", icon: "◇", text: "We exist to design spaces that stand the test of time — both materially and emotionally. Our mission is to create environments that clients grow into, not out of: homes and workplaces that age as gracefully as their inhabitants." },
              { label: "Vision", title: "A World of Considered Spaces", icon: "◈", text: "We envision a world where every meaningful space — from a private bedroom to a public lobby — is designed with the same care and intention. Casa Elan is our vehicle for making that vision tangible, one project at a time." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="p-10 border border-[#B86A4E]/20 flex flex-col gap-6 bg-[#F8F5F0]">
                <p className="text-[#B86A4E] text-3xl font-serif">{item.icon}</p>
                <p className="text-[#B86A4E] text-xs tracking-[0.3em] uppercase">{item.label}</p>
                <h3 className="font-serif text-2xl text-[#2C2520] font-light">{item.title}</h3>
                <div className="w-10 h-[1px] bg-[#B86A4E]" />
                <p className="text-[#9E8E82] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-[#2C2520] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #B86A4E 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">History</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-white font-light">Our Journey</motion.h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#B86A4E]/20" />
            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <p className="font-serif text-[#B86A4E] text-3xl mb-2">{item.year}</p>
                    <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-[#C9B9A8] text-sm leading-relaxed max-w-sm ml-auto">{item.desc}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#B86A4E] border-4 border-[#2C2520] z-10 flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-[#F8F5F0]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">The People</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#2C2520] font-light">Meet the Team</motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div key={i} variants={fadeUp} className="group flex flex-col gap-4" data-testid={`card-team-${i}`}>
                <div className="overflow-hidden relative">
                  <img src={member.img} alt={member.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B86A4E] transition-colors duration-300 pointer-events-none" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#2C2520]">{member.name}</h3>
                  <p className="text-[#B86A4E] text-xs tracking-wider mt-1">{member.title}</p>
                  <p className="text-[#9E8E82] text-sm mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-[#EDE4D7]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">What We Stand For</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#2C2520] font-light">Core Values</motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col gap-4 p-8 bg-[#F8F5F0] border border-transparent hover:border-[#B86A4E]/30 transition-colors">
                <value.icon size={28} className="text-[#B86A4E]" />
                <h3 className="font-serif text-xl text-[#2C2520]">{value.title}</h3>
                <div className="w-8 h-[1px] bg-[#B86A4E]" />
                <p className="text-[#9E8E82] leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">Recognition</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl text-white font-light">Awards & Accolades</motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { award: "AD100 List", year: "2017–2024", org: "Architectural Digest" },
              { award: "Best of Year", year: "2012, 2016, 2021", org: "Interior Design Magazine" },
              { award: "Gold Medal", year: "2019", org: "ASID National" },
              { award: "Luxury Design Award", year: "2020", org: "European Design Awards" },
              { award: "Top 50 Firms", year: "2022", org: "Dezeen Awards" },
              { award: "Innovation Award", year: "2023", org: "NYCxDESIGN" },
            ].map((award, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center gap-2 p-6 border border-white/8 hover:border-[#B86A4E]/40 transition-colors bg-[#2C2520]/30">
                <Award size={22} className="text-[#B86A4E] mb-1" />
                <p className="font-serif text-white text-sm">{award.award}</p>
                <p className="text-[#B86A4E] text-xs">{award.year}</p>
                <p className="text-white/25 text-xs">{award.org}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8F5F0]">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2 variants={fadeUp} className="font-serif text-4xl text-[#2C2520] font-light mb-6">Begin Your Project</motion.h2>
          <motion.p variants={fadeUp} className="text-[#9E8E82] max-w-md mx-auto mb-8">We'd love to hear about your space and how we can help transform it.</motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2C2520] text-white text-sm tracking-widest hover:bg-[#B86A4E] transition-all duration-300">
              GET IN TOUCH <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
