import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-rs-white/90 backdrop-blur border-b border-rs-rule/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="display text-lg tracking-tight">
            REACTable<span className="text-rs-blue">.</span>
          </span>
          <span className="hidden md:inline eyebrow">studios</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="eyebrow hover:text-rs-ink">Services</Link>
          <Link href="/work" className="eyebrow hover:text-rs-ink">Work</Link>
          <Link href="/books" className="eyebrow hover:text-rs-ink">Books</Link>
          <Link href="/field-journals" className="eyebrow hover:text-rs-ink">Field Journals</Link>
          <Link href="/about" className="eyebrow hover:text-rs-ink">About</Link>
        </nav>
        <Link href="/contact" className="btn-primary">Start a project</Link>
      </div>
    </header>
  );
}
