import salonHeroInterior from "../assets/salon_hero_interior.jpg";

export const siteData = {
  name: "PR MEN DOT",
  subtitle: "SALOON & BEAUTY",
  location: "Madhurawada, Visakhapatnam",
  fullAddress: "Raja Rajeswari Temple, Mithilapuri Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530041",
  landmark: "Near Raja Rajeswari Temple, Mithilapuri Colony",
  phone: "7947138343",
  displayPhone: "+91 79471 38343",
  whatsapp: "917947138343",
  whatsappLink: "https://wa.me/917947138343",
  telLink: "tel:+917947138343",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Pr+Men+Dot+Saloon+and+Beauty+Raja+Rajeswari+Temple+Mithilapuri+Colony+Madhurawada+Visakhapatnam",
  instagram: "https://instagram.com",
  hours: "Open Daily • 8:30 AM – 10:00 PM",
  tagline: "CUT · TRIM · STYLE · CARE",
  established: "EST. / VIZAG",
};

export const serviceCategories = [
  { id: "all", label: "ALL SERVICES", icon: "✂️" },
  { id: "hair", label: "HAIR STYLING & CUTS", icon: "✂" },
  { id: "beard", label: "BEARD GROOMING", icon: "◈" },
  { id: "color", label: "HAIR COLOR & GREY", icon: "◉" },
  { id: "face", label: "FACE CARE & FACIAL", icon: "✧" },
  { id: "spa", label: "HAIR SPA & MASSAGE", icon: "✦" },
  { id: "grooming", label: "MANI-PEDI & WAXING", icon: "≋" },
  { id: "threading", label: "THREADING & DETAIL", icon: "𝄜" },
  { id: "makeup", label: "MAKEUP & GROOM", icon: "✨" }
];

export const services = [
  // --- Hair Styling & Cuts ---
  {
    id: "hair-cut",
    categoryId: "hair",
    tool: "SCISSORS",
    icon: "✂",
    title: "Precision Haircut & Fade",
    price: "₹150",
    duration: "30-40 mins",
    desc: "Sharp scissor cuts & clean fades tailored to your face.",
    items: [
      "Face shape consultation & analysis",
      "Precision scissor / clipper fade",
      "Razor neck cleanup & sideburn detailing",
      "Hair wash & light pomade styling"
    ]
  },
  {
    id: "hair-style",
    categoryId: "hair",
    tool: "COMB",
    icon: "≋",
    title: "Creative Hair Styling & Blow Dry",
    price: "₹180",
    duration: "25-30 mins",
    desc: "Fresh blow-dry & texture that stays styled all day.",
    items: [
      "Thermal blow dry & volume shaping",
      "Matte / high-sheen wax & clay setting",
      "Frizz control & hair mist spray",
      "Occasion / party finishing"
    ]
  },
  {
    id: "hair-kids",
    categoryId: "hair",
    tool: "CARE",
    icon: "✂",
    title: "Kids Haircut & Styling",
    price: "₹120",
    duration: "20-25 mins",
    desc: "Gentle cuts for little champs with zero fuss and big smiles.",
    items: [
      "Patient, kid-friendly handling",
      "Clean scissor trim or clipper cut",
      "Gentle neck clean & hair blow-off",
      "Fun styling finish"
    ]
  },

  // --- Beard Grooming ---
  {
    id: "beard-shape",
    categoryId: "beard",
    tool: "CLIPPER",
    icon: "◈",
    title: "Beard Sculpting & Line-up",
    price: "₹100",
    duration: "20-25 mins",
    desc: "Crisp cheek lines and neat trimming to frame your jaw.",
    items: [
      "Custom length clipper trimming",
      "Precision razor cheek & neck line-up",
      "Nourishing beard oil massage",
      "Moustache wax & alignment"
    ]
  },
  {
    id: "beard-shave",
    categoryId: "beard",
    tool: "RAZOR",
    icon: "◈",
    title: "Classic Hot Towel Shave",
    price: "₹120",
    duration: "25-30 mins",
    desc: "Warm steam, rich foam, and baby-smooth skin.",
    items: [
      "Pre-shave eucalyptus essential oil",
      "Hot steam towel skin softening",
      "Rich lather single-stroke razor shave",
      "Cold towel pore close & aftershave balm"
    ]
  },

  // --- Hair Color ---
  {
    id: "hair-color",
    categoryId: "color",
    tool: "COLOR",
    icon: "◉",
    title: "Global Hair Colour & Gray Coverage",
    price: "₹350",
    duration: "40-50 mins",
    desc: "Ammonia-free natural color with a rich, youthful shine.",
    items: [
      "Shade matching & skin patch check",
      "Root-to-tip ammonia-free application",
      "Deep color lock wash & conditioning",
      "Blow dry & finishing shine"
    ]
  },
  {
    id: "beard-color",
    categoryId: "color",
    tool: "COLOR",
    icon: "◉",
    title: "Beard & Moustache Color",
    price: "₹200",
    duration: "20-25 mins",
    desc: "Quick natural blend to keep your beard looking fresh.",
    items: [
      "Fast-acting natural black/brown dye",
      "Skin barrier protection along cheek lines",
      "Gentle beard shampoo wash",
      "Beard serum finish"
    ]
  },

  // --- Hair Care & Treatments ---
  {
    id: "hair-spa",
    categoryId: "spa",
    tool: "CARE",
    icon: "✦",
    title: "Deep Nourishing Hair Spa & Steam",
    price: "₹450",
    duration: "40-50 mins",
    desc: "Creamy deep conditioning & warm steam for silky hair.",
    items: [
      "Deep scalp clarifying wash",
      "Keratin & argan rich spa cream infusion",
      "Ozone warm steam circulation",
      "15-minute relaxing head massage"
    ]
  },
  {
    id: "hair-treatment",
    categoryId: "spa",
    tool: "CARE",
    icon: "✦",
    title: "Anti-Dandruff & Scalp Detox",
    price: "₹500",
    duration: "40-45 mins",
    desc: "Cooling tea-tree therapy to say goodbye to flakes and itch.",
    items: [
      "Tea-tree exfoliating scalp scrub",
      "Anti-bacterial micro-steam therapy",
      "Deep cleansing zinc scalp wash",
      "Cooling tonic root strengthener"
    ]
  },

  // --- Face Care & Facials ---
  {
    id: "face-detan",
    categoryId: "face",
    tool: "BEAUTY",
    icon: "✧",
    title: "Insta De-Tan & Face Cleanup",
    price: "₹350",
    duration: "30-40 mins",
    desc: "Wipe off sun tan and city pollution for an instant glow.",
    items: [
      "Gentle facial foaming cleanse",
      "Kojic acid & milk protein de-tan pack",
      "Blackhead & whitehead extraction",
      "Pore tightening rose water mist"
    ]
  },
  {
    id: "face-facial",
    categoryId: "face",
    tool: "BEAUTY",
    icon: "✧",
    title: "Gold & Diamond Radiance Facial",
    price: "₹700",
    duration: "50-60 mins",
    desc: "Deep cleanse & golden glow to refresh tired skin.",
    items: [
      "Deep pore scrub & micro-exfoliation",
      "Steam & gentle comedone extraction",
      "15-min lymphatic face & neck massage",
      "Radiance gold peel-off mask & SPF finish"
    ]
  },

  // --- Massage Services ---
  {
    id: "head-massage",
    categoryId: "spa",
    tool: "CARE",
    icon: "✦",
    title: "Stress-Relief Head & Shoulder Massage",
    price: "₹250",
    duration: "25-30 mins",
    desc: "Warm herbal oil massage to melt away all your stress.",
    items: [
      "Choice of warm almond, brahmi or cooling mint oil",
      "Deep scalp acupressure stimulation",
      "Upper back, neck & shoulder knot release",
      "Refreshing dry towel wipe"
    ]
  },

  // --- Manicure & Pedicure Services ---
  {
    id: "mani-pedi",
    categoryId: "grooming",
    tool: "CARE",
    icon: "≋",
    title: "Gentlemen's Deluxe Pedicure & Manicure",
    price: "₹450",
    duration: "40-50 mins",
    desc: "Warm soak, neat nails, and happily pampered hands and feet.",
    items: [
      "Warm antiseptic foot soak with sea salts",
      "Heel scrubbing & callus smoothing",
      "Cuticle push, nail clip & buffing",
      "Cooling foot & calf massage"
    ]
  },

  // --- Waxing Services ---
  {
    id: "waxing",
    categoryId: "grooming",
    tool: "BEAUTY",
    icon: "✧",
    title: "Men's Body Waxing (Arms / Chest / Back)",
    price: "From ₹300",
    duration: "30-45 mins",
    desc: "Quick, painless wax for breezy and smooth skin.",
    items: [
      "Skin prep & soothing powder application",
      "Low-temperature pain-minimizing strip wax",
      "Soothing aloe vera anti-irritation gel",
      "Clean, smooth finish"
    ]
  },

  // --- Threading Services ---
  {
    id: "threading",
    categoryId: "threading",
    tool: "CARE",
    icon: "𝄜",
    title: "Eyebrow & Forehead Threading Detailing",
    price: "₹50",
    duration: "10-15 mins",
    desc: "Neat brow arches and clean forehead detailing in minutes.",
    items: [
      "Precision organic cotton thread work",
      "Natural masculine arch maintenance (no over-thinning)",
      "Forehead & temple stray hair cleanup",
      "Cooling mint astringent lotion"
    ]
  },

  // --- Makeup Services ---
  {
    id: "groom-makeup",
    categoryId: "makeup",
    tool: "BEAUTY",
    icon: "✨",
    title: "Groom & Party Event Makeover",
    price: "₹999",
    duration: "45-60 mins",
    desc: "Camera-ready matte look for your big spotlight day.",
    items: [
      "Skin priming & shine-free base balancing",
      "Dark circle & blemish micro-concealing",
      "Beard & brow definition alignment",
      "Ultra-matte sweat-resistant setting spray"
    ]
  }
];

export const comboOffers = [
  {
    id: "pkg-executive",
    title: "Executive Cut & Beard Grooming",
    price: "₹349",
    originalPrice: "₹490",
    savings: "Save ₹141",
    tag: "MOST POPULAR",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=85",
    idealFor: "Fresh cut & clean beard for everyday confidence",
    features: [
      "Signature Haircut & Scissor Fade",
      "Beard Shaping & Sharp Razor Line-up",
      "Refreshing Hair Wash & Conditioning",
      "Quick 10-Min Stress Relief Head Massage"
    ]
  },
  {
    id: "pkg-detan",
    title: "Royal De-Tan & Skin Refresh",
    price: "₹699",
    originalPrice: "₹1,050",
    savings: "Save ₹351",
    tag: "BEST VALUE",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=85",
    idealFor: "Banish sun tan and city dust for a quick handsome glow",
    features: [
      "Precision Haircut & Custom Styling",
      "Beard Trim or Classic Hot Towel Shave",
      "Insta-Glow Face De-Tan & Blackhead Removal",
      "Cooling Mint Scalp Acupressure"
    ]
  },
  {
    id: "pkg-spa",
    title: "Deep Hair Spa & Scalp Relaxation",
    price: "₹799",
    originalPrice: "₹1,200",
    savings: "Save ₹401",
    tag: "THERAPEUTIC",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85",
    idealFor: "Melt away headache & stress with nourishing warm steam",
    features: [
      "Keratin Nourishing Hair Spa Infusion",
      "Ozone Warm Steam Therapy",
      "20-Min Deep Head & Shoulder Massage",
      "Hair Wash & Professional Blow Dry Setting"
    ]
  },
  {
    id: "pkg-head-to-toe",
    title: "Gentlemen's Complete Care",
    price: "₹1,199",
    originalPrice: "₹1,750",
    savings: "Save ₹551",
    tag: "HEAD TO TOE",
    image: "https://images.unsplash.com/photo-1519014816548-bf7851504fdd?auto=format&fit=crop&w=800&q=85",
    idealFor: "Pampered feet, neat hands, and fresh skin from head to toe",
    features: [
      "Deluxe Antiseptic Pedicure Foot Soak & Scrub",
      "Gentlemen's Hand Grooming Manicure",
      "Insta De-Tan Face Cleanup",
      "Eyebrow & Forehead Threading Detailing"
    ]
  },
  {
    id: "pkg-groom",
    title: "Grand Groom & Event Transformation",
    price: "₹1,999",
    originalPrice: "₹3,100",
    savings: "Save ₹1,101",
    tag: "LUXURY WEDDING",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85",
    idealFor: "The ultimate full-body glow for weddings & life's big moments",
    features: [
      "Master Haircut & Event Blow Dry Styling",
      "Beard Sculpting with Hot Steam Towel Shave",
      "Gold Radiance Deep Cleansing Facial",
      "Deep Nourishing Hair Spa & Steam",
      "Gentlemen's Manicure & Pedicure Grooming"
    ]
  }
];

export const gallery = [
  {
    src: salonHeroInterior,
    tag: "THE SHOP",
    caption: "Signature salon wall art & grooming lounge at Mithilapuri Colony, Madhurawada",
    big: true
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85",
    tag: "GROOMING",
    caption: "Sharp beard sculpting with precision clippers"
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85",
    tag: "THE CUT",
    caption: "Classic fades and custom scissor cuts"
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=85",
    tag: "STYLE",
    caption: "Textured blow dry and all-day hold"
  },
  {
    src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1000&q=85",
    tag: "DETAIL",
    caption: "Crisp neck taper and sharp razor work"
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85",
    tag: "FACIAL & SPA",
    caption: "Skin revitalizing facials and hair spa care"
  }
];

export const testimonials = [
  {
    text: "Best salon experience in Madhurawada! Great atmosphere, extremely clean near Raja Rajeswari temple, and the barber understood exactly the skin fade style I showed.",
    author: "Kiran Varma",
    badge: "Verified Client",
    stars: 5
  },
  {
    text: "Very professional staff and comfortable chairs. Their beard shaping and hot steam cleanup is top-notch. Highly recommended in Vizag.",
    author: "Rohit Reddy",
    badge: "Regular Client",
    stars: 5
  },
  {
    text: "Patience and real attention to detail. Even for kids and seniors they handle with utmost care. Booking on WhatsApp was super easy.",
    author: "Srinivas Rao",
    badge: "Happy Customer",
    stars: 5
  }
];
