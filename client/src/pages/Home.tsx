/*
Prairie Modern Real Estate Editorial design note for this page:
Use grounded asymmetry, deep navy trust fields, warm limestone surfaces, muted sage restoration cues, restrained brass/gold details, roofline geometry, blueprint-inspired borders, refined display typography, and calm conversion-focused interactions. When choosing layout, copy, or motion, ask whether it reinforces or dilutes the Prairie Modern Real Estate Editorial philosophy.
*/

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Hammer,
  Handshake,
  KeyRound,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";

const clientLogo = "/Logos---2026-02-17T145942.935-57b76bd7-206w.webp";
const omadaLogo = "/Omada-Real-Estate-Logo-3c487b75-397w.webp";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663599536941/NcpPGnEXcZwskuvyVZi39a/jnk_hero_prairie_home-oK69XLZ9MtmtmkNBCfv9bJ.webp";
const restorationImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663599536941/NcpPGnEXcZwskuvyVZi39a/jnk_before_after_restoration-DCpjVbLqfeqJRVMn6siKck.webp";
const consultationImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663599536941/NcpPGnEXcZwskuvyVZi39a/jnk_consultation_table-B9gDsiS4ebTYMt8HXJbrWh.webp";
const blueprintTexture =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663599536941/NcpPGnEXcZwskuvyVZi39a/jnk_blueprint_roofline_texture-BrH7bqD9nrSnXtyvW5ofiF.webp";

const sellingOptions = [
  {
    icon: Banknote,
    title: "Cash Sale",
    timeframe: "Close in as little as 7 days",
    summary:
      "Sell quickly without repairs, inspections, showings, agent commissions, or lender contingencies.",
    bestFor: "Speed, certainty, and homes that need work.",
  },
  {
    icon: Landmark,
    title: "Traditional Retail",
    timeframe: "Maximize market exposure",
    summary:
      "List on the open market with professional negotiation, qualified buyers, and retail pricing strategy.",
    bestFor: "Sellers who want the highest possible sale price.",
  },
  {
    icon: Handshake,
    title: "Hybrid Solution",
    timeframe: "Cash speed + retail upside",
    summary:
      "Combine investor certainty with broader buyer exposure so you can compare multiple paths with guidance.",
    bestFor: "Best for sellers who want more money than a cash offer, but less hassle than selling retail.",
  },
  {
    icon: Hammer,
    title: "Fix and List",
    timeframe: "Renovation coordinated for ROI",
    summary:
      "Improve market value through targeted updates coordinated by JNK, then share in the higher resale outcome.",
    bestFor: "Homes with unrealized equity potential.",
  },
  {
    icon: KeyRound,
    title: "Leaseback",
    timeframe: "Sell now, move later",
    summary:
      "Unlock equity at closing while staying in your home for a short or longer transition period.",
    bestFor: "Families who need time, school continuity, or a flexible move.",
  },
  {
    icon: TrendingUp,
    title: "Short-Term Loan",
    timeframe: "Bridge pressure before closing",
    summary:
      "Access an equity-based short-term loan to cover expenses and avoid rushed price cuts while selling.",
    bestFor: "Sellers who need liquidity during the sale process.",
  },
];

const painPoints = [
  "The house needs repairs before a retail buyer will feel confident.",
  "You need a reliable closing date and do not want months of showings.",
  "You want to maximize equity but do not have cash for improvements upfront.",
  "You need to sell but remain in the home while planning your next move.",
];

const steps = [
  {
    number: "01",
    title: "Tell us about the property",
    description:
      "Start with the address and basic contact details. The first conversation is focused on your goals, timeline, and property condition.",
  },
  {
    number: "02",
    title: "Review your selling paths",
    description:
      "JNK compares cash, retail, hybrid, repair-backed, leaseback, and short-term financing options so you can make an informed decision.",
  },
  {
    number: "03",
    title: "Choose your terms",
    description:
      "Select the route that fits your situation, then coordinate closing, move-out timing, repair strategy, or leaseback details with clarity.",
  },
];

const faqs = [
  {
    question: "Do I need to repair my house before reaching out?",
    answer:
      "Not at all. We look at your home as-is and tell you honestly what makes sense. Sometimes a cash sale is the right move and repairs would just eat into your proceeds. Other times a targeted renovation through our Fix and List program can meaningfully increase what you walk away with. We'll show you the numbers for both before you decide anything.",
  },
  {
    question: "What makes this different from a typical cash buyer?",
    answer:
      "Most cash buyers have one offer and one agenda. JNK looks at your situation first — your timeline, your equity, your property condition — and then lays out every path that could work: cash sale, traditional retail, hybrid, Fix and List, leaseback, or a short-term loan. You pick the one that fits. We're not trying to lock you into the option that's fastest for us.",
  },
  {
    question: "How quickly can we close?",
    answer:
      "A straight cash sale can close in as little as 7 days once title is clear and you're ready. If you'd rather list on the open market or go the Fix and List route, the timeline will be longer — but we'll give you a realistic estimate upfront so there are no surprises. Speed is always an option, not a requirement.",
  },
  {
    question: "Are there hidden fees or pressure to go with a certain option?",
    answer:
      "No hidden fees, and no pressure. Every option we present comes with a clear breakdown of costs and net proceeds so you can compare apples to apples. Our goal is to be the most useful call you make during this process — if that means you end up listing with a traditional agent, we'll tell you that too.",
  },
];

const testimonials = [
  {
    quote:
      "We were comparing a quick sale with listing traditionally. JNK helped us understand both paths without making us feel boxed in.",
    name: "Wasatch Front Homeowner",
    context: "Hybrid selling consultation",
  },
  {
    quote:
      "The renovation plan made the property feel market-ready without us coordinating every contractor ourselves.",
    name: "Estate Property Seller",
    context: "Fix and List scenario",
  },
  {
    quote:
      "Being able to close and stay temporarily gave our family the time we needed to move on our schedule.",
    name: "Local Family Seller",
    context: "Leaseback transition",
  },
];

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="group block text-left">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">
        {label}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full border border-navy/15 bg-white/85 px-4 py-3.5 font-body text-base text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition duration-300 placeholder:text-navy/35 focus:border-gold focus:ring-4 focus:ring-gold/20"
      />
    </label>
  );
}

export default function Home() {
  useEffect(() => {
    const hideHostedFooterBadge = () => {
      const contentHosts = Array.from(document.querySelectorAll("manus-content-root"));

      for (const host of contentHosts) {
        const root = (host as HTMLElement & { shadowRoot?: ShadowRoot | null }).shadowRoot;
        if (!root) continue;

        const watermarkHosts = Array.from(root.querySelectorAll("footer-watermark"));
        for (const watermarkHost of watermarkHosts) {
          const element = watermarkHost as HTMLElement & { shadowRoot?: ShadowRoot | null };
          element.style.display = "none";
          element.style.pointerEvents = "none";
          element.setAttribute("aria-hidden", "true");

          const watermarkRoot = element.shadowRoot?.querySelector(".footer-watermark-root");
          if (watermarkRoot instanceof HTMLElement) {
            watermarkRoot.style.display = "none";
            watermarkRoot.style.pointerEvents = "none";
            watermarkRoot.setAttribute("aria-hidden", "true");
          }
        }
      }
    };

    hideHostedFooterBadge();

    const observer = new MutationObserver(hideHostedFooterBadge);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    const intervalId = window.setInterval(hideHostedFooterBadge, 750);

    return () => {
      observer.disconnect();
      window.clearInterval(intervalId);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [leadForm, setLeadForm] = useState({
    address: "",
    name: "",
    phone: "",
    email: "",
  });
  const [messageForm, setMessageForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const formProgress = useMemo(() => {
    const completed = Object.values(leadForm).filter(Boolean).length;
    return Math.round((completed / Object.keys(leadForm).length) * 100);
  }, [leadForm]);

  const handleLeadChange = (name: string, value: string) => {
    setLeadForm((current) => ({ ...current, [name]: value }));
  };

  const handleMessageChange = (name: string, value: string) => {
    setMessageForm((current) => ({ ...current, [name]: value }));
  };

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Offer request captured for the demo", {
      description:
        "For production, connect this form to the CRM or lead inbox you want JNK to use.",
    });
  };

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Message ready to route", {
      description:
        "This static preview confirms the interaction. A production build should connect the form to email or CRM automation.",
    });
  };

  const scrollToForm = () => {
    document.getElementById("offer-form")?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-limestone font-body text-navy">
      <div className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-between border border-white/20 bg-navy/95 px-4 py-3 text-white shadow-2xl backdrop-blur md:hidden">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-gold">Ready for options?</p>
          <a href="tel:8016478799" className="font-semibold">
            801-647-8799
          </a>
        </div>
        <Button onClick={scrollToForm} className="bg-gold text-navy hover:bg-gold/90">
          Get Offer
        </Button>
      </div>

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/15 bg-navy/90 text-white shadow-lg backdrop-blur-xl">
        <div className="container flex h-24 items-center justify-between gap-5 sm:h-28">
          <a href="#top" className="group flex items-center" aria-label="JNK Managing Group home">
            <span className="flex h-[4.75rem] items-center border-2 border-gold/55 bg-white px-4 py-1.5 shadow-[0_14px_36px_rgba(0,0,0,0.24)] ring-1 ring-white/20 transition duration-300 group-hover:border-gold group-hover:shadow-[0_18px_44px_rgba(0,0,0,0.32)] sm:h-[5.65rem] sm:px-5">
              <img src={clientLogo} alt="JNK Managing Group - sell your house your way" className="h-full w-auto object-contain" />
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 lg:flex">
            <a className="nav-link" href="#options">Selling Options</a>
            <a className="nav-link" href="#process">How It Works</a>
            <a className="nav-link" href="#proof">Proof</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="mailto:jeff@jnkmanaging.com" className="inline-flex items-center gap-2 text-sm font-semibold text-white/82 transition hover:text-gold">
              <Mail className="h-4 w-4" /> jeff@jnkmanaging.com
            </a>
            <Button onClick={scrollToForm} className="bg-gold px-5 text-navy hover:bg-gold/90">
              Get My Offer
            </Button>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-white/15 bg-navy px-4 py-5 lg:hidden">
            <div className="container grid gap-4 text-sm font-semibold text-white/84">
              <a href="#options" onClick={() => setMobileMenuOpen(false)}>Selling Options</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#proof" onClick={() => setMobileMenuOpen(false)}>Proof</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="tel:8016478799" className="text-gold">Call 801-647-8799</a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative isolate min-h-screen overflow-hidden bg-navy pt-24 text-white sm:pt-28">
          <div className="absolute inset-0 -z-20">
            <img src={heroImage} alt="Warm Prairie Modern home exterior at dusk" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,31,49,0.95)_0%,rgba(8,31,49,0.82)_38%,rgba(8,31,49,0.36)_68%,rgba(8,31,49,0.18)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(196,151,75,0.24),transparent_34%)]" />
          </div>
          <div className="absolute left-0 top-24 -z-10 h-px w-full bg-gold/30 sm:top-28" />
          <div className="container grid min-h-[calc(100vh-6rem)] items-center gap-12 py-16 sm:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="mb-8 inline-flex items-center gap-3 border border-gold/35 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gold backdrop-blur">
                <ShieldCheck className="h-4 w-4" /> Flexible home-selling solutions
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Sell your house your way.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-white/82">
                Choose from cash sale, traditional retail, hybrid, Fix and List, leaseback, and short-term loan options designed around your timeline, equity goals, and property condition.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button onClick={scrollToForm} size="lg" className="group bg-gold px-7 py-6 text-base font-bold text-navy hover:bg-gold/90">
                  Get a no-pressure offer <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                </Button>
                <a href="tel:8016478799" className="inline-flex items-center justify-center gap-3 border border-white/25 px-7 py-3.5 font-bold text-white transition hover:border-gold hover:text-gold">
                  <Phone className="h-5 w-5" /> 801-647-8799
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  ["No repairs required", Wrench],
                  ["Transparent options", BadgeCheck],
                  ["You choose the path", CalendarCheck],
                ].map(([label, Icon]) => (
                  <div key={String(label)} className="flex items-center gap-3 border border-white/14 bg-white/8 px-4 py-3 backdrop-blur">
                    <Icon className="h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm font-semibold text-white/86">{String(label)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="offer-form" className="relative mx-auto w-full max-w-xl lg:translate-y-8">
              <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-gold/45" />
              <div className="absolute -bottom-5 -right-5 h-28 w-28 border-b border-r border-gold/45" />
              <form onSubmit={submitLead} className="relative border border-white/18 bg-limestone/96 p-6 text-navy shadow-2xl backdrop-blur md:p-8">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">Start here</p>
                    <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.015em]">Get your offer options</h2>
                    <p className="mt-2 text-sm leading-6 text-navy/68">A short, seller-first intake form. No commitment required.</p>
                  </div>
                  <div className="hidden rounded-full bg-sage/16 px-3 py-1 text-xs font-bold text-sage-dark sm:block">
                    {formProgress}% complete
                  </div>
                </div>
                <div className="mb-6 h-1.5 bg-navy/10">
                  <div className="h-full bg-gold transition-all duration-500" style={{ width: `${formProgress}%` }} />
                </div>
                <div className="grid gap-4">
                  <Field label="Property address" name="address" value={leadForm.address} onChange={handleLeadChange} placeholder="123 Main Street" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" value={leadForm.name} onChange={handleLeadChange} placeholder="Your name" />
                    <Field label="Phone" name="phone" type="tel" value={leadForm.phone} onChange={handleLeadChange} placeholder="(801) 647-8799" />
                  </div>
                  <Field label="Email" name="email" type="email" value={leadForm.email} onChange={handleLeadChange} placeholder="you@example.com" />
                </div>
                <Button type="submit" className="mt-6 w-full bg-navy py-6 text-base font-bold text-white hover:bg-navy/92">
                  Get My Offer Options <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-navy/58">
                  <ShieldCheck className="h-4 w-4 text-sage-dark" /> Privacy-first demo form. Connect to CRM in production.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="relative bg-limestone py-20 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="section-kicker">Why homeowners reach out</p>
              <h2 className="section-heading mt-4">Selling is not one-size-fits-all.</h2>
              <p className="mt-6 text-lg leading-8 text-navy/70">
                The rebuild should make JNK’s biggest differentiator clear: sellers are not forced into one narrow path. The page should translate uncertainty into calm, comparable options.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {painPoints.map((point, index) => (
                <div key={point} className="group border border-navy/12 bg-white/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl">
                  <span className="mb-5 flex h-10 w-10 items-center justify-center bg-navy text-sm font-bold text-gold">{index + 1}</span>
                  <p className="text-base font-semibold leading-7 text-navy/82">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="options" className="relative overflow-hidden bg-white py-20 lg:py-28">
          <div className="container">
            <div className="max-w-3xl">
              <p className="section-kicker">Selling options tailored to your needs</p>
              <h2 className="section-heading mt-4">Six paths. One consultative decision.</h2>
              <p className="mt-6 text-lg leading-8 text-navy/68">
                Each option card should answer three questions quickly: what it is, who it helps, and why a homeowner should consider it.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sellingOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <article key={option.title} className="group relative overflow-hidden border border-navy/10 bg-limestone/60 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-2xl">
                    <div className="absolute right-0 top-0 h-16 w-24 border-b border-l border-gold/22 bg-white/35 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]" />
                    <div className="mb-7 flex items-center justify-between gap-4">
                      <span className="flex h-14 w-14 items-center justify-center bg-navy text-gold shadow-lg shadow-navy/10">
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="text-right text-xs font-bold uppercase tracking-[0.18em] text-sage-dark">{option.timeframe}</span>
                    </div>
                    <h3 className="font-display text-3xl font-bold leading-tight tracking-[-0.015em] text-navy">{option.title}</h3>
                    <p className="mt-4 min-h-24 text-base leading-7 text-navy/68">{option.summary}</p>
                    <div className="mt-6 border-t border-navy/10 pt-5">
                      <p className="text-sm font-bold text-navy">Best for</p>
                      <p className="mt-1 text-sm leading-6 text-navy/62">{option.bestFor}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
          <div className="absolute inset-0 opacity-20">
            <img src={blueprintTexture} alt="Subtle architectural blueprint texture" className="h-full w-full object-cover" />
          </div>
          <div className="container relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative">
              <img src={consultationImage} alt="Real estate consultation table with property documents and keys" className="w-full border border-white/12 shadow-2xl" />
              <div className="absolute -bottom-8 -right-4 max-w-xs border border-gold/40 bg-limestone p-5 text-navy shadow-2xl sm:right-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">Consultative process</p>
                <p className="mt-2 font-display text-2xl font-bold leading-tight">Options before pressure.</p>
              </div>
            </div>
            <div>
              <p className="section-kicker text-gold">How it works</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.12] tracking-[-0.018em] text-white sm:text-5xl">A clear path from uncertainty to decision.</h2>
              <div className="mt-10 space-y-5">
                {steps.map((step) => (
                  <article key={step.number} className="grid gap-5 border border-white/12 bg-white/8 p-6 backdrop-blur transition hover:border-gold/35 sm:grid-cols-[72px_1fr]">
                    <span className="font-display text-5xl font-bold leading-none text-gold/90">{step.number}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <p className="mt-3 leading-7 text-white/70">{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="bg-limestone py-20 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="section-kicker">Proof of work</p>
              <h2 className="section-heading mt-4">JNK does not just buy homes. It restores potential.</h2>
              <p className="mt-6 text-lg leading-8 text-navy/70">
                The current website’s before-and-after concept should remain prominent. The rebuilt page should use it as proof that JNK understands property condition, renovation value, and market presentation.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["7 days", "possible fast cash closing"],
                  ["6 paths", "seller solutions compared"],
                  ["0 pressure", "consultative decision process"],
                ].map(([stat, label]) => (
                  <div key={stat} className="border border-navy/10 bg-white p-5 shadow-sm">
                    <p className="font-display text-4xl font-bold text-navy">{stat}</p>
                    <p className="mt-2 text-sm font-semibold leading-5 text-navy/58">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-full w-full border border-gold/35" />
              <img src={restorationImage} alt="Before and after exterior home restoration comparison" className="relative w-full border border-navy/12 shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="section-kicker">Trust signals</p>
                <h2 className="section-heading mt-4">Make credibility visible before the form.</h2>
                <p className="mt-6 text-lg leading-8 text-navy/68">
                  Real estate landing pages ask for sensitive property details. The design should visibly reduce perceived risk through transparent language, responsive contact options, and credible local proof.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <figure key={testimonial.name} className="border border-navy/10 bg-limestone/70 p-6 shadow-sm">
                    <Sparkles className="mb-5 h-6 w-6 text-gold-dark" />
                    <blockquote className="text-base leading-7 text-navy/76">“{testimonial.quote}”</blockquote>
                    <figcaption className="mt-6 border-t border-navy/10 pt-4">
                      <p className="font-bold text-navy">{testimonial.name}</p>
                      <p className="text-sm text-navy/55">{testimonial.context}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-limestone py-20 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-kicker">Questions sellers ask</p>
              <h2 className="section-heading mt-4">Answer objections before they become hesitation.</h2>
              <p className="mt-6 text-lg leading-8 text-navy/68">
                FAQs should be specific to seller anxiety: repairs, speed, fees, privacy, and whether JNK will recommend the right path rather than only the fastest one.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <article key={faq.question} className="border border-navy/12 bg-white shadow-sm">
                    <button className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left" onClick={() => setActiveFaq(isOpen ? -1 : index)}>
                      <span className="text-lg font-bold text-navy">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-gold-dark transition ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && <p className="border-t border-navy/10 px-6 pb-6 pt-5 leading-7 text-navy/68">{faq.answer}</p>}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
          <div className="absolute inset-0 opacity-35">
            <img src={blueprintTexture} alt="Architectural blueprint CTA background" className="h-full w-full object-cover" />
          </div>
          <div className="container relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker text-gold">Get in touch with JNK Managing Group</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.12] tracking-[-0.018em] text-white sm:text-5xl">Start with a conversation, not a commitment.</h2>
              <div className="mt-8 grid gap-4">
                <a href="mailto:jeff@jnkmanaging.com" className="group flex items-center gap-4 border border-white/12 bg-white/8 p-5 transition hover:border-gold/35">
                  <Mail className="h-6 w-6 text-gold" />
                  <span>
                    <span className="block text-sm uppercase tracking-[0.18em] text-white/50">Email</span>
                    <span className="font-bold text-white group-hover:text-gold">jeff@jnkmanaging.com</span>
                  </span>
                </a>
                <a href="tel:8016478799" className="group flex items-center gap-4 border border-white/12 bg-white/8 p-5 transition hover:border-gold/35">
                  <Phone className="h-6 w-6 text-gold" />
                  <span>
                    <span className="block text-sm uppercase tracking-[0.18em] text-white/50">Call</span>
                    <span className="font-bold text-white group-hover:text-gold">801-647-8799</span>
                  </span>
                </a>
                <div className="flex items-center gap-4 border border-white/12 bg-white/8 p-5">
                  <MapPin className="h-6 w-6 text-gold" />
                  <span>
                    <span className="block text-sm uppercase tracking-[0.18em] text-white/50">Service focus</span>
                    <span className="font-bold text-white">Salt Lake, Utah, Davis, Weber, Tooele & Washington county home sellers</span>
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={submitMessage} className="border border-white/14 bg-limestone p-6 text-navy shadow-2xl md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" name="firstName" value={messageForm.firstName} onChange={handleMessageChange} placeholder="Your first name" />
                <Field label="Last name" name="lastName" value={messageForm.lastName} onChange={handleMessageChange} placeholder="Your last name" />
                <Field label="Phone" name="phone" type="tel" value={messageForm.phone} onChange={handleMessageChange} placeholder="Your phone number" />
                <Field label="Email" name="email" type="email" value={messageForm.email} onChange={handleMessageChange} placeholder="Your email address" />
              </div>
              <label className="mt-4 block text-left">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">Message</span>
                <textarea
                  name="message"
                  value={messageForm.message}
                  onChange={(event) => handleMessageChange("message", event.target.value)}
                  placeholder="Tell us what is happening with the property..."
                  rows={5}
                  className="w-full border border-navy/15 bg-white/85 px-4 py-3.5 font-body text-base text-navy outline-none transition duration-300 placeholder:text-navy/35 focus:border-gold focus:ring-4 focus:ring-gold/20"
                />
              </label>
              <Button type="submit" className="mt-6 w-full bg-navy py-6 text-base font-bold text-white hover:bg-navy/92">
                Send Message <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#061624] px-4 py-10 text-white">
        <div className="container grid gap-8 md:grid-cols-[1.35fr_0.9fr_1fr] md:items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="inline-flex w-fit border-2 border-gold/45 bg-white px-4 py-3 shadow-[0_14px_34px_rgba(0,0,0,0.26)] ring-1 ring-white/15">
              <img src={clientLogo} alt="JNK Managing Group logo" className="h-20 w-auto object-contain sm:h-24" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold">JNK Managing Group, Inc.</p>
              <p className="mt-2 text-sm text-white/55">Flexible selling options for homeowners who want clarity before commitment.</p>
            </div>
          </div>

          <div className="flex items-center justify-center border-y border-white/10 py-5 md:border-x md:border-y-0 md:px-6 md:py-0">
            <img src={omadaLogo} alt="Omada Real Estate logo" className="h-20 w-auto object-contain sm:h-24" />
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/68 md:text-right">
            <a href="mailto:jeff@jnkmanaging.com" className="hover:text-gold">jeff@jnkmanaging.com</a>
            <a href="tel:8016478799" className="hover:text-gold">801-647-8799</a>
            <span>© 2026 All Rights Reserved | JNK Managing Group</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
