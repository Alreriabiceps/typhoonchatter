import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Header } from './components/Header';
import { CredibilityStrip } from './components/CredibilityStrip';
import { OnlyFansLogo } from './components/OnlyFansLogo';
import { ContactModal } from './components/ContactModal';

const FACTS = [
  { k: 'Payouts', v: 'Weekly USD' },
  { k: 'Setup', v: '100% Remote' },
  { k: 'Shifts', v: '24/7 Coverage' },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroCopyRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const heroMetaRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.js-brand', { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 })
        .fromTo(
          imageRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.75 },
          0.15
        )
        .fromTo(
          heroCopyRef.current?.querySelectorAll('[data-reveal]') ?? [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          '-=0.45'
        )
        .fromTo(platformRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.3')
        .fromTo(heroMetaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.45 }, '-=0.25')
        .fromTo(
          '.js-strip-item',
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 },
          '-=0.2'
        );

      gsap.to(imageRef.current, {
        y: -8,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="typhoon-app"
      className="relative w-full min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] bg-[#08090b] text-white flex flex-col overflow-x-hidden lg:overflow-hidden"
    >
      {/* Ambient wash — no full-bleed photo so the portrait reads clearly */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[#08090b]" />
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-[#0c1218] to-transparent" />
        <div className="absolute -top-24 left-0 w-72 h-72 bg-[rgba(0,175,240,0.07)] blur-3xl" />
      </div>

      <Header onApply={() => setIsModalOpen(true)} />

      <main className="relative z-10 flex-1 flex flex-col justify-center py-6 sm:py-8 lg:py-0">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 xl:gap-16 items-center">
            {/* Copy — second on mobile, first on desktop */}
            <div ref={heroCopyRef} className="order-2 lg:order-1 lg:col-span-7 max-w-2xl">
              <p
                data-reveal
                className="meta-label text-[#00aff0] mb-3 sm:mb-4 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#00aff0]" />
                Creator chatter recruitment
              </p>

              <h1
                data-reveal
                className="font-display text-[3.1rem] sm:text-6xl md:text-7xl lg:text-[4.75rem] font-extrabold uppercase leading-[0.88] tracking-[0.02em] text-white"
              >
                Get paid to chat.
                <span className="block text-white/85">Work for top creators.</span>
              </h1>

              <p
                data-reveal
                className="mt-4 sm:mt-5 text-sm sm:text-base text-zinc-200 leading-relaxed max-w-lg border-l-2 border-[#00aff0] pl-4"
              >
                Join Typhoon as an OnlyFans chatter. Manage DMs, close sales, earn hourly +
                commission. Full training. Weekly USD.
              </p>

              <div data-reveal className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
                <button
                  id="cta-talk-btn"
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary"
                >
                  Apply now
                  <span aria-hidden>→</span>
                </button>
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-zinc-400">
                  Reviewed within 24h
                </span>
              </div>

              <div
                ref={platformRef}
                className="mt-6 sm:mt-7 inline-flex items-center gap-3 border border-white/15 bg-black/45 px-3 sm:px-4 py-2.5 sm:py-3"
              >
                <span className="meta-label text-zinc-500 shrink-0">Accounts on</span>
                <OnlyFansLogo />
              </div>

              <div
                ref={heroMetaRef}
                className="mt-6 sm:mt-7 grid grid-cols-3 gap-px bg-white/10 border border-white/10"
              >
                {FACTS.map((item) => (
                  <div key={item.k} className="bg-[#08090b]/90 px-3 py-3">
                    <div className="meta-label mb-1">{item.k}</div>
                    <div className="font-display text-base sm:text-lg font-bold tracking-wide uppercase leading-tight">
                      {item.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait — first on mobile, right on desktop */}
            <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center lg:items-stretch">
              <div
                ref={imageRef}
                className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none mx-auto lg:mx-0 aspect-[3/4] max-h-[42vh] sm:max-h-[48vh] lg:max-h-[62vh] xl:max-h-[68vh] overflow-hidden border border-white/20 bg-zinc-950"
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&h=1600&q=85"
                  alt="Creator editorial portrait"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src =
                        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&h=1600&q=85';
                    }
                  }}
                  className="w-full h-full object-cover object-center contrast-[1.04] brightness-[0.96]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 pointer-events-none" />
              </div>

              <ul className="mt-3 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none border border-white/10 bg-black/50 divide-y divide-white/10">
                {[
                  'Fluent English · sales-minded writing',
                  '25–35 hrs/week · nights valued',
                  'Paid onboarding · Discord + Telegram',
                ].map((line, i) => (
                  <li key={line} className="flex gap-3 px-3.5 py-2.5 items-center">
                    <span className="font-mono text-[10px] text-[#00aff0] shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-300">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <CredibilityStrip />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
