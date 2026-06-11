import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ChevronDown, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const packages = [
  {
    name: "Essential",
    price: "$15,000",
    suffix: "starting from",
    ideal: "Apartments & smaller residences",
    highlight: false,
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

const allFeatures = [
  { label: "Initial consultation", essential: true, premium: true, elite: true },
  { label: "Space planning", essential: true, premium: true, elite: true },
  { label: "Material selection", essential: true, premium: true, elite: true },
  { label: "2D floor plans", essential: true, premium: true, elite: true },
  { label: "3D visualizations", essential: false, premium: true, elite: true },
  { label: "Virtual walkthrough", essential: false, premium: true, elite: true },
  { label: "Custom furniture design", essential: false, premium: true, elite: true },
  { label: "Contractor coordination", essential: false, premium: true, elite: true },
  { label: "Lighting design", essential: false, premium: true, elite: true },
  { label: "Art curation", essential: false, premium: true, elite: true },
  { label: "Dedicated Design Director", essential: false, premium: false, elite: true },
  { label: "Architectural coordination", essential: false, premium: false, elite: true },
  { label: "International sourcing", essential: false, premium: false, elite: true },
  { label: "Smart home integration", essential: false, premium: false, elite: true },
  { label: "Post-completion support", essential: false, premium: false, elite: true },
];

const faqs = [
  { q: "Are your prices negotiable?", a: "Our pricing reflects the depth of service, the quality of our team, and the resources we commit to each project. We are transparent about scope from the outset, and we can sometimes adjust the service level to fit a defined budget." },
  { q: "What is included in project management?", a: "Our project management covers contractor briefing, site visits, quality control, timeline monitoring, and coordination between all trades and suppliers. The intensity and duration varies by package." },
  { q: "Do you charge for the initial consultation?", a: "No. Our first consultation is always complimentary. It is an opportunity for both parties to determine if there is a fit before any financial commitment is made." },
  { q: "Are travel costs included in international projects?", a: "International projects are quoted to include all relevant travel, accommodation, and logistics. We present a clear all-inclusive budget so there are no surprises." },
  { q: "Can I upgrade my package mid-project?", a: "Yes. Many clients begin with the Essential or Premium package and expand scope once they experience the process. We simply issue an amended agreement." },
  { q: "How do you handle budget overruns?", a: "We track budgets rigorously and flag any potential overruns before they occur. We maintain a contingency line in every budget and will always seek your approval before any unplanned expenditure." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#2C2520]/10">
      <button className="w-full flex justify-between items-center py-5 text-left gap-4" onClick={() => setOpen(!open)} data-testid="button-pricing-faq">
        <span className="font-serif text-[#2C2520] text-lg">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={20} className="text-[#B86A4E] flex-shrink-0" />
        </motion.div>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="text-[#9E8E82] pb-5 leading-relaxed text-sm">{a}</p>
      </motion.div>
    </div>
  );
}

export default function Pricing() {
  const [tableOpen, setTableOpen] = useState(false);

  useEffect(() => {
    document.title = "Pricing — Casa Elan Interiors";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="pt-40 pb-24 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2520]/80 via-transparent to-[#2A4A3F]/20 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #B86A4E 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <motion.div variants={stagger} initial="hidden" animate="visible" className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-6">Investment</motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl text-white font-light mb-6">
            Investment in Excellence
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#C9B9A8]/60 max-w-xl mx-auto text-lg font-light">
            Three packages, calibrated to projects of every scale. Every one delivered with the same uncompromising care.
          </motion.p>
        </motion.div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-24 bg-[#F8F5F0]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`flex flex-col p-8 lg:p-10 relative ${pkg.highlight ? "bg-[#2C2520] text-white ring-2 ring-[#B86A4E] scale-105 z-10 shadow-2xl shadow-[#B86A4E]/10" : "bg-[#EDE4D7] border border-[#2C2520]/10"}`}
                data-testid={`card-pricing-${i}`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B86A4E] text-white text-xs tracking-widest px-4 py-1">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-8">
                  <p className={`text-xs tracking-[0.3em] uppercase mb-3 ${pkg.highlight ? "text-[#B86A4E]" : "text-[#9E8E82]"}`}>Package</p>
                  <h3 className={`font-serif text-2xl mb-4 ${pkg.highlight ? "text-white" : "text-[#2C2520]"}`}>{pkg.name}</h3>
                  <div className={`w-10 h-[1px] mb-6 ${pkg.highlight ? "bg-[#B86A4E]" : "bg-[#B86A4E]/40"}`} />
                  <p className={`text-xs mb-2 ${pkg.highlight ? "text-[#C9B9A8]/60" : "text-[#9E8E82]"}`}>{pkg.suffix}</p>
                  <p className={`font-serif text-4xl ${pkg.highlight ? "text-[#B86A4E]" : "text-[#2C2520]"}`}>{pkg.price}</p>
                  <p className={`text-xs mt-3 ${pkg.highlight ? "text-[#C9B9A8]/50" : "text-[#9E8E82]"}`}>Ideal for: {pkg.ideal}</p>
                </div>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={14} className="text-[#B86A4E] mt-0.5 flex-shrink-0" />
                      <span className={`text-sm ${pkg.highlight ? "text-[#C9B9A8]" : "text-[#2C2520]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`text-center py-3.5 text-sm tracking-widest transition-all duration-300 ${pkg.highlight ? "bg-[#B86A4E] text-white hover:bg-[#a05a3e]" : "border border-[#2C2520] text-[#2C2520] hover:bg-[#2C2520] hover:text-white"}`}
                  data-testid={`link-pricing-cta-${i}`}
                >
                  ENQUIRE
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-[#9E8E82] text-xs mt-8">
            All packages require a signed letter of agreement and initial retainer before work commences. Prices exclude procurement, contractor costs, and applicable taxes.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 bg-[#EDE4D7]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <motion.h2 variants={fadeUp} className="font-serif text-3xl text-[#2C2520] font-light">Full Comparison</motion.h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <button onClick={() => setTableOpen(!tableOpen)} className="w-full flex justify-between items-center py-4 px-6 bg-[#F8F5F0] border border-[#2C2520]/10 mb-4" data-testid="button-comparison-toggle">
              <span className="text-sm tracking-widest text-[#2C2520]">{tableOpen ? "HIDE" : "SHOW"} FULL FEATURE COMPARISON</span>
              <motion.div animate={{ rotate: tableOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={18} className="text-[#B86A4E]" />
              </motion.div>
            </button>

            <motion.div initial={false} animate={{ height: tableOpen ? "auto" : 0, opacity: tableOpen ? 1 : 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
              <div className="border border-[#2C2520]/10 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#2C2520]">
                      <th className="text-left py-4 px-6 font-sans text-xs text-white/40 tracking-widest w-1/2">Feature</th>
                      <th className="py-4 px-4 font-serif text-white text-center text-sm">Essential</th>
                      <th className="py-4 px-4 font-serif text-[#B86A4E] text-center text-sm">Premium</th>
                      <th className="py-4 px-4 font-serif text-white text-center text-sm">Elite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allFeatures.map((f, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-[#F8F5F0]" : "bg-[#EDE4D7]"}>
                        <td className="py-3 px-6 text-sm text-[#2C2520]">{f.label}</td>
                        <td className="py-3 px-4 text-center">{f.essential ? <Check size={14} className="text-[#B86A4E] mx-auto" /> : <span className="text-[#9E8E82]/30 text-lg">—</span>}</td>
                        <td className="py-3 px-4 text-center bg-[#B86A4E]/5">{f.premium ? <Check size={14} className="text-[#B86A4E] mx-auto" /> : <span className="text-[#9E8E82]/30 text-lg">—</span>}</td>
                        <td className="py-3 px-4 text-center">{f.elite ? <Check size={14} className="text-[#B86A4E] mx-auto" /> : <span className="text-[#9E8E82]/30 text-lg">—</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">Questions</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl text-[#2C2520] font-light">Pricing FAQs</motion.h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#2A4A3F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #B86A4E 0%, transparent 60%)" }} />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-white font-light mb-6">
            Not Sure Which Package?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 max-w-lg mx-auto mb-10">
            Book a complimentary 30-minute consultation and we'll help you determine the right scope for your project and budget.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 justify-center px-10 py-4 bg-[#B86A4E] text-white text-sm tracking-widest hover:bg-[#a05a3e] transition-all duration-300">
              BOOK CONSULTATION <ArrowRight size={14} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 justify-center px-10 py-4 border border-white/20 text-white text-sm tracking-widest hover:border-[#B86A4E] hover:text-[#B86A4E] transition-all duration-300">
              VIEW SERVICES
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
