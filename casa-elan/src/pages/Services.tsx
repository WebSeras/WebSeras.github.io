import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Check, Home as HomeIcon, Building2, Trees, Ruler, HardHat, Sofa } from "lucide-react";

const packages = [
  {
    name: "Essential",
    price: "$15,000",
    suffix: "starting from",
    ideal: "Apartments & smaller residences",
    highlight: false,
    badge: undefined as string | undefined,
    features: [
      "Complimentary initial consultation",
      "Full space planning & layout",
      "Material & finish selection",
      "2D floor plans & elevations",
      "Furniture sourcing guidance",
      "3 rounds of design revisions",
      "Contractor brief & tender support",
      "Project management up to 3 months",
    ],
  },
  {
    name: "Premium Design",
    price: "$35,000",
    suffix: "starting from",
    ideal: "Full home renovations & large residences",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Essential",
      "Photorealistic 3D visualizations",
      "Virtual walkthrough presentation",
      "Custom furniture design & procurement",
      "Full contractor coordination",
      "Lighting design & specification",
      "Art & accessory curation",
      "Dedicated project manager",
      "Priority client support",
      "Project management up to 8 months",
    ],
  },
  {
    name: "Elite Luxury",
    price: "$75,000",
    suffix: "starting from",
    ideal: "Luxury estates, villas & commercial projects",
    highlight: false,
    badge: undefined,
    features: [
      "Everything in Premium",
      "Dedicated Design Director",
      "Full architectural coordination",
      "International material & art sourcing",
      "Smart home & AV integration",
      "Landscape design consultation",
      "Custom millwork & joinery",
      "White-glove project management",
      "Post-project styling & refinement",
      "6-month post-completion support",
      "Unlimited project duration",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: HomeIcon,
    id: "residential",
    title: "Residential Interior Design",
    label: "Residential",
    desc: "Your home is the most intimate expression of who you are. We translate the details of your life — your rituals, your aesthetics, your aspirations — into spaces that are elegant without being cold, personal without being cluttered. From a single room to a complete multi-story residence, every element is managed with the same precision and care.",
    features: ["Space planning & layout optimization", "Custom furniture design & procurement", "Material & finish specification", "Lighting design & specification", "Art & accessory curation", "Full project management"],
    accent: "#B86A4E",
  },
  {
    icon: Building2,
    id: "commercial",
    title: "Commercial Design",
    label: "Commercial",
    desc: "A well-designed workspace is one of the highest-returning investments a business can make. We design commercial environments — offices, retail flagships, hospitality spaces — that communicate brand values the moment someone crosses the threshold, to clients, talent, and the world.",
    features: ["Brand identity integration", "Employee wellness & productivity", "Client experience environments", "Wayfinding & spatial hierarchy", "Acoustic & lighting performance", "Sustainability certification support"],
    accent: "#2A4A3F",
  },
  {
    icon: Trees,
    id: "villas",
    title: "Luxury Villas",
    label: "Luxury Villas",
    desc: "Villa projects demand a mastery of both architecture and interior design. Our villa practice brings an architect's eye and a decorator's sensibility to every private estate — from pre-purchase assessment and architectural coordination to interior specification, landscape consultation, and smart home integration.",
    features: ["Full architectural coordination", "Smart home & AV integration", "Indoor-outdoor living design", "Custom millwork & joinery", "Landscape design consultation", "Estate management systems"],
    accent: "#1B5A5A",
  },
  {
    icon: Ruler,
    id: "planning",
    title: "Space Planning",
    label: "Space Planning",
    desc: "Space is the raw material of interior design. Before a single material is chosen, the plan must be right. Our space planning service offers technical expertise in spatial optimization — analyzing your existing or planned space with the rigour of architects and delivering a clear spatial strategy.",
    features: ["Floor plan analysis & critique", "Traffic flow optimization", "Furniture layout studies", "Virtual staging & 3D visualization", "Building code & compliance review", "Renovation scope assessment"],
    accent: "#8A9A7F",
  },
  {
    icon: HardHat,
    id: "renovation",
    title: "Renovation Consulting",
    label: "Renovation Consulting",
    desc: "Renovation projects are among the most emotionally high-stakes investments most people undertake. Our consulting service provides expert guidance through every phase — helping you avoid the costly mistakes that haunt so many renovation projects, whether you're renovating a single apartment or a multi-floor townhouse.",
    features: ["Contractor selection & vetting", "Budget development & management", "Timeline planning & monitoring", "Material & finish selection", "Permit & compliance guidance", "Quality control & site visits"],
    accent: "#B86A4E",
  },
  {
    icon: Sofa,
    id: "furniture",
    title: "Furniture & Styling",
    label: "Furniture & Styling",
    desc: "Not every project requires a full design engagement. Our furniture and styling service offers the expertise of Casa Elan for clients who need the right objects in the right places — curated with precision and an educated eye. We source from the finest contemporary and vintage markets globally.",
    features: ["Custom furniture design & commissioning", "Vintage & antique sourcing", "Contemporary dealer access", "Art selection & placement", "Accessory & textile curation", "Full room styling & installation"],
    accent: "#2A4A3F",
  },
];

const faqs = [
  { q: "How long does a typical interior design project take?", a: "Project timelines vary by scope. A single room typically takes 8–12 weeks from concept to completion. A full home renovation usually spans 6–18 months depending on structural work and custom furniture lead times. We provide a detailed timeline at project initiation." },
  { q: "Do you work internationally?", a: "Yes. We have completed projects in 18 countries across North America, Europe, the Middle East, and Southeast Asia. Our team is experienced in navigating international procurement, shipping, and local contractor networks." },
  { q: "Can I work with Casa Elan on a limited budget?", a: "Our services are calibrated for luxury residential and commercial projects. Our Essential package starts at $15,000 for smaller residences. We are transparent about investment requirements during our complimentary consultation." },
  { q: "Do you provide 3D visualizations before work begins?", a: "Yes. Our Premium and Elite packages include detailed 3D renderings and virtual walkthroughs. Even our Essential package includes 2D floor plans and material boards." },
  { q: "How involved do I need to be during the project?", a: "As involved as you wish. Some clients want to be consulted on every decision; others prefer to be presented with a complete proposal. We calibrate our process to your preference and availability." },
  { q: "Do you work with clients' existing furniture?", a: "Absolutely. We conduct a thorough inventory of existing pieces and advise what to keep, restore, reposition, or replace. Retaining meaningful pieces is often what gives a space its character." },
  { q: "What is your design fee structure?", a: "We offer a combination of design fees, hourly rates for consulting work, and trade pricing on furnishings. The fee structure is outlined in detail during your consultation and will be formalized in a clear letter of agreement before any work begins." },
  { q: "How do I begin?", a: "Contact us via our Contact page to schedule a complimentary 30-minute consultation. This is an opportunity to discuss your project, understand our process, and determine whether we're the right fit for each other." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#2C2520]/10">
      <button className="w-full flex justify-between items-center py-5 text-left gap-4" onClick={() => setOpen(!open)} data-testid="button-faq-toggle">
        <span className="font-serif text-[#2C2520] text-lg">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={20} className="text-[#B86A4E] flex-shrink-0" />
        </motion.div>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
        <p className="text-[#9E8E82] pb-5 leading-relaxed text-sm">{a}</p>
      </motion.div>
    </div>
  );
}

export default function Services() {
  useEffect(() => {
    document.title = "Services — Casa Elan Interiors";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1920&q=80" alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#2C2520]/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">Expertise</motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl text-white font-light">Our Services</motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 mt-4 max-w-lg text-lg font-light">
              Six disciplines, one uncompromising standard.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID — icon + text cards, no per-service images */}
      <section className="py-24 bg-[#F8F5F0]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">What We Do</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl text-[#2C2520] font-light">Areas of Practice</motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-[1px] bg-[#B86A4E] mx-auto mt-6" />
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group flex flex-col gap-6 p-8 bg-[#EDE4D7] border border-transparent hover:border-[#B86A4E]/25 transition-all duration-300 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 border flex items-center justify-center transition-all duration-300 group-hover:bg-[#B86A4E] group-hover:border-[#B86A4E]" style={{ borderColor: service.accent + "50" }}>
                    <service.icon size={20} style={{ color: service.accent }} className="group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs tracking-[0.3em] text-[#9E8E82] uppercase mt-1">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div>
                  <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: service.accent }}>{service.label}</p>
                  <h3 className="font-serif text-2xl text-[#2C2520] font-light mb-1">{service.title}</h3>
                  <div className="w-8 h-[1px] bg-[#B86A4E] my-4" />
                  <p className="text-[#9E8E82] text-sm leading-relaxed">{service.desc}</p>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-4 border-t border-[#2C2520]/10">
                  {service.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-[#B86A4E] flex-shrink-0" />
                      <span className="text-[#2C2520] text-xs">{f}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="self-start flex items-center gap-2 text-xs tracking-widest border-b pb-0.5 transition-colors mt-auto" style={{ color: service.accent, borderColor: service.accent + "40" }}>
                  ENQUIRE <ArrowRight size={11} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-[#2C2520] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #B86A4E 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">Methodology</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl text-white font-light">How We Work Together</motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[1px] bg-[#B86A4E]/20" />
            {[
              { num: "01", title: "Consultation", desc: "A complimentary conversation to understand your vision and assess project fit." },
              { num: "02", title: "Proposal", desc: "A detailed scope, timeline, and investment proposal tailored to your project." },
              { num: "03", title: "Design", desc: "Full design development — from concept to material specifications and contractor selection." },
              { num: "04", title: "Delivery", desc: "Project execution with meticulous oversight, culminating in your space reveal." },
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full border border-[#B86A4E] flex items-center justify-center bg-[#2C2520] relative z-10">
                  <span className="font-serif text-[#B86A4E] text-lg">{step.num}</span>
                </div>
                <h3 className="font-serif text-xl text-white">{step.title}</h3>
                <p className="text-[#C9B9A8]/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INVESTMENT / PRICING */}
      <section id="investment" className="py-28 bg-[#F8F5F0] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <span className="font-serif text-[#2C2520]/[0.03] leading-none" style={{ fontSize: "18vw" }}>INVEST</span>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-[#B86A4E]" />
              <p className="text-[#B86A4E] text-[10px] tracking-[0.45em] uppercase">Investment</p>
              <div className="w-10 h-[1px] bg-[#B86A4E]" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl text-[#2C2520] font-light mb-4">
              Investment in Excellence
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#9E8E82] max-w-lg mx-auto text-base font-light">
              Three packages, calibrated to projects of every scale. Every one delivered with the same uncompromising care.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: pkg.highlight ? 0 : -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`flex flex-col p-8 lg:p-10 relative ${
                  pkg.highlight
                    ? "bg-[#2C2520] text-white ring-2 ring-[#B86A4E] scale-[1.03] z-10 shadow-2xl shadow-[#B86A4E]/10"
                    : "bg-[#EDE4D7] border border-[#2C2520]/10"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B86A4E] text-white text-[10px] tracking-widest px-4 py-1">
                    {pkg.badge}
                  </div>
                )}
                <div className="mb-8">
                  <p className={`text-[10px] tracking-[0.35em] uppercase mb-3 ${pkg.highlight ? "text-[#B86A4E]" : "text-[#9E8E82]"}`}>
                    Package
                  </p>
                  <h3 className={`font-serif text-2xl mb-3 ${pkg.highlight ? "text-white" : "text-[#2C2520]"}`}>{pkg.name}</h3>
                  <div className={`w-10 h-[1px] mb-6 ${pkg.highlight ? "bg-[#B86A4E]" : "bg-[#B86A4E]/40"}`} />
                  <p className={`text-[10px] mb-1 ${pkg.highlight ? "text-[#C9B9A8]/60" : "text-[#9E8E82]"}`}>{pkg.suffix}</p>
                  <p className={`font-serif text-4xl ${pkg.highlight ? "text-[#B86A4E]" : "text-[#2C2520]"}`}>{pkg.price}</p>
                  <p className={`text-xs mt-3 ${pkg.highlight ? "text-[#C9B9A8]/50" : "text-[#9E8E82]"}`}>Ideal for: {pkg.ideal}</p>
                </div>
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={13} className="text-[#B86A4E] mt-0.5 flex-shrink-0" />
                      <span className={`text-sm leading-relaxed ${pkg.highlight ? "text-[#C9B9A8]" : "text-[#2C2520]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 py-3.5 text-xs tracking-[0.3em] transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-[#B86A4E] text-white hover:bg-[#a05a3e]"
                      : "border border-[#2C2520]/25 text-[#2C2520] hover:bg-[#2C2520] hover:text-white hover:border-[#2C2520]"
                  }`}
                >
                  ENQUIRE <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-[#9E8E82] text-xs mt-10 tracking-wide"
          >
            All packages begin with a complimentary consultation. Prices are starting points — final investment depends on project scope.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#EDE4D7]">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">Questions</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl text-[#2C2520] font-light">Frequently Asked</motion.h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A]">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2 variants={fadeUp} className="font-serif text-4xl text-white font-light mb-6">Begin Your Project</motion.h2>
          <motion.p variants={fadeUp} className="text-[#C9B9A8]/60 max-w-md mx-auto mb-10">
            Schedule a complimentary consultation to discuss your project and explore how we can help.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#B86A4E] text-white text-sm tracking-widest hover:bg-[#a05a3e] transition-all duration-300">
              BOOK A CONSULTATION <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
