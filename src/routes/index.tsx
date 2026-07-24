import { createFileRoute, Link } from "@tanstack/react-router";
import storeInterior from "../assets/store-interior.jpg";
import spices from "../assets/spices.jpg";
import snacks from "../assets/snacks.jpg";
import grains from "../assets/grains.jpg";
import household from "../assets/household.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ApniDukaan — Kanpur's Trusted Kirana Store" },
      { name: "description", content: "Visit ApniDukaan in Kanpur, UP for fresh spices, grains, snacks, and daily household essentials. Ghar jaisa bharosa since 1994." },
      { property: "og:title", content: "ApniDukaan — Kanpur's Trusted Kirana Store" },
      { property: "og:description", content: "Visit ApniDukaan in Kanpur, UP for fresh spices, grains, snacks, and daily household essentials." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-spice-rust/10 px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 bg-spice-rust rounded-full flex items-center justify-center text-heritage-cream font-display text-xl">A</div>
          <span className="font-display text-2xl tracking-tight text-spice-rust">ApniDukaan</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <Link to="/" className="hover:text-spice-rust transition-colors">Home</Link>
          <Link to="/about" className="hover:text-spice-rust transition-colors">Our Story</Link>
          <a href="#essentials" className="hover:text-spice-rust transition-colors">Essentials</a>
          <a href="#visit" className="hover:text-spice-rust transition-colors">Contact</a>
        </div>
        <Link
          to="/about"
          className="bg-spice-rust text-heritage-cream px-5 py-2 rounded-full text-sm font-semibold hover:bg-spice-rust/90 transition-all"
        >
          Visit Store
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-leaf-green font-semibold mb-4 bg-leaf-green/5 px-3 py-1 rounded-full text-xs uppercase tracking-tighter">
              <span className="size-1.5 bg-leaf-green rounded-full animate-pulse"></span>
              Serving Kanpur since 1994
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.9] text-foreground mb-6">
              Ghar Jaisa <br />
              <span className="text-spice-rust">Bharosa.</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-md mb-8 leading-relaxed">
              From hand-ground spices to daily fresh essentials, we bring the warmth of a traditional Kanpur kirana to your kitchen.
            </p>
            <div className="flex gap-4">
              <a
                href="#essentials"
                className="inline-flex items-center justify-center bg-leaf-green text-heritage-cream px-8 py-4 rounded-xl font-bold shadow-xl shadow-leaf-green/20 hover:-translate-y-1 transition-transform"
              >
                See Today's Fresh Arrivals
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 -right-12 size-48 bg-marigold/20 rounded-full blur-3xl"></div>
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden outline-1 -outline-offset-1 outline-black/5 shadow-2xl relative z-10">
              <img
                src={storeInterior}
                alt="Warm interior of ApniDukaan with wooden shelves, spice jars, and brass weighing scale"
                width={1200}
                height={1408}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
              <p className="font-display italic text-spice-rust text-lg">"The best mustard oil in the city, just like my grandmother used to buy."</p>
              <p className="text-xs mt-3 font-semibold uppercase opacity-50">— Local Resident</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section id="essentials" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl mb-2">Daily Essentials</h2>
              <p className="text-foreground/50">Handpicked quality for your household</p>
            </div>
            <span className="text-spice-rust font-bold border-b-2 border-spice-rust/20 hover:border-spice-rust transition-colors pb-1 cursor-pointer">View All</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <div className="aspect-square bg-heritage-cream rounded-2xl mb-4 overflow-hidden group-hover:scale-[0.98] transition-transform">
                <img
                  src={spices}
                  alt="Baskets of vibrant Indian spices including turmeric, chili, and cumin"
                  width={816}
                  height={816}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold">Pure Spices</h3>
              <p className="text-sm text-foreground/60">Ground weekly in-house</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square bg-heritage-cream rounded-2xl mb-4 overflow-hidden group-hover:scale-[0.98] transition-transform">
                <img
                  src={snacks}
                  alt="Fresh local snacks, samosas, and namkeen in glass jars"
                  width={816}
                  height={816}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold">Kanpuri Namkeen</h3>
              <p className="text-sm text-foreground/60">Authentic local flavors</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square bg-heritage-cream rounded-2xl mb-4 overflow-hidden group-hover:scale-[0.98] transition-transform">
                <img
                  src={grains}
                  alt="Premium basmati rice and organic lentils in burlap bags"
                  width={816}
                  height={816}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold">Pantry Staples</h3>
              <p className="text-sm text-foreground/60">Grains, oils, and pulses</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square bg-heritage-cream rounded-2xl mb-4 overflow-hidden group-hover:scale-[0.98] transition-transform">
                <img
                  src={household}
                  alt="Classic household cleaning supplies and daily utility items"
                  width={816}
                  height={816}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold">Home Needs</h3>
              <p className="text-sm text-foreground/60">Quality cleaning & care</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Story Section */}
      <section id="about" className="py-24 px-6 bg-leaf-green text-heritage-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-display text-5xl leading-tight">Started as a wooden cart, now your neighborhood's heart.</h2>
              <div className="h-px bg-heritage-cream/20 w-24"></div>
              <p className="text-heritage-cream/80 leading-relaxed text-lg">
                Founded in the bustling lanes of Kanpur, ApniDukaan was built on a simple promise: never sell something you wouldn't serve to your own children.
              </p>
              <p className="text-heritage-cream/80 leading-relaxed text-lg">
                Three decades later, we still weigh every gram with the same honesty. We aren't just a store; we are part of your morning chai, your festive feasts, and your daily rituals.
              </p>
              <div className="flex gap-12 pt-4">
                <div>
                  <div className="font-display text-3xl text-marigold">30+</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Years</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-marigold">1200+</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Products</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-marigold">5k+</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Families</div>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center bg-heritage-cream text-leaf-green px-8 py-4 rounded-xl font-bold hover:bg-heritage-cream/90 transition-colors"
                >
                  Read Our Full Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden outline-1 -outline-offset-1 outline-white/10">
                <img
                  src={storeInterior}
                  alt="ApniDukaan store interior with neatly arranged grains and spices"
                  width={1200}
                  height={1408}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 size-40 bg-spice-rust rounded-full flex items-center justify-center text-center p-4 shadow-2xl rotate-12 hover:rotate-0 transition-transform">
                <span className="font-display text-sm leading-tight">Trusted by Generations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit / Footer CTA */}
      <section id="visit" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Come visit us today.</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-10 text-lg">
            We're right here in Kanpur, ready with a warm smile and everything your home needs. Drop by or call ahead — we love seeing our neighbors.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-spice-rust mb-2">Address</p>
              <p className="text-sm text-foreground/80">14/122 Civil Lines,<br />Near Green Park Stadium,<br />Kanpur, UP 208001</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-spice-rust mb-2">Open Hours</p>
              <p className="text-sm text-foreground/80">Mon — Sat: 7:00 AM — 10:00 PM<br />Sunday: 9:00 AM — 2:00 PM</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-spice-rust mb-2">Connect</p>
              <p className="text-sm text-foreground/80">+91 512 2345 678<br />namaste@apnidukaan.in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-heritage-cream/50 py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 bg-spice-rust rounded-full"></div>
              <span className="font-display text-xl text-heritage-cream uppercase tracking-tighter">ApniDukaan</span>
            </div>
            <p className="max-w-sm mb-8">
              The pride of Kanpur's kitchens. Visit us for the freshest ingredients and the warmest service in Uttar Pradesh.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-white/10 grid place-items-center hover:bg-white/5 transition-colors" aria-label="Facebook">
                <span className="text-xs font-bold">FB</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-white/10 grid place-items-center hover:bg-white/5 transition-colors" aria-label="Instagram">
                <span className="text-xs font-bold">IG</span>
              </a>
              <a href="https://wa.me/915122345678" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-white/10 grid place-items-center hover:bg-white/5 transition-colors" aria-label="WhatsApp">
                <span className="text-xs font-bold">WA</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-heritage-cream font-bold mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm">
              <li>14/122 Civil Lines</li>
              <li>Near Green Park Stadium</li>
              <li>Kanpur, UP 208001</li>
              <li className="text-marigold pt-2">Open 7:00 AM — 10:00 PM</li>
            </ul>
          </div>
          <div>
            <h4 className="text-heritage-cream font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-heritage-cream transition-colors">Our Story</Link></li>
              <li><a href="#essentials" className="hover:text-heritage-cream transition-colors">Daily Essentials</a></li>
              <li><a href="#visit" className="hover:text-heritage-cream transition-colors">Location</a></li>
              <li><Link to="/" className="hover:text-heritage-cream transition-colors">Home</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs">
          <p>&copy; 2024 ApniDukaan Kanpur. Handcrafted with love.</p>
          <p>Made for the neighborhood.</p>
        </div>
      </footer>
    </div>
  );
}
