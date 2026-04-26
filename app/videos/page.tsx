import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Videos — REACTable Studios",
  description: "Coming soon.",
};

export default function Page() {
  return (
    <>
      <Nav />
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 min-h-[60vh]">
        <div className="eyebrow">Videos</div>
        <h1 className="display mt-6 text-5xl md:text-7xl">
          Coming soon<span className="text-rs-orange">.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-rs-ink/70 leading-relaxed">
          This section is on the studio roadmap. In the meantime, get in touch and
          we'll tell you what's possible.
        </p>
        <div className="mt-10 flex gap-3">
          <Link href="/contact" className="btn-primary">Start a project</Link>
          <Link href="/" className="btn-ghost">Back home</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
