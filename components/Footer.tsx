import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-rs-ink text-rs-white mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="display text-3xl md:text-4xl">
              REACTable<span className="text-rs-blue">.</span>
            </div>
            <p className="mt-6 max-w-md text-rs-mute leading-relaxed">
              Full-service marketing studio. Brand, web, SEO, GEO, AI-ready content,
              and physical product — all under one roof.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="btn-primary">Start a project</Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-rs-mute">Studio</div>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services" className="hover:text-rs-blue">Services</Link></li>
              <li><Link href="/work" className="hover:text-rs-blue">Work</Link></li>
              <li><Link href="/books" className="hover:text-rs-blue">Books</Link></li>
              <li><Link href="/videos" className="hover:text-rs-blue">Videos</Link></li>
              <li><Link href="/field-journals" className="hover:text-rs-blue">Field Journals</Link></li>
              <li><Link href="/about" className="hover:text-rs-blue">About</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-rs-mute">Sister business</div>
            <a
              href="https://www.reactescaperooms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 group"
            >
              <div className="display text-2xl group-hover:text-rs-orange transition-colors">
                REACT Premium Escape Rooms
              </div>
              <div className="mt-2 text-sm text-rs-mute">
                Ten years of premium live entertainment in Connecticut.
                Our flagship case study, and our proof of concept.
              </div>
              <div className="mt-3 eyebrow text-rs-blue group-hover:text-rs-orange">
                reactescaperooms.com →
              </div>
            </a>
          </div>
        </div>

        <div className="rule border-rs-mute/20 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="eyebrow text-rs-mute">© REACTable Studios. Built in Connecticut.</div>
          <div className="eyebrow text-rs-mute">Logo to souvenir.</div>
        </div>
      </div>
    </footer>
  );
}
