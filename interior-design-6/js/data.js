/* Application Content Data */

const AppData = {
  services: [
    {
      id: "residential",
      title: "Residential Sanctuary",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
      description:
        "Complete architectural and interior transformation of luxury apartments, estates, and vacation residences.",
      features: [
        "Spatial layout redesign & 3D visualization",
        "Curated high-end material selection",
        "Lighting architecture & acoustics design",
        "Procurement and turnkey site styling",
      ],
      price: "$15,000",
      period: "project base",
    },
    {
      id: "commercial",
      title: "Elite Commercial",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>`,
      description:
        "Sophisticated spatial solutions for boutique hotels, executive offices, galleries, and high-end retail venues.",
      features: [
        "Corporate brand identity translation",
        "High-traffic spatial layouts",
        "Acoustic and ergonomic optimization",
        "Collaborative project management",
      ],
      price: "$25,000",
      period: "project base",
    },
    {
      id: "bespoke",
      title: "Bespoke Curation",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-3.078 0L3 18.228V9a1.5 1.5 0 011.5-1.5h15A1.5 1.5 0 0121 9v9.228l-3.452-2.106a3 3 0 00-3.078 0L9.53 16.122zM10.56 9.75h2.88M9 9.75h.008v.008H9V9.75zm6 0h.008v.008H15V9.75z" /></svg>`,
      description:
        "Exclusive commissioning of custom furniture pieces, lighting sculpture collections, and fine art curations.",
      features: [
        "Custom furniture sketches & design blueprints",
        "Collaboration with master woodworkers & sculptors",
        "Fine art vetting, sourcing, and placement",
        "Premium textile and antique selection",
      ],
      price: "$8,500",
      period: "curation package",
    },
  ],

  portfolio: [
    {
      id: "cobalt-bedroom",
      title: "The Cobalt Bedroom Suite",
      category: "residential",
      location: "Manhattan, NY",
      scale: "380 sq. ft.",
      materials: "Linen, Velvet, Cobalt Accents",
      duration: "3 Months",
      description: "A warm and inviting residential bedroom utilizing deep cobalt accents and organic linens, designed for ultimate comfort and rest.",
      image: "assets/photos/3.jpg",
    },
    {
      id: "atelier-dining",
      title: "The Atelier Dining Suite",
      category: "commercial",
      location: "Studio Shades HQ",
      scale: "1,200 sq. ft.",
      materials: "Natural Oak, Multi-toned Steel",
      description: "A creative commercial dining setup inside the Studio Shades atelier, featuring modern chairs of varied colors surrounding an oak table.",
      image: "assets/photos/4.jpg",
    },
    {
      id: "blush-lounge",
      title: "The Blush Lounge",
      category: "residential",
      location: "Milan, Italy",
      scale: "750 sq. ft.",
      materials: "Bouclé, Rose Gold, Travertine",
      description: "A soft, contemporary living area styled with pink and white accents, balancing curved bouclé seating with travertine tables.",
      image: "assets/photos/5.jpg",
    },
    {
      id: "sculptural-chairs",
      title: "The Sculptural Chairs",
      category: "bespoke",
      location: "Paris, France",
      scale: "N/A",
      materials: "Bentwood, Bouclé, Walnut",
      duration: "2 Months",
      description: "Bespoke curation of two distinct accent chairs selected to frame a minimalist corner, exploring the intersection of mid-century and modern forms.",
      image: "assets/photos/2.jpg",
    },
    {
      id: "textile-sanctuary",
      title: "The Textile Sanctuary",
      category: "bespoke",
      location: "Kyoto, Japan",
      scale: "N/A",
      materials: "Organic Cotton, Wool, Natural Dyes",
      duration: "4 Months",
      description: "Bespoke textile curation highlighting a stacked installation of soft, hand-dyed organic mattresses of varied colors.",
      image: "assets/photos/1.jpg",
    },
    {
      id: "rug-gallery",
      title: "The Rug Gallery",
      category: "bespoke",
      location: "London, UK",
      scale: "1,800 sq. ft.",
      materials: "Jute, Silk, Hand-knotted Wool",
      duration: "6 Months",
      description: "An exclusive collection of vertically rolled custom rugs, showcasing varied textures, weaves, and natural dye colors.",
      image: "assets/photos/8.jpg",
    },
  ],

  testimonials: [
    {
      quote:
        "Beautiful collection!! I needed curtains and sofa material.... Was a really tough choice amongst all the amazing designs... Must visit store.. Thank u Deepa and team!",
      author: "Ms. Manisha",
      project: "Google Maps",
    },
    {
      quote:
        "I loved the vibe of the experience center, attention to detail and customer service! Finally, an interior design studio that is reliable & up for the challenge. Thank you so much for making the interiors exactly what I imagined… grateful.",
      author: "Mr. Ambar",
      project: "Google Maps",
    },
    {
      quote:
        "Studio shades did excellent work for me at my new home. They have a wide variety of catalogues to choose from. Their finishing and tailoring is very good. Highly recommend them ! Thank you Deepa for all the guidance and patience you had with us. You have a great team!!",
      author: "Ms. Meghana",
      project: "Google Maps",
    },
    {
      quote:
        "Great experience!!! Loved my tapestry, all thanks to Deepa's expertise and insight!! I am very happy and content with the end result!!",
      author: "Ms. Meena",
      project: "Google Maps",
    },
    {
      quote:
        "Was very happy I chose Studio shades, Deepa took a lot of effort and time to curate a collection for our home, was very happy with the variety and selection. Thank you Deepa!!!!",
      author: "Ms. Lara",
      project: "Google Maps",
    },
    {
      quote:
        "Thanks Deepa for being so dedicated and working tirelessly  in making my house look so beautiful. Lovely collection of all home decor under one roof.",
      author: "Ms. Eva",
      project: "Google Maps",
    },
  ],

  credentials: [
    {
      year: "2025",
      title: "Residential Project of the Year",
      issuer: "AD Spain Design Awards",
    },
    {
      year: "2024",
      title: "Best Boutique Commercial Space",
      issuer: "Elle Decor Awards",
    },
    {
      year: "2023",
      title: "Pinnacle Excellence in Curation",
      issuer: "Luxury Living Expo",
    },
    {
      year: "2021",
      title: "Emerging Designer Award",
      issuer: "Milan Design Week",
    },
  ],
};

// Export to window object for global accessibility
window.AppData = AppData;
