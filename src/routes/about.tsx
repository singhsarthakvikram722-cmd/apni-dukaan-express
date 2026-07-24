import { createFileRoute, Link } from "@tanstack/react-router";
import founder from "../assets/founder.jpg";
import storeInterior from "../assets/store-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — ApniDukaan Kanpur" },
      { name: "description", content: "Discover the story of ApniDukaan, a neighborhood general store in Kanpur, Uttar Pradesh built on trust, quality, and three generations of serving the community." },
      { property: "og:title", content: "Our Story — ApniDukaan Kanpur" },
      { property: "og:description", content: "Three generations of serving Kanpur with fresh spices, grains, and daily essentials." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
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
          <a href="/" className="hover:text-spice-rust transition-colors">Essentials</a>
          <a href="/" className="hover:text-spice-rust transition-colors">Contact</a>
        </div>
        <Link
          to="/"
          className="bg-spice-rust text-heritage-cream px-5 py-2 rounded-full text-sm font-semibold hover:bg-spice-rust/90 transition-all"
        >
          Back Home
        </Link>
      </nav>

      {/* Hero Header */}
      <section className="px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-spice-rust text-sm font-semibold uppercase tracking-widest mb-4">Est. 1994</span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
            More than a dukaan. <br />
            <span className="text-leaf-green">A part of Kanpur.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            ApniDukaan began with one man's belief that every neighbor deserves honest quality and a friendly smile. That belief has been our recipe for over three decades.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="font-display text-4xl md:text-5xl leading-tight">A promise passed down through generations.</h2>
            <p className="text-foreground/70 leading-relaxed text-lg">
              In the busy lanes of Kanpur, where the aroma of fresh chai blends with the sound of bicycles and friendly bargaining, ApniDukaan opened its doors as a small wooden cart. Day after day, we earned the trust of our neighbors by selling only what we would bring to our own table.
            </p>
            <p className="text-foreground/70 leading-relaxed text-lg">
              Over the years, the cart became a shop, the shop became a landmark, and the customers became family. Children who once came with their grandparents now bring their own little ones. Through every festival, every season, and every change, we have stayed true to one simple rule: quality first, always.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-foreground/10">
              <div>
                <div className="font-display text-3xl text-spice-rust">30+</div>
                <div className="text-xs uppercase tracking-widest text-foreground/50">Years of Trust</div>
              </div>
              <div>
                <div className="font-display text-3xl text-spice-rust">1200+</div>
                <div className="text-xs uppercase tracking-widest text-foreground/50">Products</div>
              </div>
              <div>
                <div className="font-display text-3xl text-spice-rust">5000+</div>
                <div className="text-xs uppercase tracking-widest text-foreground/50">Families</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden outline-1 -outline-offset-1 outline-black/5 shadow-2xl">
              <img
                src={founder}
                alt="Friendly founder of ApniDukaan standing behind the traditional shop counter"
                width={800}
                height={1008}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-spice-rust text-heritage-cream p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="font-display italic text-lg">"A shop is built on bricks, but a dukaan is built on trust."</p>
              <p className="text-xs mt-3 font-semibold uppercase opacity-70">— ApniDukaan Family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Process Section */}
      <section className="bg-leaf-green text-heritage-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">How we choose what goes on our shelves.</h2>
            <p className="text-heritage-cream/70 max-w-2xl mx-auto text-lg">
              Every product has a story. We make sure it's one worth sharing with your family.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <div className="font-display text-5xl text-marigold">01</div>
              <h3 className="font-display text-2xl">Source with Care</h3>
              <p className="text-heritage-cream/70 leading-relaxed">
                We work with local UP farmers and trusted distributors to bring you fresh grains, pulses, and spices straight from the region.
              </p>
            </div>
            <div className="space-y-4">
              <div className="font-display text-5xl text-marigold">02</div>
              <h3 className="font-display text-2xl">Check by Hand</h3>
              <p className="text-heritage-cream/70 leading-relaxed">
                Before anything reaches the shelf, we inspect it ourselves. No stale stock, no compromises — just the quality our neighbors expect.
              </p>
            </div>
            <div className="space-y-4">
              <div className="font-display text-5xl text-marigold">03</div>
              <h3 className="font-display text-2xl">Price with Honesty</h3>
              <p className="text-heritage-cream/70 leading-relaxed">
                Fair prices are part of our promise. We believe good essentials shouldn't come with a heavy cost for the families we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Image / Community Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden outline-1 -outline-offset-1 outline-black/5 shadow-2xl mb-12">
            <img
              src={storeInterior}
              alt="ApniDukaan store interior filled with spices, grains, and daily essentials"
              width={1200}
              height={1408}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl leading-tight mb-6">For Kanpur, by Kanpur.</h2>
              <p className="text-foreground/70 leading-relaxed text-lg">
                From the busy mornings when households rush in for fresh milk and bread, to the festive evenings when customers buy bulk spices for family feasts, ApniDukaan has been part of countless everyday stories.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-spice-rust/10 flex items-center justify-center text-spice-rust font-bold flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-foreground">Freshly stocked daily</h4>
                  <p className="text-sm text-foreground/60">New arrivals every morning, so you get the best pick.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-spice-rust/10 flex items-center justify-center text-spice-rust font-bold flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-foreground">Local UP brands</h4>
                  <p className="text-sm text-foreground/60">We proudly stock regional favorites you grew up with.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-spice-rust/10 flex items-center justify-center text-spice-rust font-bold flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-foreground">Friendly service</h4>
                  <p className="text-sm text-foreground/60">We remember your name, your order, and your trust.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="bg-heritage-cream py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">We'd love to see you.</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-10 text-lg">
            Whether you need a quick bag of atta or want to stock up for the week, walk in and experience the warmth of a true Kanpur dukaan.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-spice-rust mb-2">Address</p>
              <p className="text-sm text-foreground/80">4/247, Ranighat Gaushala,<br />Purana Kanpur,<br />Kanpur, UP 208001</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-spice-rust mb-2">Open Hours</p>
              <p className="text-sm text-foreground/80">Mon — Sat: 7:00 AM — 10:00 PM<br />Sunday: 9:00 AM — 2:00 PM</p>
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
              <li>4/247, Ranighat Gaushala</li>
              <li>Purana Kanpur</li>
              <li>Kanpur, UP 208001</li>
              <li className="text-marigold pt-2">Open 7:00 AM — 10:00 PM</li>
            </ul>
          </div>
          <div>
            <h4 className="text-heritage-cream font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-heritage-cream transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-heritage-cream transition-colors">Our Story</Link></li>
              <li><a href="/#essentials" className="hover:text-heritage-cream transition-colors">Daily Essentials</a></li>
              <li><a href="/#visit" className="hover:text-heritage-cream transition-colors">Location</a></li>
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
