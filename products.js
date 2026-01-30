// Lord Grimley's Manor - Product Catalog
// This data structure mirrors Shopify's product schema for easy migration

const COLLECTIONS = {
  'clearance-sale': {
    title: 'Clearance Sale',
    handle: 'clearance-sale',
    description: 'Haunting deals from the depths of the crypt. Limited quantities available.',
    image: 'old_site/Clowns-Lord-Grimleys-Manor-2025-web.webp'
  },
  'lord-grimley-exclusives': {
    title: 'Lord Grimley Exclusives',
    handle: 'lord-grimley-exclusives',
    description: 'Exclusive masks and props found nowhere else. Limited editions crafted for true collectors.',
    image: 'old_site/Exclusive-Lord-Grimley-Mask-Category-Halloween-2026.webp'
  },
  'halloween-masks': {
    title: 'Halloween Masks 2026',
    handle: 'halloween-masks',
    description: 'Premium latex Halloween masks featuring zombies, demons, creatures, and licensed horror characters.',
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp'
  },
  'best-sellers': {
    title: 'Mask Best Sellers',
    handle: 'best-sellers',
    description: 'Our most popular masks chosen by fellow horror enthusiasts.',
    image: 'old_site/Lord-Grimley-New-Mask-Category-Halloween-2026.webp'
  },
  'latex-masks': {
    title: 'Latex Masks',
    handle: 'latex-masks',
    description: 'High-quality latex masks with incredible detail and durability.',
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp'
  },
  'gloves-hands': {
    title: 'Gloves & Hands',
    handle: 'gloves-hands',
    description: 'Monster hands, claws, and gloves to complete your transformation.',
    image: 'old_site/Accessory-Category-2020.webp'
  },
  'killer-costumes': {
    title: 'Killer Costumes',
    handle: 'killer-costumes',
    description: 'Full costume sets for the ultimate horror transformation.',
    image: 'old_site/Clowns-Lord-Grimleys-Manor-2025-web.webp'
  },
  'props': {
    title: 'Props & Decor',
    handle: 'props',
    description: 'Haunted house props, animatronics, and spooky decorations.',
    image: 'old_site/Clowns-Lord-Grimleys-Manor-2025-web.webp'
  },
  'halloween-ornaments': {
    title: 'Halloween Ornaments',
    handle: 'halloween-ornaments',
    description: 'Collectible ornaments to haunt your tree year-round.',
    image: 'old_site/Lord-Grimley-Halloween-Ornament-Category-2026.webp'
  },
  'accessories': {
    title: 'Accessories',
    handle: 'accessories',
    description: 'Finishing touches: teeth, eyes, wounds, and more.',
    image: 'old_site/Accessory-Category-2020.webp'
  },
  'home-decor': {
    title: 'Home & Decor',
    handle: 'home-decor',
    description: 'Gothic and horror-themed home decorations.',
    image: 'old_site/Clowns-Lord-Grimleys-Manor-2025-web.webp'
  },
  'collectibles': {
    title: 'Collectibles',
    handle: 'collectibles',
    description: 'Limited edition figures, statues, and collector pieces.',
    image: 'old_site/Trick-Or-Treat-Studios-Killer-Klowns-From-Outer-Space-Lord-Grimley.webp'
  },
  'rare-masks': {
    title: 'Rare Masks',
    handle: 'rare-masks',
    description: 'Hard-to-find and discontinued masks for serious collectors.',
    image: 'old_site/Exclusive-Lord-Grimley-Mask-Category-Halloween-2026.webp'
  },
  'effects': {
    title: 'Special Effects',
    handle: 'effects',
    description: 'Professional FX makeup, prosthetics, and blood effects.',
    image: 'old_site/Effects-Category-2020.webp'
  }
};

const PRODUCTS = [
  // CLEARANCE ITEMS
  {
    id: 1,
    title: 'Kill Her Goats - Goatface Mask',
    handle: 'kill-her-goats-goatface',
    vendor: 'Trick or Treat Studios',
    price: 34.99,
    compareAtPrice: 99.99,
    onSale: true,
    collections: ['clearance-sale', 'latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'From the horror film Kill Her Goats, this highly detailed Goatface mask features realistic texturing and a comfortable fit.',
    tags: ['sale', 'movie-mask', 'latex', 'trick-or-treat-studios']
  },
  {
    id: 2,
    title: 'Trick or Treat Studios - Halloween II Board Game',
    handle: 'halloween-ii-board-game',
    vendor: 'Trick or Treat Studios',
    price: 24.99,
    compareAtPrice: 69.99,
    onSale: true,
    collections: ['clearance-sale', 'collectibles'],
    image: 'old_site/Trick-Or-Treat-Studios-Killer-Klowns-From-Outer-Space-Lord-Grimley.webp',
    description: 'Relive the terror of Halloween II in this strategic board game. 2-6 players.',
    tags: ['sale', 'board-game', 'halloween', 'collectible']
  },
  {
    id: 3,
    title: 'Trick or Treat Studios - Chucky Board Game',
    handle: 'chucky-board-game',
    vendor: 'Trick or Treat Studios',
    price: 24.99,
    compareAtPrice: 69.99,
    onSale: true,
    collections: ['clearance-sale', 'collectibles'],
    image: 'old_site/Trick-Or-Treat-Studios-Killer-Klowns-From-Outer-Space-Lord-Grimley.webp',
    description: 'The Good Guy wants to play! Chucky-themed board game for 2-6 players.',
    tags: ['sale', 'board-game', 'chucky', 'collectible']
  },
  {
    id: 4,
    title: 'Iron Maiden - The Clansman Mask',
    handle: 'iron-maiden-clansman',
    vendor: 'Trick or Treat Studios',
    price: 39.99,
    compareAtPrice: 79.99,
    onSale: true,
    collections: ['clearance-sale', 'latex-masks', 'collectibles'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Eddie as The Clansman from Iron Maiden. Officially licensed latex mask.',
    tags: ['sale', 'iron-maiden', 'eddie', 'latex', 'music']
  },
  {
    id: 5,
    title: 'Iron Maiden - The Wicker Man Mask',
    handle: 'iron-maiden-wicker-man',
    vendor: 'Trick or Treat Studios',
    price: 39.99,
    compareAtPrice: 79.99,
    onSale: true,
    collections: ['clearance-sale', 'latex-masks', 'collectibles'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Eddie as The Wicker Man from Iron Maiden. Officially licensed latex mask.',
    tags: ['sale', 'iron-maiden', 'eddie', 'latex', 'music']
  },
  {
    id: 6,
    title: 'Scooby Doo - Zombie Mask',
    handle: 'scooby-doo-zombie',
    vendor: 'Trick or Treat Studios',
    price: 29.99,
    compareAtPrice: 59.99,
    onSale: true,
    collections: ['clearance-sale', 'latex-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'The classic Zombie from Scooby-Doo on Zombie Island. Officially licensed.',
    tags: ['sale', 'scooby-doo', 'zombie', 'cartoon', 'latex']
  },
  {
    id: 7,
    title: 'Universal Monsters - Werewolf of London',
    handle: 'werewolf-of-london',
    vendor: 'Trick or Treat Studios',
    price: 25.99,
    compareAtPrice: 59.99,
    onSale: true,
    collections: ['clearance-sale', 'latex-masks', 'collectibles'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Classic Universal Monsters Werewolf of London. Officially licensed.',
    tags: ['sale', 'universal-monsters', 'werewolf', 'classic-horror', 'latex']
  },
  {
    id: 8,
    title: 'Scary Stories to Tell in the Dark - Jangly Man',
    handle: 'jangly-man',
    vendor: 'Trick or Treat Studios',
    price: 29.99,
    compareAtPrice: 59.99,
    onSale: true,
    collections: ['clearance-sale', 'latex-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'The terrifying Jangly Man from Scary Stories to Tell in the Dark.',
    tags: ['sale', 'scary-stories', 'movie-mask', 'latex']
  },

  // FEATURED/NEW ARRIVALS
  {
    id: 9,
    title: 'Texas Chainsaw Massacre - Leatherface Deluxe Mask',
    handle: 'leatherface-deluxe-mask',
    vendor: 'Trick or Treat Studios',
    price: 89.99,
    compareAtPrice: null,
    onSale: false,
    featured: true,
    collections: ['best-sellers', 'latex-masks', 'halloween-masks'],
    image: 'old_site/Texas_Chainsaw_Leatherface_2023.webp',
    description: 'Premium deluxe Leatherface mask from The Texas Chainsaw Massacre. Incredibly detailed latex with realistic skin texture.',
    tags: ['leatherface', 'texas-chainsaw', 'horror-icon', 'latex', 'premium']
  },
  {
    id: 10,
    title: 'Beetlejuice - Deluxe Latex Mask with Hair',
    handle: 'beetlejuice-deluxe-mask',
    vendor: 'Trick or Treat Studios',
    price: 79.99,
    compareAtPrice: null,
    onSale: false,
    featured: true,
    collections: ['best-sellers', 'latex-masks', 'halloween-masks'],
    image: 'old_site/Beetlejuice_Order_2025.webp',
    description: 'Its showtime! Deluxe Beetlejuice mask with attached hair. Officially licensed from the Tim Burton classic.',
    tags: ['beetlejuice', 'tim-burton', 'comedy-horror', 'latex', 'premium']
  },
  {
    id: 11,
    title: 'Gremlins 2 - Mogwai Puppet Collection',
    handle: 'gremlins-mogwai-puppets',
    vendor: 'Trick or Treat Studios',
    price: 149.99,
    compareAtPrice: null,
    onSale: false,
    featured: true,
    collections: ['collectibles', 'best-sellers'],
    image: 'old_site/Trick-Or-Treat-Studios-Gremlins-2-New-Batch-Mogwai-Puppets01.webp',
    description: 'Adorable Mogwai hand puppets from Gremlins 2: The New Batch. Officially licensed.',
    tags: ['gremlins', 'mogwai', 'puppet', 'collectible', 'premium']
  },
  {
    id: 12,
    title: '2026 Collection - Premium Latex Masks',
    handle: '2026-collection-masks',
    vendor: 'Lord Grimley Exclusives',
    price: 99.99,
    compareAtPrice: null,
    onSale: false,
    featured: true,
    collections: ['lord-grimley-exclusives', 'latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-New-Mask-Category-Halloween-2026.webp',
    description: 'Exclusive 2026 collection masks only available at Lord Grimleys Manor.',
    tags: ['exclusive', '2026', 'latex', 'limited-edition', 'premium']
  },
  {
    id: 13,
    title: 'Killer Klowns from Outer Space - Deluxe Figure',
    handle: 'killer-klowns-figure',
    vendor: 'Trick or Treat Studios',
    price: 199.99,
    compareAtPrice: null,
    onSale: false,
    featured: true,
    collections: ['collectibles', 'best-sellers'],
    image: 'old_site/Trick-Or-Treat-Studios-Killer-Klowns-From-Outer-Space-Lord-Grimley.webp',
    description: 'Deluxe collectible figure from the cult classic Killer Klowns from Outer Space.',
    tags: ['killer-klowns', 'figure', 'collectible', 'premium']
  },
  {
    id: 14,
    title: 'Professional FX Makeup Collection',
    handle: 'pro-fx-makeup-collection',
    vendor: 'Various',
    price: 49.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['effects', 'accessories'],
    image: 'old_site/Effects-Category-2020.webp',
    description: 'Professional-grade special effects makeup kit. Create realistic wounds, aging, and creature effects.',
    tags: ['fx-makeup', 'prosthetics', 'special-effects', 'professional']
  },
  {
    id: 15,
    title: 'Halloween Horror Ornaments - 2026 Collection',
    handle: 'halloween-ornaments-2026',
    vendor: 'Lord Grimley Exclusives',
    price: 24.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['halloween-ornaments', 'lord-grimley-exclusives'],
    image: 'old_site/Lord-Grimley-Halloween-Ornament-Category-2026.webp',
    description: 'Exclusive 2026 Halloween ornament collection. Perfect for year-round horror decor.',
    tags: ['ornaments', 'exclusive', '2026', 'decor']
  },
  {
    id: 16,
    title: 'Evil Clown Collection - Masks & Props',
    handle: 'evil-clown-collection',
    vendor: 'Various',
    price: 59.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'props', 'halloween-masks'],
    image: 'old_site/Clowns-Lord-Grimleys-Manor-2025-web.webp',
    description: 'Terrifying evil clown masks and props. Multiple styles available.',
    tags: ['clown', 'evil-clown', 'latex', 'props']
  },

  // ZOMBIE MASKS (from screenshot)
  {
    id: 17,
    title: 'Subarctic Zombie - Jordu Schell Latex Mask',
    handle: 'subarctic-zombie',
    vendor: 'Trick or Treat Studios',
    price: 59.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Designed by legendary creature creator Jordu Schell. Highly detailed frozen zombie.',
    tags: ['zombie', 'jordu-schell', 'latex', 'designer']
  },
  {
    id: 18,
    title: 'Crypt Zombie - Jordu Schell Latex Mask',
    handle: 'crypt-zombie',
    vendor: 'Trick or Treat Studios',
    price: 59.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Designed by legendary creature creator Jordu Schell. Decaying crypt dweller.',
    tags: ['zombie', 'jordu-schell', 'latex', 'designer']
  },
  {
    id: 19,
    title: 'Peeled Zombie - NO HAIR Variant Latex Mask',
    handle: 'peeled-zombie-no-hair',
    vendor: 'Trick or Treat Studios',
    price: 49.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Gruesome peeled face zombie. No hair variant for a cleaner look.',
    tags: ['zombie', 'latex', 'gore']
  },
  {
    id: 20,
    title: 'Peeled Zombie - Latex Mask',
    handle: 'peeled-zombie',
    vendor: 'Trick or Treat Studios',
    price: 59.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Gruesome peeled face zombie with attached hair.',
    tags: ['zombie', 'latex', 'gore']
  },
  {
    id: 21,
    title: 'Asmodeus Demon - Half Mask',
    handle: 'asmodeus-demon',
    vendor: 'Trick or Treat Studios',
    price: 31.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Demonic half mask for a terrifying transformation. Allows for eating and drinking.',
    tags: ['demon', 'half-mask', 'latex']
  },
  {
    id: 22,
    title: 'Krampus Night Set - Krampusnacht Half Mask',
    handle: 'krampus-night-set',
    vendor: 'Trick or Treat Studios',
    price: 81.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks', 'collectibles'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Complete Krampus Night set with detailed half mask. Perfect for Krampusnacht celebrations.',
    tags: ['krampus', 'christmas-horror', 'half-mask', 'latex', 'premium']
  },
  {
    id: 23,
    title: 'Sad Pumpkin - Hollow Pumpkin Prop',
    handle: 'sad-pumpkin-prop',
    vendor: 'Lord Grimley Exclusives',
    price: 29.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['props', 'halloween-ornaments'],
    image: 'old_site/Lord-Grimley-Halloween-Ornament-Category-2026.webp',
    description: 'Adorably sad pumpkin prop. Hollow design allows for LED candle placement.',
    tags: ['pumpkin', 'prop', 'decor', 'halloween']
  },
  {
    id: 24,
    title: 'Wicked Pumpkin - Hollow Pumpkin Prop',
    handle: 'wicked-pumpkin-prop',
    vendor: 'Lord Grimley Exclusives',
    price: 29.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['props', 'halloween-ornaments'],
    image: 'old_site/Lord-Grimley-Halloween-Ornament-Category-2026.webp',
    description: 'Wickedly grinning pumpkin prop. Hollow design allows for LED candle placement.',
    tags: ['pumpkin', 'prop', 'decor', 'halloween']
  },
  {
    id: 25,
    title: 'The Glob - TOTS Original Mask',
    handle: 'the-glob-tots-original',
    vendor: 'Trick or Treat Studios',
    price: 69.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks', 'collectibles'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Original design from Trick or Treat Studios. Melting creature horror.',
    tags: ['original', 'tots', 'latex', 'creature']
  },
  {
    id: 26,
    title: 'Gruesome Toothsome Mask',
    handle: 'gruesome-toothsome',
    vendor: 'Trick or Treat Studios',
    price: 54.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Nightmarish grinning creature with oversized teeth. Unsettling and unique.',
    tags: ['creature', 'latex', 'original']
  },
  {
    id: 27,
    title: 'Krampus Night White Variant - Half Mask',
    handle: 'krampus-white-variant',
    vendor: 'Trick or Treat Studios',
    price: 71.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'White variant of the popular Krampus Night half mask.',
    tags: ['krampus', 'christmas-horror', 'half-mask', 'latex', 'variant']
  },
  {
    id: 28,
    title: 'Krampus Night Black Variant - Half Mask',
    handle: 'krampus-black-variant',
    vendor: 'Trick or Treat Studios',
    price: 71.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Black variant of the popular Krampus Night half mask.',
    tags: ['krampus', 'christmas-horror', 'half-mask', 'latex', 'variant']
  },
  {
    id: 29,
    title: 'Rawhide/Scourge Set - Half Mask',
    handle: 'rawhide-scourge-set',
    vendor: 'Trick or Treat Studios',
    price: 61.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Brutal Rawhide/Scourge set with half mask and accessories.',
    tags: ['half-mask', 'latex', 'set']
  },
  {
    id: 30,
    title: 'Rawhead - Half Mask',
    handle: 'rawhead-half-mask',
    vendor: 'Trick or Treat Studios',
    price: 51.99,
    compareAtPrice: null,
    onSale: false,
    collections: ['latex-masks', 'halloween-masks'],
    image: 'old_site/Lord-Grimley-Mask-Category-Halloween-2026.webp',
    description: 'Disturbing Rawhead half mask. Gory and detailed.',
    tags: ['half-mask', 'latex', 'gore']
  }
];

// Helper functions for filtering
function getProductsByCollection(collectionHandle) {
  return PRODUCTS.filter(p => p.collections.includes(collectionHandle));
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

function getSaleProducts() {
  return PRODUCTS.filter(p => p.onSale);
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.includes(q))
  );
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COLLECTIONS, PRODUCTS, getProductsByCollection, getFeaturedProducts, getSaleProducts, searchProducts };
}
