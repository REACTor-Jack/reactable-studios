import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Active Entertainment — REACTable Studios",
  description:
    "Active entertainment for brands and businesses. Powered by ten years of operating REACT Premium Escape Rooms.",
  openGraph: {
    title: "Active Entertainment — REACTable Studios",
    description: "Active entertainment for brands and businesses.",
    type: "website",
  },
};

const services = [
  { num: "01", title: "Brand", body: "Logo, identity system, voice. The work that decides whether you get remembered." },
  { num: "02", title: "Web", body: "Sites that load fast, rank well, and convert. Built for humans and the agents that read for them." },
  { num: "03", title: "SEO + GEO", body: "Search optimization for Google. Generative Engine Optimization for ChatGPT, Perplexity, and the agents replacing search." },
  { num: "04", title: "Content", body: "Editorial, video, social. AI-ready by default — structured to be quoted, summarized, and cited." },
  { num: "05", title: "Campaigns", body: "Email, paid social, retargeting, the full funnel. Built for repeat-cadence businesses with seasons to sell." },
  { num: "06", title: "Physical product", body: "Custom signs, branded swag, 3D-printed souvenirs. The thing your customer takes home with your name on it." },
];

const principles = [
  { k: "Logo to souvenir", v: "Most agencies stop at the deliverable. We finish the job — including the thing your customer keeps." },
  { k: "Authority is the moat", v: "Ten years operating REACT Premium Escape Rooms means we know what marketing actually has to do — fill seats, every weekend, for a decade." },
  { k: "AI-ready by default", v: "Every page we ship is structured to be readable by humans, search engines, and the agents that are quietly replacing both." },
  { k: "Productized pricing", v: "From $999. Real numbers, real scopes. No discovery-call mystery boxes." },
];

export default function EntertainmentPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-28 md:pt-32 md:pb-40">
          <div className="eyebrow flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-rs-ink" />
            REACTable Studios — est. 2026
          </div>

          <h1 className="display mt-8 text-[clamp(3rem,9vw,9rem)]">
            Logo to <span className="text-rs-orange">souvenir</span>.
            <br />
            We build the <span className="text-rs-blue">whole</span> campaign.
          </h1>

          <p className="mt-10 max-w-2xl text-xl md:text-2xl leading-snug text-rs-ink/80">
            Full-service marketing studio. Brand, web, SEO, GEO, AI-ready content, and
            physical product — all under one roof. Powered by ten years of operating
            authority from REACT Premium Escape Rooms.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Start a project — from $999
            </Link>
            <Link href="/work" className="btn-ghost">See the work</Link>
          </div>

          <div className="mt-24 flex items-center gap-3 eyebrow scroll-tick">
            <span>Scroll</span>
            <span>↓</span>
          </div>
        </div>

        {/* large faint mark */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-20 display text-[40rem] leading-none text-rs-blue/5 select-none hidden md:block"
        >
          R
        </div>
      </section>

      {/* SCROLL-TELL: the offer pipeline */}
      <section className="bg-rs-ink text-rs-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
          <div className="eyebrow text-rs-blue">The pipeline</div>
          <h2 className="display mt-4 text-4xl md:text-6xl max-w-4xl">
            Six disciplines. One roof. One invoice.
          </h2>
          <p className="mt-6 max-w-2xl text-rs-mute">
            Hire one studio instead of stitching six. The handoffs that kill most
            marketing programs don't exist here — there are no handoffs.
          </p>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rs-rule">
            {services.map((s) => (
              <div key={s.num} className="bg-rs-ink p-8 group hover:bg-rs-rule transition-colors">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-rs-blue text-sm">{s.num}</span>
                  <h3 className="display text-2xl">{s.title}</h3>
                </div>
                <p className="mt-4 text-rs-mute leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-rs-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="eyebrow">Proof</div>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                Our flagship case study is also the company that built us.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-xl leading-snug">
                <span className="font-mono text-rs-blue">REACT Premium Escape Rooms</span>{" "}
                has filled rooms in Windsor Locks, Connecticut every weekend for ten years.
                The brand, the site, the SEO, the campaigns, the swag, the live-event
                signage — all of it built and run in-house.
              </p>
              <p className="mt-6 text-lg text-rs-ink/70 leading-relaxed">
                REACTable Studios is the studio behind that work, opened up for hire.
                Every capability we sell, we already use ourselves — every weekend,
                under live commercial pressure, against real revenue numbers.
              </p>
              <a
                href="https://www.reactescaperooms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-10"
              >
                See REACT escape rooms →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-rs-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
          <div className="eyebrow">Principles</div>
          <h2 className="display mt-4 text-4xl md:text-5xl max-w-3xl">
            How we think about marketing.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-12">
            {principles.map((p) => (
              <div key={p.k} className="border-t border-rs-ink pt-6">
                <h3 className="display text-2xl">
                  {p.k}<span className="text-rs-orange">.</span>
                </h3>
                <p className="mt-3 text-rs-ink/75 leading-relaxed">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPALS */}
      <section className="bg-rs-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
          <div className="eyebrow">The studio</div>
          <h2 className="display mt-4 text-4xl md:text-5xl max-w-3xl">
            Two principals. Every project, every time.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="border-t-2 border-rs-blue pt-8">
              <div className="eyebrow text-rs-blue">REACTor Jack</div>
              <h3 className="display text-3xl mt-3">
                Strategy, build, fabrication, copy.
              </h3>
              <p className="mt-5 text-rs-ink/75 leading-relaxed">
                Co-founder of REACT Premium Escape Rooms. Author of the Raiders and
                Weatherman fiction projects. Builds in code and in 3D-printed plastic.
                Twenty years thinking about how to get strangers to do something on
                purpose.
              </p>
            </div>
            <div className="border-t-2 border-rs-orange pt-8">
              <div className="eyebrow text-rs-orange">REACTor Annie</div>
              <h3 className="display text-3xl mt-3">
                Design, handcraft, social, voice.
              </h3>
              <p className="mt-5 text-rs-ink/75 leading-relaxed">
                Design lead at REACT for ten years. Built half a dozen client sites
                across WordPress, Wix, and Square. Operates Honey B Sign Co. — the
                handcraft catalog that becomes the souvenir tier on every studio
                campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rs-blue text-rs-ink">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="eyebrow">Start a project</div>
          <h2 className="display mt-4 text-5xl md:text-7xl max-w-4xl">
            Tell us what you're selling.
            <br />
            We'll tell you what the campaign looks like.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed">
            Productized pricing from $999. Real scopes, real numbers, no
            discovery-call mystery boxes. Reply within one business day.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary bg-rs-ink text-rs-white">
              Start a project
            </Link>
            <Link href="/services" className="btn-ghost">See services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
