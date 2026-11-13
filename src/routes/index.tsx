import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Download,
  Star,
  Mail,
  ShieldCheck,
  Sparkles,
  Heart,
  Zap,
  Quote,
  BookOpen,
  Check,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/yoni-hero-malayalam.png";
import ritualImg from "@/assets/yoni-ritual.jpg";
import mantraImg from "@/assets/yoni-mantra.jpg";
import tantricArtImg from "@/assets/yoni-tantric-art.jpg";
import shabarImg from "@/assets/yoni-shabar.jpg";
import diyasImg from "@/assets/yoni-diyas.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-hex-pattern text-foreground font-sans">
      {/* Ambient auras */}
      <div className="aura h-[420px] w-[420px] left-[-120px] top-[10%]" style={{ background: "oklch(0.45 0.22 300 / 0.55)" }} />
      <div className="aura h-[360px] w-[360px] right-[-100px] top-[45%]" style={{ background: "oklch(0.55 0.2 25 / 0.35)", animationDelay: "1.5s" }} />
      <div className="aura h-[500px] w-[500px] left-[30%] bottom-[5%]" style={{ background: "oklch(0.5 0.2 320 / 0.35)", animationDelay: "3s" }} />

      <Header />
      <main className="relative">
        <Hero />
        <DescriptionSection />
        <FeatureGallery />
        <Reveal>
          <div className="flex justify-center py-6">
            <div className="h-px w-full max-w-5xl bg-white/10" />
          </div>
        </Reveal>
        <LearnSection />
        <IncludedSection />
        <AudienceSection />
        <HighlightsSection />
        <TestimonialsSection />
        <CheckoutSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyOfferBar />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-purple)] shadow-[var(--shadow-glow)] flicker">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Mystic<span className="text-gold">Canvas</span>
          </span>
        </Link>
        <a
          href="https://superprofile.bio/vp/-4zWwySX?checkout=true"
          className="hidden rounded-full px-4 py-2 text-xs font-semibold text-white btn-glow cta-shine hover:btn-glow-hover sm:inline-flex"
        >
          ഇപ്പോൾ നേടൂ
        </a>
      </div>
    </header>
  );
}

/* ---------------- Section wrapper ---------------- */
function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-10 sm:py-12 lg:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

// Custom simple component that renders a section heading
function SectionHeading({
  eyebrow,
  title,
  icon,
  center,
}: {
  eyebrow?: string;
  title: string;
  icon?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-8 text-center ${center ? "" : "sm:text-left"}`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gold font-medium">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className={`flex items-center justify-center gap-3 text-2xl font-black text-white sm:text-3xl lg:text-4xl ${center ? "" : "sm:justify-start"}`}>
        {icon && <span className="flicker text-[color:var(--orange-glow)]">{icon}</span>}
        <span className="relative inline-block">
          <span className="text-white">{title}</span>
          <span className={`absolute -bottom-2 h-[3px] w-16 rounded-full bg-[var(--gradient-gold)] left-1/2 -translate-x-1/2 ${center ? "" : "sm:left-0 sm:translate-x-0"}`} />
        </span>
      </h2>
    </Reveal>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <Reveal className="text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gold font-medium">
            <Sparkles className="h-3.5 w-3.5" /> പ്രാചീന താന്ത്രിക ഗ്രന്ഥം
          </div>
          <h1 className="mb-6 font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl">
            തീവ്ര യോനി <span className="text-gold">വശീകരണ സാധന</span> <span className="text-white/70 text-2xl sm:text-4xl block sm:inline mt-1 sm:mt-0">(മലയാളം ഇ-ബുക്ക്)</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
            പ്രാചീന താന്ത്രിക ഗ്രന്ഥം — നൂറ്റാണ്ടുകളായി അതീവ രഹസ്യമായി സൂക്ഷിച്ച ദിവ്യവിദ്യ, ഇപ്പോൾ ലളിതമായ മലയാളത്തിൽ.
            മന്ത്രങ്ങൾ, യന്ത്രങ്ങൾ, സമ്പൂർണ്ണ സാധനാ രീതികൾ — ഇപ്പോൾ തന്നെ ഡൗൺലോഡ് ചെയ്യൂ.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
            <a
              href="https://superprofile.bio/vp/-4zWwySX?checkout=true"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white btn-glow cta-shine pulse-glow hover:btn-glow-hover"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              ഇപ്പോൾ തന്നെ ഡൗൺലോഡ് ചെയ്യൂ — ₹249
            </a>
            <div className="flex items-center gap-2 text-xs text-white/60 font-medium">
              <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
              സുരക്ഷിതമായ പേയ്‌മെന്റ് · തൽക്ഷണ ഡൗൺലോഡ്
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 text-xs text-white/60 sm:flex-row sm:flex-wrap sm:gap-6 lg:justify-start">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="font-medium">4.9 / 5 · 2000+ സാധകർ</span>
            </div>
            <span className="flex items-center gap-1.5 font-medium"><BookOpen className="h-3.5 w-3.5" /> PDF · മലയാളം</span>
          </div>
        </Reveal>

        <Reveal className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img
            src={heroImg}
            alt="യോനി വശീകരണ വിദ്യ — പ്രാചീന താന്ത്രിക ഗ്രന്ഥം"
            width={1024}
            height={1024}
            className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[color:var(--gold)]/20 rotate-slow" />
          <div className="pointer-events-none absolute -left-16 bottom-8 h-48 w-48 rounded-full border border-[color:var(--accent)]/25 rotate-slow" style={{ animationDirection: "reverse" }} />
          <Sparkles className="pointer-events-none absolute right-8 top-16 h-5 w-5 text-[color:var(--gold)] sparkle" />
          <Sparkles className="pointer-events-none absolute left-10 top-40 h-4 w-4 text-[color:var(--accent)] sparkle" style={{ animationDelay: "1s" }} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Description ---------------- */
function DescriptionSection() {
  return (
    <SectionShell id="about">
      <SectionHeading eyebrow="വിവരണം" title="ഈ ഇ-ബുക്കിനെക്കുറിച്ച്" center />
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-base leading-relaxed text-white/80 sm:text-lg">
          പ്രാചീന യോനി വശീകരണ വിദ്യ എന്നത് നൂറ്റാണ്ടുകളായി ഗുരു-ശിഷ്യ പാരമ്പര്യത്തിലൂടെ അതീവ രഹസ്യമായി
          സംരക്ഷിക്കപ്പെട്ടുപോന്ന അത്യപൂർവ്വമായ ഒരു താന്ത്രിക ഗ്രന്ഥമാണ്. നിസ്വാർത്ഥമായ മനസ്സോടെ തങ്ങളുടെ
          പ്രിയപ്പെട്ടവരെ ആകർഷിക്കാനും ജീവിതത്തിൽ സ്നേഹം നിറയ്ക്കാനും ആഗ്രഹിക്കുന്ന സാധകർക്കായി തയ്യാറാക്കിയതാണ്
          ഈ ഇ-ബുക്ക്. ഇതിൽ പ്രതിപാദിച്ചിരിക്കുന്ന മന്ത്രങ്ങൾ, യന്ത്രങ്ങൾ, ഓരോ സാധനാ ക്രമങ്ങളും ലളിതവും വ്യക്തവുമായ
          മലയാളത്തിൽ വിശദീകരിച്ചിരിക്കുന്നു, അതിനാൽ ആർക്കും വീട്ടിലിരുന്ന് തന്നെ ശരിയായ രീതിയിൽ ഇത് പരിശീലിക്കാൻ സാധിക്കും.
        </p>
      </Reveal>
    </SectionShell>
  );
}

/* ---------------- Feature Image Gallery ---------------- */
function FeatureGallery() {
  const items = [
    { src: ritualImg, caption: "വശീകരണം എങ്ങനെ ചെയ്യാം — സമ്പൂർണ്ണ വിധികൾ" },
    { src: diyasImg, caption: "വിളക്ക് തെളിയിച്ച് സാധന ചെയ്യുക" },
    { src: mantraImg, caption: "ഫോട്ടോ ഉപയോഗിച്ചുള്ള വശീകരണ രീതി" },
    { src: tantricArtImg, caption: "ഗുരു-ശിഷ്യ പാരമ്പര്യത്തിലെ രഹസ്യ വിദ്യ" },
    { src: shabarImg, caption: "പേര് ഉപയോഗിച്ച് വശീകരണം — ശാബര മന്ത്രം" },
    { src: heroImg, caption: "മോഹിനീ മന്ത്ര സിദ്ധി" },
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="ഗാലറി" title="സാധനയുടെ ഒരു നേർക്കാഴ്ച" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
            <img
              src={it.src}
              alt={it.caption}
              loading="lazy"
              width={800}
              height={800}
              className="aspect-square w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-center">
              <p className="text-sm font-bold text-gold">{it.caption}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Learn ---------------- */
function LearnSection() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="എന്തെല്ലാം പഠിക്കാം" title="ഈ ഇ-ബുക്കിലൂടെ നിങ്ങൾക്ക് എന്തെല്ലാം മനസ്സിലാക്കാം?" icon="✦" />
          <BulletList
            items={[
              "വശീകരണം ചെയ്യുന്ന സമ്പൂർണ്ണ രീതി (ഘട്ടം ഘട്ടമായി / Step-by-Step)",
              "മന്ത്ര ജപത്തിന്റെ ശരിയായ നിയമങ്ങളും വിധിവിധാനങ്ങളും",
              "ഏത് ദിവസങ്ങളിലും സമയങ്ങളിലും മന്ത്രങ്ങൾ ജപിക്കണം",
              "സാധന ചെയ്യേണ്ട ശുഭ തിഥികളും മുഹൂർത്തങ്ങളും",
              "ആഗ്രഹിച്ച വ്യക്തിയെ ആകർഷിക്കാനുള്ള അതിശക്തമായ മന്ത്രങ്ങൾ",
              "ഫോട്ടോ ഉപയോഗിച്ച് വശീകരിക്കുന്ന രഹസ്യ താന്ത്രിക പ്രക്രിയ",
            ]}
          />
        </div>
        <Reveal className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img src={mantraImg} alt="Mantra" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ---------------- Included ---------------- */
function IncludedSection() {
  const items = [
    "സമ്പൂർണ്ണ യോനി വശീകരണ വിദ്യ",
    "ഓരോ സാധനയുടെയും ഘട്ടം ഘട്ടമായുള്ള രീതി",
    "ശക്തമായ മോഹിനീ മന്ത്രങ്ങൾ (Step-by-Step)",
    "സിദ്ധ യന്ത്രങ്ങളും അവയുടെ ശരിയായ പ്രയോഗവും",
    "സ്നേഹിക്കുന്ന വ്യക്തിയെ ആകർഷിക്കാനുള്ള രഹസ്യ വിദ്യ",
    "സാധനാ സമയത്ത് ചെയ്യേണ്ടതും ചെയ്യരുതാത്തതുമായ കാര്യങ്ങൾ",
    "രഹസ്യ താന്ത്രിക രഹസ്യങ്ങളും മുൻകരുതലുകളും",
    "100% ഫലപ്രദവും പരീക്ഷിച്ചറിഞ്ഞതുമായ വിധികൾ",
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="ഇ-ബുക്കിൽ അടങ്ങിയിരിക്കുന്നത്" title="നിങ്ങൾക്ക് ഇതിൽ നിന്ന് എന്തെല്ലാം ലഭിക്കും?" icon="✦" center />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <Reveal
            key={item}
            className="group rounded-2xl border border-white/10 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:shadow-[var(--shadow-glow-yoni)]"
            style={{ transitionDelay: `${idx * 40}ms` }}
          >
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-gold)] text-black shadow-md">
              <Check className="h-5 w-5" strokeWidth={3} />
            </div>
            <p className="text-sm font-semibold text-neutral-900">{item}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Audience ---------------- */
function AudienceSection() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 lg:order-1 group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img src={tantricArtImg} alt="Audience" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="ആർക്കൊക്കെ അനുയോജ്യം" title="ഈ ഇ-ബുക്ക് ആർക്കൊക്കെയാണ് പ്രയോജനപ്പെടുന്നത്?" icon="♥" />
          <BulletList
            check
            items={[
              "ജീവിതത്തിൽ യഥാർത്ഥ സ്നേഹം ആഗ്രഹിക്കുന്നവർക്ക്",
              "മനസ്സിൽ ഇഷ്ടപ്പെട്ട ആളെയോ പങ്കാളിയെയോ തിരികെ നേടാൻ ആഗ്രഹിക്കുന്നവർക്ക്",
              "ഭാര്യാഭർത്താക്കന്മാർക്കിടയിൽ സ്നേഹവും ആകർഷണവും വർദ്ധിപ്പിക്കാൻ ആഗ്രഹിക്കുന്നവർക്ക്",
              "ഏകപക്ഷീയമായ പ്രണയത്തിൽ വിജയം നേടാൻ ആഗ്രഹിക്കുന്നവർക്ക്",
              "മോഹന ക്രിയകളിലും താന്ത്രിക സാധനകളിലും താല്പര്യമുള്ള സാധകർക്ക്",
              "ദാമ്പത്യ ജീവിതത്തിൽ സന്തോഷവും സമാധാനവും തിരികെ കൊണ്ടുവരാൻ ആഗ്രഹിക്കുന്നവർക്ക്",
            ]}
          />
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- Highlights ---------------- */
function HighlightsSection() {
  const items = [
    { icon: <Download className="h-5 w-5" />, title: "തൽക്ഷണ ഡൗൺലോഡ്", desc: "പേയ്‌മെന്റ് പൂർത്തിയാകുമ്പോൾ തന്നെ PDF ഡൗൺലോഡ് ലിങ്ക് ലഭിക്കുന്നു" },
    { icon: <BookOpen className="h-5 w-5" />, title: "ലളിതമായ മലയാളം ഭാഷ", desc: "വ്യക്തവും ലളിതവുമായ മലയാളത്തിൽ എഴുതിയ മാർഗ്ഗനിർദ്ദേശങ്ങൾ" },
    { icon: <Zap className="h-5 w-5" />, title: "ഘട്ടം ഘട്ടമായുള്ള രീതി", desc: "ഓരോ സാധനയുടെയും ലളിതവും വ്യക്തവുമായ നിർദ്ദേശങ്ങൾ" },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "രഹസ്യ ജ്ഞാനം", desc: "ഗുരു-ശിഷ്യ പാരമ്പര്യത്തിലെ അത്യപൂർവ്വ രഹസ്യങ്ങൾ" },
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="പ്രത്യേകതകൾ" title="ഇ-ബുക്കിന്റെ സവിശേഷതകൾ" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, idx) => (
          <Reveal
            key={it.title}
            className="rounded-2xl border border-white/10 bg-card p-6 text-center shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:shadow-[var(--shadow-glow-yoni)]"
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-purple-50 text-purple-700 border border-purple-100 shadow-sm">
              {it.icon}
            </div>
            <h3 className="mb-1 font-bold text-neutral-900">{it.title}</h3>
            <p className="text-sm text-neutral-600 font-medium">{it.desc}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Testimonials ---------------- */
function TestimonialsSection() {
  const list = [
    { name: "Rahul", text: "വളരെ മികച്ച ഒരു ഇ-ബുക്ക്. എല്ലാ രീതികളും വളരെ ലളിതമായ മലയാളത്തിൽ മനോഹരമായി വിശദീകരിച്ചിട്ടുണ്ട്. ഞാൻ നേരിട്ട് കൃത്യമായ നിയമങ്ങൾ പാലിച്ച് ഇത് പ്രയോഗിക്കുകയും മികച്ച ഫലം അനുഭവിക്കുകയും ചെയ്തു." },
    { name: "Sourav", text: "ഈ പുസ്തകം വായിച്ചതിലൂടെ എനിക്ക് വലിയ പ്രയോജനമാണ് ഉണ്ടായത്. ഇതിൽ പറയുന്ന മന്ത്രങ്ങളുടെയും യന്ത്രങ്ങളുടെയും വിവരങ്ങൾ വളരെ വ്യക്തവും കൃത്യവുമാണ്. വളരെ നന്ദി!" },
    { name: "Debasish", text: "വളരെ അത്ഭുതകരവും ശക്തവുമായ വിദ്യ. തുടക്കത്തിൽ ചെറിയ സംശയങ്ങൾ ഉണ്ടായിരുന്നു, എന്നാൽ ശരിയായ ക്രമത്തിൽ സാധന ചെയ്തപ്പോൾ ബന്ധത്തിലെ തർക്കങ്ങൾ മാറി അത്ഭുതകരമായ മാറ്റമാണ് അനുഭവപ്പെട്ടത്." },
    { name: "Aniket", text: "അതിശയകരമായ ഒരു ഗൈഡ്! മുഴുവൻ കാര്യങ്ങളും മലയാളത്തിൽ കൃത്യമായി മനസ്സിലാക്കിത്തരുന്നു. ആത്മീയ സാധകർക്ക് കൈവശം സൂക്ഷിക്കാൻ പറ്റിയ അമൂല്യമായ ഗ്രന്ഥം." },
  ];
  return (
    <SectionShell>
      <SectionHeading eyebrow="പ്രതികരണങ്ങൾ" title="സാധകരുടെ യഥാർത്ഥ അനുഭവങ്ങൾ" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((t) => (
          <Testimonial key={t.name} {...t} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Checkout ---------------- */
function CheckoutSection() {
  return (
    <SectionShell id="checkout" className="bg-black/40">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal className="text-center lg:text-left">
          <SectionHeading eyebrow="തൽക്ഷണ ആക്സസ്" title="ഇപ്പോൾ തന്നെ ഡൗൺലോഡ് ചെയ്യൂ" icon="✦" />
          <p className="mx-auto mb-6 max-w-md text-white/75 lg:mx-0">
            പേയ്‌മെന്റ് പൂർത്തിയായാലുടൻ PDF നിങ്ങളുടെ ഇമെയിലിലേക്ക് അയച്ചുതരുന്നതാണ്. ഇന്നുതന്നെ നിങ്ങളുടെ
            സാധന ആരംഭിക്കൂ.
          </p>
          <ul className="mx-auto inline-block space-y-3 text-left text-sm text-white/85 lg:mx-0 lg:block font-medium">
            {["100% ഇ-ബുക്ക് — തൽക്ഷണ ഡൗൺലോഡ്", "മൊബൈലിലും കമ്പ്യൂട്ടറിലും എളുപ്പത്തിൽ വായിക്കാം", "ലൈഫ്‌ടൈം ആക്സസ് — എപ്പോൾ വേണമെങ്കിലും എവിടെയിരുന്നും വായിക്കാം"].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[color:var(--gold)]" strokeWidth={3} />
                {x}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="rounded-2xl border border-[color:var(--accent)]/30 bg-card p-6 shadow-[var(--shadow-glow-yoni)] sm:p-8">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-600 font-semibold">ഒറ്റത്തവണ വില</p>
              <p className="text-3xl font-black text-gold">₹249</p>
            </div>
            <div className="rounded-full border border-[color:var(--deep-red)] bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[color:var(--orange-glow)] flicker">
              Instant
            </div>
          </div>
          <p className="mb-4 text-xs text-neutral-600 font-medium">
            പേയ്‌മെന്റ് വിജയകരമാകുമ്പോൾ തന്നെ ഇ-ബുക്ക് ലിങ്ക് നിങ്ങളുടെ ഇമെയിലിലേക്ക് അയയ്ക്കും.
          </p>

          <div className="my-5 h-px bg-neutral-200" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-neutral-600"><span>സബ്‌ടോട്ടൽ</span><span className="font-semibold text-neutral-900">₹249</span></div>
            <div className="flex justify-between text-base"><span className="font-semibold text-neutral-900">ആകെ തുക</span><span className="font-black text-gold">₹249</span></div>
          </div>

          <a
            href="https://superprofile.bio/vp/-4zWwySX?checkout=true"
            className="group mt-5 flex w-full items-center justify-between rounded-xl px-5 py-3.5 text-sm font-bold text-white btn-glow cta-shine pulse-glow hover:btn-glow-hover"
          >
            <span>ഇപ്പോൾ വാങ്ങൂ</span>
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-white/50 font-medium">
            <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--accent)]" />
            സുരക്ഷിതമായ പേയ്‌മെന്റ് · തൽക്ഷണ ഡൗൺലോഡ്
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ---------------- Contact ---------------- */
function ContactSection() {
  return (
    <SectionShell>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="ബന്ധപ്പെടുക" title="SoulMap Creations-മായി ബന്ധപ്പെടുക" center />
        <p className="flex items-center justify-center gap-2 text-sm text-white/70 font-medium">
          <Mail className="h-4 w-4 text-[color:var(--accent)]" />
          dh.soulmap@gmail.com
        </p>
        <div className="mt-10 text-left text-xs leading-relaxed text-white/50">
          <h4 className="mb-2 font-semibold text-white/70">മുന്നറിയിപ്പും പ്രഖ്യാപനവും (Disclaimer)</h4>
          <p>
            ഈ ഇ-ബുക്കിൽ നൽകിയിട്ടുള്ള എല്ലാ വിവരങ്ങളും മന്ത്രങ്ങളും സാധനാ രീതികളും വിദ്യാഭ്യാസപരവും ആത്മീയവുമായ
            അറിവുകൾക്കായി മാത്രം തയ്യാറാക്കിയതാണ്. അധാർമ്മികമോ ഹാനികരമോ ആയ ഏതെങ്കിലും ആവശ്യങ്ങൾക്ക് ഇത്
            ഉപയോഗിച്ചാൽ പ്രസാധകർ ഉത്തരവാദികളായിരിക്കുന്നതല്ല. ദയവായി പൂർണ്ണ ഭക്തിയോടും ശുദ്ധമായ
            മനസ്സോടും കൂടി മാത്രം സാധന ചെയ്യുക.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- Building blocks ---------------- */
function BulletList({ items, check }: { items: string[]; check?: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li
          key={item}
          className="fade-up flex items-start gap-3 text-[15px] text-white/85 transition-transform hover:translate-x-1"
          style={{ animationDelay: `${idx * 70}ms` }}
        >
          <span
            className={`mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[10px] shadow-md ${
              check ? "bg-[var(--gradient-gold)] text-black" : "bg-[var(--gradient-purple)] text-white"
            }`}
          >
            {check ? "✓" : "✦"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:shadow-[var(--shadow-glow-yoni)]">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex text-[color:var(--gold)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current transition-transform group-hover:scale-110" style={{ transitionDelay: `${i * 40}ms` }} />
          ))}
        </div>
        <Quote className="h-5 w-5 text-[color:var(--accent)] transition-transform group-hover:rotate-12" />
      </div>
      <p className="mb-3 text-sm leading-relaxed text-neutral-800">{text}</p>
      <div className="flex items-center gap-2">
        <div className="grid h-7 w-7 place-items-center rounded-full bg-[var(--gradient-purple)] text-xs font-bold text-white">
          {name[0]}
        </div>
        <span className="text-sm font-semibold text-neutral-900">{name}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 pt-8 pb-32">
      <div className="mx-auto max-w-6xl px-4 text-center text-xs text-white/50 sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-1.5 font-medium">
          <Heart className="h-3.5 w-3.5 text-[color:var(--accent)]" />
          © {new Date().getFullYear()} SoulMap Creations · സർവ്വ അവകാശങ്ങളും നിക്ഷിപ്തം
        </p>
      </div>
    </footer>
  );
}

/* ---------------- STICKY OFFER BAR ---------------- */
function StickyOfferBar() {
  const [time, setTime] = useState({ h: 9, m: 50, s: 12 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime((v) => {
        let { h, m, s } = v;
        s--; if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) return { h: 0, m: 0, s: 0 };
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-3xl rounded-2xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg border border-white/10 bg-black/80 backdrop-blur-md"
      style={{ boxShadow: "var(--shadow-glow-yoni)" }}
    >
      <div className="flex items-center gap-3 flex-row">
        <div className="flex items-center gap-2">
          {[time.h, time.m, time.s].map((n, i) => (
            <div key={i} className="text-center">
              <div className="rounded-lg px-2 py-1 font-mono font-bold text-white text-sm min-w-[36px] bg-[var(--gradient-purple)]">
                {pad(n)}
              </div>
              <span className="text-[9px] uppercase tracking-wider text-white/50 font-medium">
                {["മണിക്കൂർ", "മിനിറ്റ്", "സെക്കൻഡ്"][i]}
              </span>
            </div>
          ))}
        </div>
        <div className="text-left">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[color:var(--gold)]">
            ഓഫർ ഉടൻ അവസാനിക്കുന്നു
          </p>
          <p className="text-sm font-bold text-white">
            <span className="line-through opacity-50 text-xs text-white/60">₹999</span>{" "}
            <span className="text-gold font-extrabold">₹249</span>
          </p>
        </div>
      </div>
      <a
        href="https://superprofile.bio/vp/-4zWwySX?checkout=true"
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-white btn-glow cta-shine hover:btn-glow-hover shrink-0 w-full sm:w-auto text-center"
      >
        ഇപ്പോൾ തന്നെ ഡൗൺലോഡ് ചെയ്യൂ <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}
