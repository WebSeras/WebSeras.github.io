import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

type BlogCategory = "All" | "Design Trends" | "Architecture" | "Luxury Living" | "Renovation Tips";

const articles = [
  { id: 1, title: "The Art of Biophilic Design: Bringing Nature Into the Home", category: "Design Trends" as BlogCategory, excerpt: "The movement toward interiors that incorporate natural elements — living walls, raw stone, abundant daylight — is more than a trend. It's a fundamental rethinking of what it means to feel at home.", date: "May 12, 2025", readTime: "6 min read", author: "Isabelle Fontaine", authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&q=80", img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&q=80" },
  { id: 2, title: "2025's Most Anticipated Architectural Movements", category: "Architecture" as BlogCategory, excerpt: "From neo-brutalism's quiet resurgence to the maturation of parametric design, the year ahead promises to be one of the most intellectually rich in recent architectural memory.", date: "April 28, 2025", readTime: "8 min read", author: "Marco Delacroix", authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&q=80", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" },
  { id: 3, title: "Curating a Luxury Master Bedroom: The Art of Considered Rest", category: "Luxury Living" as BlogCategory, excerpt: "The most personal room in a home demands the most personal design thinking. We share our philosophy for creating master suites that are genuinely restorative — not just impressive.", date: "April 10, 2025", readTime: "7 min read", author: "Priya Nair", authorImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&q=80", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" },
  { id: 4, title: "The Complete Renovation Planning Guide for 2025", category: "Renovation Tips" as BlogCategory, excerpt: "Before you pick up a sledgehammer or sign a contractor agreement, read this. Our step-by-step guide to planning a renovation that stays on time, on budget, and on vision.", date: "March 22, 2025", readTime: "12 min read", author: "Thomas Brennan", authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80" },
  { id: 5, title: "Japandi: Where East Meets West in Interior Design", category: "Design Trends" as BlogCategory, excerpt: "The blending of Japanese wabi-sabi with Scandinavian hygge has produced one of the most enduring aesthetics of the decade. We examine why it works — and how to get it right.", date: "March 5, 2025", readTime: "5 min read", author: "Isabelle Fontaine", authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&q=80", img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80" },
  { id: 6, title: "Maximizing Natural Light in City Apartments", category: "Architecture" as BlogCategory, excerpt: "Light is the single most transformative element in any interior. Our guide to analyzing, amplifying, and directing natural light in urban homes, where it is almost always in short supply.", date: "February 18, 2025", readTime: "6 min read", author: "Marco Delacroix", authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&q=80", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80" },
  { id: 7, title: "The Psychology of Luxury Hospitality Design", category: "Luxury Living" as BlogCategory, excerpt: "What makes a great hotel room feel like a sanctuary while a lesser one feels like just a room? We break down the design principles that the world's finest hotels have mastered.", date: "February 3, 2025", readTime: "9 min read", author: "Priya Nair", authorImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&q=80", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { id: 8, title: "How to Work Effectively with Your Interior Designer", category: "Renovation Tips" as BlogCategory, excerpt: "The designer-client relationship is one of the most intimate professional partnerships you'll ever undertake. Here's how to make it work beautifully — for both of you.", date: "January 20, 2025", readTime: "7 min read", author: "Thomas Brennan", authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=600&q=80" },
];

const featured = {
  title: "The New Luxury: Why the World's Most Discerning Clients Are Choosing Restraint",
  category: "Design Trends" as BlogCategory,
  excerpt: "The definition of luxury in interior design is changing. After decades in which 'more' was synonymous with opulence, the world's most sophisticated clients are now commissioning spaces defined by extraordinary quality, radical restraint, and the considered absence of excess.",
  date: "June 1, 2025",
  readTime: "10 min read",
  author: "Isabelle Fontaine",
  authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&q=80",
  img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
};

const categories: BlogCategory[] = ["All", "Design Trends", "Architecture", "Luxury Living", "Renovation Tips"];

const catBg: Record<BlogCategory, string> = {
  "All": "bg-[#2C2520] text-white",
  "Design Trends": "bg-[#B86A4E]/15 text-[#B86A4E]",
  "Architecture": "bg-[#2A4A3F]/15 text-[#2A4A3F]",
  "Luxury Living": "bg-[#B86A4E]/15 text-[#B86A4E]",
  "Renovation Tips": "bg-[#1B5A5A]/15 text-[#1B5A5A]",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = "Design Insights — Casa Elan Interiors";
  }, []);

  const filtered = activeCategory === "All" ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="pt-40 pb-24 bg-[#2C2520] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/60 via-transparent to-[#2A4A3F]/20 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #B86A4E 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <motion.div variants={stagger} initial="hidden" animate="visible" className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-6">Journal</motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl text-white font-light mb-6">Design Insights</motion.h1>
          <motion.p variants={fadeUp} className="text-[#C9B9A8]/60 max-w-xl text-lg font-light">
            Thoughts on design, architecture, and the art of living beautifully — from the Casa Elan team.
          </motion.p>
        </motion.div>
      </section>

      {/* FEATURED */}
      <section className="py-16 bg-[#EDE4D7]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 lg:grid-cols-2 gap-0 group cursor-pointer">
            <div className="overflow-hidden">
              <img src={featured.img} alt={featured.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="bg-[#2C2520] p-10 md:p-14 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#B86A4E] text-white text-xs tracking-widest px-3 py-1">Featured</span>
                <span className="text-[#B86A4E] text-xs tracking-wider">{featured.category}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-white font-light leading-snug">{featured.title}</h2>
              <div className="w-10 h-[1px] bg-[#B86A4E]" />
              <p className="text-[#C9B9A8]/60 leading-relaxed text-sm">{featured.excerpt}</p>
              <div className="flex items-center gap-4">
                <img src={featured.authorImg} alt={featured.author} className="w-10 h-10 rounded-full object-cover grayscale" />
                <div>
                  <p className="text-white text-sm font-medium">{featured.author}</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-[#C9B9A8]/40 text-xs flex items-center gap-1"><Calendar size={11} /> {featured.date}</span>
                    <span className="text-[#C9B9A8]/40 text-xs flex items-center gap-1"><Clock size={11} /> {featured.readTime}</span>
                  </div>
                </div>
              </div>
              <button className="self-start flex items-center gap-2 text-[#B86A4E] text-sm tracking-widest border-b border-[#B86A4E]/40 pb-1 hover:border-[#B86A4E] transition-opacity">
                READ ARTICLE <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-8 bg-[#F8F5F0] border-b border-[#2C2520]/10">
        <div className="container mx-auto px-6 md:px-12 flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs tracking-widest transition-all duration-300 ${activeCategory === cat ? "bg-[#2C2520] text-white" : "bg-transparent text-[#9E8E82] hover:text-[#2C2520]"}`}
              data-testid={`button-blog-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <motion.article key={article.id} variants={fadeUp} className="group flex flex-col bg-[#EDE4D7] cursor-pointer" data-testid={`card-article-${article.id}`}>
                <div className="overflow-hidden">
                  <img src={article.img} alt={article.title} className="w-full aspect-[16/10] object-cover transition-transform duration-600 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0 transition-all" />
                </div>
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs tracking-widest px-3 py-1 ${catBg[article.category]}`}>{article.category}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#2C2520] font-light leading-snug group-hover:text-[#B86A4E] transition-colors duration-300">{article.title}</h3>
                  <p className="text-[#9E8E82] text-sm leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#2C2520]/10">
                    <div className="flex items-center gap-3">
                      <img src={article.authorImg} alt={article.author} className="w-8 h-8 rounded-full object-cover grayscale" />
                      <div>
                        <p className="text-xs text-[#2C2520] font-medium">{article.author}</p>
                        <p className="text-xs text-[#9E8E82]">{article.date}</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#9E8E82] flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 bg-[#1A1A1A]">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="container mx-auto px-6 md:px-12 text-center">
          <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-6">Newsletter</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-white font-light mb-4">
            Get Design Inspiration Delivered
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#C9B9A8]/50 max-w-md mx-auto mb-10">
            Monthly insights on design, architecture, and the art of beautiful living.
          </motion.p>
          <motion.form variants={fadeUp} onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white/8 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#B86A4E] transition-colors"
              data-testid="input-newsletter-email"
            />
            <button type="submit" className="px-8 py-4 bg-[#B86A4E] text-white text-sm tracking-widest hover:bg-[#a05a3e] transition-all duration-300 whitespace-nowrap" data-testid="button-newsletter-subscribe">
              SUBSCRIBE
            </button>
          </motion.form>
          <motion.p variants={fadeUp} className="text-white/20 text-xs mt-4">No spam. Unsubscribe at any time.</motion.p>
        </motion.div>
      </section>
    </div>
  );
}
