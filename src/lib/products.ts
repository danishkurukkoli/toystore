export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  ageGroup: string;
  description: string;
  highlights: string[];
  stock: number;
};

export const categories = [
  "All",
  "Building Blocks",
  "Soft Toys",
  "Action Figures",
  "Dolls & Playsets",
  "Remote Control",
  "Educational",
  "Puzzles & Board Games",
  "Outdoor",
] as const;

export const products: Product[] = [
  {
    id: "1",
    slug: "brickmaster-city-builder-500pc",
    name: "BrickMaster City Builder 500pc Set",
    category: "Building Blocks",
    price: 1299,
    mrp: 1799,
    rating: 4.6,
    reviews: 312,
    ageGroup: "6+ years",
    description:
      "Build an entire mini city with this 500-piece interlocking brick set. Includes roads, buildings, trees, and mini figures. Compatible with most major brick brands.",
    highlights: [
      "500 durable ABS plastic pieces",
      "Includes 4 mini figures",
      "Boosts spatial reasoning & creativity",
      "Compatible with other major brick sets",
    ],
    stock: 24,
  },
  {
    id: "2",
    slug: "cuddlekins-plush-teddy-bear",
    name: "Cuddlekins Plush Teddy Bear (16 inch)",
    category: "Soft Toys",
    price: 649,
    mrp: 899,
    rating: 4.8,
    reviews: 540,
    ageGroup: "0+ years",
    description:
      "Ultra-soft huggable teddy bear made from hypoallergenic plush fabric. Safe for newborns and a perfect nap-time companion.",
    highlights: [
      "Hypoallergenic soft plush",
      "Machine washable",
      "16 inch premium stitching",
      "Certified non-toxic dyes",
    ],
    stock: 48,
  },
  {
    id: "3",
    slug: "galaxy-guardian-action-figure",
    name: "Galaxy Guardian Action Figure with Accessories",
    category: "Action Figures",
    price: 799,
    mrp: 999,
    rating: 4.5,
    reviews: 201,
    ageGroup: "4+ years",
    description:
      "12 points of articulation, glow-in-the-dark armor, and 5 interchangeable weapons. Every guardian comes with a display stand.",
    highlights: [
      "12 points of articulation",
      "Glow-in-the-dark parts",
      "5 interchangeable accessories",
      "Includes display stand",
    ],
    stock: 33,
  },
  {
    id: "4",
    slug: "sunshine-dream-dollhouse",
    name: "Sunshine Dream 3-Storey Dollhouse Playset",
    category: "Dolls & Playsets",
    price: 2499,
    mrp: 3299,
    rating: 4.7,
    reviews: 176,
    ageGroup: "3+ years",
    description:
      "A 3-storey dollhouse with working elevator, furniture for 6 rooms, and LED fairy lights. Easy tool-free assembly.",
    highlights: [
      "3 storeys, 6 furnished rooms",
      "Working toy elevator",
      "Battery LED fairy lights included",
      "Tool-free snap assembly",
    ],
    stock: 12,
  },
  {
    id: "5",
    slug: "turbo-racer-rc-car",
    name: "Turbo Racer 4WD Remote Control Car",
    category: "Remote Control",
    price: 1899,
    mrp: 2499,
    rating: 4.4,
    reviews: 289,
    ageGroup: "8+ years",
    description:
      "High-speed 4WD RC car with all-terrain grip tyres, 2.4GHz remote for interference-free control, and a 20-minute runtime per charge.",
    highlights: [
      "Reaches up to 20 km/h",
      "2.4GHz anti-interference remote",
      "All-terrain grip tyres",
      "Rechargeable battery included",
    ],
    stock: 19,
  },
  {
    id: "6",
    slug: "little-scientist-chemistry-kit",
    name: "Little Scientist Chemistry Lab Kit",
    category: "Educational",
    price: 1099,
    mrp: 1399,
    rating: 4.6,
    reviews: 158,
    ageGroup: "8+ years",
    description:
      "30+ safe, hands-on experiments to spark curiosity in chemistry. Includes lab goggles, beakers, and a full illustrated guidebook.",
    highlights: [
      "30+ guided experiments",
      "Includes safety goggles",
      "Non-toxic reagents",
      "Illustrated step-by-step guidebook",
    ],
    stock: 40,
  },
  {
    id: "7",
    slug: "wooden-shape-sorter-puzzle",
    name: "Wooden Shape Sorter Puzzle Cube",
    category: "Educational",
    price: 449,
    mrp: 599,
    rating: 4.7,
    reviews: 410,
    ageGroup: "1+ years",
    description:
      "A classic wooden shape-sorting cube that helps toddlers learn colors, shapes, and fine motor skills through play.",
    highlights: [
      "100% sustainably sourced wood",
      "12 shapes, 6 colors",
      "Smooth sanded edges",
      "Non-toxic water-based paint",
    ],
    stock: 60,
  },
  {
    id: "8",
    slug: "kingdom-quest-1000pc-jigsaw",
    name: "Kingdom Quest 1000pc Jigsaw Puzzle",
    category: "Puzzles & Board Games",
    price: 549,
    mrp: 699,
    rating: 4.5,
    reviews: 92,
    ageGroup: "10+ years",
    description:
      "A stunning 1000-piece fantasy castle jigsaw puzzle printed on premium thick board for a satisfying, long-lasting build.",
    highlights: [
      "1000 precision-cut pieces",
      "Premium thick puzzle board",
      "Finished size 70x50 cm",
      "Poster reference included",
    ],
    stock: 27,
  },
  {
    id: "9",
    slug: "snakes-ladders-family-boardgame",
    name: "Snakes & Ladders Deluxe Family Board Game",
    category: "Puzzles & Board Games",
    price: 349,
    mrp: 449,
    rating: 4.3,
    reviews: 133,
    ageGroup: "4+ years",
    description:
      "A deluxe reimagining of the timeless classic with a foldable board, wooden dice, and 4 painted tokens for family game night.",
    highlights: [
      "Foldable premium game board",
      "4 wooden painted tokens",
      "2 wooden dice included",
      "2-4 players",
    ],
    stock: 55,
  },
  {
    id: "10",
    slug: "skyhopper-drone-kids",
    name: "SkyHopper Mini Drone for Kids",
    category: "Remote Control",
    price: 2199,
    mrp: 2899,
    rating: 4.2,
    reviews: 87,
    ageGroup: "10+ years",
    description:
      "Beginner-friendly mini drone with altitude hold, one-key takeoff/landing, and propeller guards for safe indoor and outdoor flying.",
    highlights: [
      "One-key takeoff & landing",
      "Altitude hold for stable flight",
      "Propeller safety guards",
      "Up to 8 min flight time",
    ],
    stock: 15,
  },
  {
    id: "11",
    slug: "bounce-buddy-space-hopper",
    name: "Bounce Buddy Space Hopper Ball",
    category: "Outdoor",
    price: 599,
    mrp: 799,
    rating: 4.4,
    reviews: 220,
    ageGroup: "3+ years",
    description:
      "A burst-resistant hopper ball with a comfortable grip handle, perfect for backyard bouncing fun and building balance.",
    highlights: [
      "Burst-resistant thick vinyl",
      "Comfortable grip handle",
      "Includes foot pump",
      "Supports up to 50kg",
    ],
    stock: 38,
  },
  {
    id: "12",
    slug: "junior-explorer-tent-tunnel",
    name: "Junior Explorer Pop-Up Tent & Tunnel Set",
    category: "Outdoor",
    price: 1399,
    mrp: 1799,
    rating: 4.6,
    reviews: 145,
    ageGroup: "3+ years",
    description:
      "A pop-up play tent connected to a crawl tunnel — perfect for imaginative indoor or outdoor adventures. Folds flat for storage.",
    highlights: [
      "Instant pop-up assembly",
      "Tent + crawl tunnel combo",
      "Foldable carry bag included",
      "Fire-retardant fabric",
    ],
    stock: 21,
  },
  {
    id: "13",
    slug: "rainbow-stacking-rings",
    name: "Rainbow Stacking Rings for Infants",
    category: "Educational",
    price: 299,
    mrp: 399,
    rating: 4.8,
    reviews: 615,
    ageGroup: "0+ years",
    description:
      "A timeless stacking toy with 8 colorful rings that helps babies develop hand-eye coordination and color recognition.",
    highlights: [
      "8 vibrant BPA-free rings",
      "Stable weighted base",
      "Easy for small hands to grip",
      "Dishwasher safe",
    ],
    stock: 70,
  },
  {
    id: "14",
    slug: "mega-dino-figure-set",
    name: "Mega Dino World Figure Set (12 pcs)",
    category: "Action Figures",
    price: 899,
    mrp: 1199,
    rating: 4.7,
    reviews: 264,
    ageGroup: "3+ years",
    description:
      "12 realistically detailed dinosaur figures ranging from T-Rex to Triceratops, complete with a fold-out jungle playmat.",
    highlights: [
      "12 detailed dinosaur figures",
      "Fold-out jungle playmat",
      "Educational fact cards included",
      "Durable non-toxic plastic",
    ],
    stock: 30,
  },
  {
    id: "15",
    slug: "starlight-princess-doll",
    name: "Starlight Princess Fashion Doll",
    category: "Dolls & Playsets",
    price: 749,
    mrp: 999,
    rating: 4.6,
    reviews: 302,
    ageGroup: "3+ years",
    description:
      "An elegant fashion doll with poseable joints, interchangeable outfits, and a shimmering gown. Comes with a mini hairbrush.",
    highlights: [
      "11 poseable joints",
      "2 interchangeable outfits",
      "Includes mini hairbrush & shoes",
      "Tangle-free rooted hair",
    ],
    stock: 44,
  },
  {
    id: "16",
    slug: "beat-blaster-drum-set",
    name: "Beat Blaster Kids Drum Set",
    category: "Educational",
    price: 1599,
    mrp: 1999,
    rating: 4.3,
    reviews: 76,
    ageGroup: "3+ years",
    description:
      "A 5-piece kids drum kit with adjustable stool, drumsticks, and a cymbal, designed to introduce little ones to rhythm and music.",
    highlights: [
      "5-piece drum kit",
      "Adjustable height stool",
      "Includes drumsticks",
      "Sturdy metal frame",
    ],
    stock: 17,
  },
  {
    id: "17",
    slug: "magnetic-tiles-construction-set",
    name: "Magnetic Tiles Construction Set (60pc)",
    category: "Building Blocks",
    price: 1799,
    mrp: 2299,
    rating: 4.8,
    reviews: 198,
    ageGroup: "3+ years",
    description:
      "60 strong magnetic tiles in vivid translucent colors for endless open-ended building — towers, castles, cars, and more.",
    highlights: [
      "60 strong magnetic tiles",
      "Translucent vivid colors",
      "STEM-certified design",
      "Storage box included",
    ],
    stock: 26,
  },
  {
    id: "18",
    slug: "ocean-friends-bath-squirters",
    name: "Ocean Friends Bath Squirter Set (6pc)",
    category: "Soft Toys",
    price: 399,
    mrp: 549,
    rating: 4.5,
    reviews: 187,
    ageGroup: "0+ years",
    description:
      "6 adorable sea-creature bath squirters that make bath time fun and help develop sensory play skills.",
    highlights: [
      "6 sea-creature designs",
      "Mold-resistant sealed body",
      "Soft squeezable material",
      "BPA & phthalate free",
    ],
    stock: 65,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productImagePath(slug: string) {
  return `/products/${slug}.jpg`;
}
