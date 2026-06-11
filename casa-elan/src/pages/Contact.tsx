import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Video, Users, PhoneCall, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Please share some details about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const faqs = [
  { q: "How quickly do you respond to enquiries?", a: "We respond to all enquiries within one business day. For urgent matters, please call us directly." },
  { q: "Where are you based, and do you travel for projects?", a: "Our studio is in New York. We work internationally and have completed projects in 18 countries. Travel is included in our fee for international engagements." },
  { q: "What happens at the initial consultation?", a: "The consultation is a relaxed 30-minute conversation — in person at our studio, virtually, or by phone — to discuss your project, your vision, and how we work." },
  { q: "Do I need to have a clear vision before contacting you?", a: "Not at all. Many clients come to us with just a feeling — a sense that something about their space needs to change. We help articulate the vision together." },
  { q: "Can I visit your studio in person?", a: "Absolutely. Our studio at 42 West 57th Street is open Monday through Friday, 9am–6pm. We'd love to meet you in person." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button className="w-full flex justify-between items-center py-5 text-left gap-4" onClick={() => setOpen(!open)} data-testid="button-contact-faq">
        <span className="font-serif text-white text-lg">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={20} className="text-[#B86A4E] flex-shrink-0" />
        </motion.div>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="text-[#C9B9A8]/60 pb-5 leading-relaxed text-sm">{a}</p>
      </motion.div>
    </div>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", projectType: "", budget: "", message: "" },
  });

  useEffect(() => {
    document.title = "Contact — Casa Elan Interiors";
  }, []);

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast({ title: "Message received", description: "Thank you for reaching out. We'll be in touch within one business day." });
    form.reset();
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="pt-40 pb-24 bg-[#2C2520] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/60 via-transparent to-[#1B5A5A]/15 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #B86A4E 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <motion.div variants={stagger} initial="hidden" animate="visible" className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-6">Get in Touch</motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl text-white font-light mb-6 max-w-3xl">
            Let's Create Something Beautiful
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#C9B9A8]/60 max-w-xl text-lg font-light">
            We'd love to hear about your vision. Tell us about your project and let's see how we can help.
          </motion.p>
        </motion.div>
      </section>

      {/* FORM + INFO */}
      <section className="py-24 bg-[#F8F5F0]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3">
              <p className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">Send a Message</p>
              <h2 className="font-serif text-3xl text-[#2C2520] font-light mb-8">Start the Conversation</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs tracking-widest text-[#9E8E82] uppercase">Full Name *</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Your full name" className="rounded-none border-[#2C2520]/15 bg-[#EDE4D7] focus-visible:ring-[#B86A4E] focus-visible:border-[#B86A4E]" data-testid="input-contact-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs tracking-widest text-[#9E8E82] uppercase">Email Address *</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" placeholder="your@email.com" className="rounded-none border-[#2C2520]/15 bg-[#EDE4D7] focus-visible:ring-[#B86A4E] focus-visible:border-[#B86A4E]" data-testid="input-contact-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs tracking-widest text-[#9E8E82] uppercase">Phone Number</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="+1 (212) 000-0000" className="rounded-none border-[#2C2520]/15 bg-[#EDE4D7] focus-visible:ring-[#B86A4E] focus-visible:border-[#B86A4E]" data-testid="input-contact-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="projectType" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs tracking-widest text-[#9E8E82] uppercase">Project Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none border-[#2C2520]/15 bg-[#EDE4D7] focus:ring-[#B86A4E]" data-testid="select-contact-project-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential Design</SelectItem>
                            <SelectItem value="commercial">Commercial Design</SelectItem>
                            <SelectItem value="villa">Luxury Villa</SelectItem>
                            <SelectItem value="renovation">Renovation Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="budget" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest text-[#9E8E82] uppercase">Project Budget *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-none border-[#2C2520]/15 bg-[#EDE4D7] focus:ring-[#B86A4E]" data-testid="select-contact-budget">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="15k-35k">$15,000 – $35,000</SelectItem>
                          <SelectItem value="35k-75k">$35,000 – $75,000</SelectItem>
                          <SelectItem value="75k-150k">$75,000 – $150,000</SelectItem>
                          <SelectItem value="150k-plus">$150,000+</SelectItem>
                          <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest text-[#9E8E82] uppercase">Tell Us About Your Project *</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Describe your project, the space, what you're hoping to achieve..." rows={6} className="rounded-none border-[#2C2520]/15 bg-[#EDE4D7] focus-visible:ring-[#B86A4E] focus-visible:border-[#B86A4E] resize-none" data-testid="textarea-contact-message" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <button type="submit" className="self-start px-10 py-4 bg-[#B86A4E] text-white text-sm tracking-widest hover:bg-[#a05a3e] transition-all duration-300 hover:shadow-lg hover:shadow-[#B86A4E]/20" data-testid="button-contact-submit">
                    SEND MESSAGE
                  </button>
                </form>
              </Form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-2 flex flex-col gap-10">
              <div>
                <p className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">Studio</p>
                <h2 className="font-serif text-3xl text-[#2C2520] font-light mb-8">Find Us</h2>
                <div className="flex flex-col gap-6">
                  {[
                    { icon: MapPin, label: "Studio Address", text: "42 West 57th Street, Suite 1800\nNew York, NY 10019" },
                    { icon: Phone, label: "Phone", text: "+1 (212) 555-0190", href: "tel:+12125550190" },
                    { icon: Mail, label: "Email", text: "hello@casaelan.com", href: "mailto:hello@casaelan.com" },
                    { icon: Clock, label: "Business Hours", text: "Monday – Friday: 9:00 am – 6:00 pm EST\nSaturday: By appointment only" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-[#B86A4E]/25 flex items-center justify-center flex-shrink-0 bg-[#EDE4D7]">
                        <item.icon size={16} className="text-[#B86A4E]" />
                      </div>
                      <div>
                        <p className="text-[#2C2520] font-medium text-sm mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[#9E8E82] text-sm hover:text-[#B86A4E] transition-colors">{item.text}</a>
                        ) : (
                          <p className="text-[#9E8E82] text-sm leading-relaxed whitespace-pre-line">{item.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#2C2520] aspect-[4/3] flex flex-col items-center justify-center gap-3">
                <MapPin size={28} className="text-[#B86A4E]" />
                <p className="text-[#C9B9A8]/60 text-xs tracking-widest uppercase">42 West 57th Street</p>
                <p className="text-[#C9B9A8]/40 text-xs">New York, NY 10019</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONSULTATION BOOKING */}
      <section className="py-24 bg-[#EDE4D7]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">First Step</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl text-[#2C2520] font-light">Schedule Your Consultation</motion.h2>
            <motion.p variants={fadeUp} className="text-[#9E8E82] max-w-md mx-auto mt-4">
              Choose the format that works best for you. All initial consultations are complimentary.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: PhoneCall, title: "Phone Consultation", desc: "A focused 30-minute call to discuss your project and explore how we can help. Available Monday through Friday.", action: "Schedule a Call" },
              { icon: Users, title: "In-Person Meeting", desc: "Visit our studio at 42 West 57th Street. See our material library, meet the team, and experience the Casa Elan approach firsthand.", action: "Book Studio Visit" },
              { icon: Video, title: "Virtual Consultation", desc: "A video call for clients who are based internationally or prefer the convenience of meeting from their own space.", action: "Schedule Video Call" },
            ].map((option, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col gap-5 p-8 bg-[#F8F5F0] border border-transparent hover:border-[#B86A4E]/25 transition-colors" data-testid={`card-consultation-${i}`}>
                <div className="w-12 h-12 border border-[#B86A4E]/30 flex items-center justify-center bg-[#EDE4D7]">
                  <option.icon size={20} className="text-[#B86A4E]" />
                </div>
                <h3 className="font-serif text-xl text-[#2C2520]">{option.title}</h3>
                <p className="text-[#9E8E82] text-sm leading-relaxed flex-1">{option.desc}</p>
                <button className="self-start text-sm tracking-widest text-[#2C2520] border-b border-[#2C2520]/30 pb-0.5 hover:text-[#B86A4E] hover:border-[#B86A4E] transition-colors" data-testid={`button-consultation-${i}`}>
                  {option.action.toUpperCase()}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-[#B86A4E] text-xs tracking-[0.4em] uppercase mb-4">Common Questions</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl text-white font-light">Before You Reach Out</motion.h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
