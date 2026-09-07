import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, ShieldCheck, Zap, MessageSquare } from 'lucide-react';
import { TyphoonLogo } from './components/TyphoonLogo';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation refs
  const headerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const credibilityRef = useRef<HTMLDivElement>(null);

  const imageCardRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // 1. Logo and top header fade in
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        // 2. Creator Chat Management label badge
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        )
        // 3. Huge headline reveals smoothly
        .fromTo(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          { opacity: 0, y: 30, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
          {
            opacity: 1,
            y: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            stagger: 0.12,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.3'
        )
        // 4. Short copy fades in
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.4'
        )
        // 5. CTA button appears
        .fromTo(
          ctaContainerRef.current,
          { opacity: 0, scale: 0.94, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.4)' },
          '-=0.3'
        )
        // 6. Tiny credibility line
        .fromTo(
          credibilityRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.2'
        )
        // 7. Model image smoothly reveals
        .fromTo(
          imageCardRef.current,
          { opacity: 0, scale: 0.95, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          0.2
        )
        .fromTo(
          glowRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 0.7, scale: 1, duration: 1.2, ease: 'power2.out' },
          0.3
        );

      // Subtle ambient floating movement for the model card
      gsap.to(imageCardRef.current, {
        y: -10,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  // Subtle Mouse Parallax on Desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || !imageCardRef.current) return;

      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPercent = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

      // Very subtle parallax tilt & shift
      gsap.to(imageCardRef.current, {
        x: xPercent * 12,
        y: yPercent * 10,
        rotationY: xPercent * 3,
        rotationX: -yPercent * 3,
        duration: 0.8,
        ease: 'power1.out',
        transformPerspective: 1200,
        overwrite: 'auto',
      });

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: xPercent * 20,
          y: yPercent * 18,
          duration: 1,
          ease: 'power1.out',
          overwrite: 'auto',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="typhoon-app"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen bg-[#0a0a0c] text-white flex flex-col justify-between overflow-x-hidden select-none"
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00aff0]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-[#00aff0]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-zinc-800/20 rounded-full blur-3xl" />
      </div>

      {/* TOP HEADER: Logo & Discreet Status */}
      <header
        ref={headerRef}
        className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8 flex items-center justify-between z-20"
      >
        <TyphoonLogo />

        {/* Minimalist hiring status indicator */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00aff0] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00aff0]" />
          </span>
          <span className="text-[11px] font-semibold tracking-wider text-zinc-300 uppercase">
            Now Hiring • Remote Shifts Open
          </span>
        </div>
      </header>

      {/* MAIN VIEWPORT: Editorial Split-Screen Layout */}
      {/* On desktop: 100vh split layout */}
      {/* On mobile: Naturally stacks as 1. Logo (in header above) -> 2. Model image -> 3. Headline -> 4. Copy -> 5. CTA */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-4 sm:py-6 lg:py-0 flex-1 flex flex-col justify-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT SIDE (On Desktop: Left Column | On Mobile: Order 2)  */}
          {/* ========================================================= */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Small Label */}
            <div ref={badgeRef} className="mb-3 sm:mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00aff0]/10 border border-[#00aff0]/25 text-[#00aff0] text-xs font-bold tracking-[0.22em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00aff0]" />
                <span>CHATTER RECRUITMENT</span>
              </div>
            </div>

            {/* Huge Headline */}
            <h1
              id="main-headline"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.25rem] font-black tracking-[-0.035em] text-white leading-[0.96] uppercase"
            >
              <span ref={headlineLine1Ref} className="block text-white">
                GET PAID TO CHAT.
              </span>
              <span
                ref={headlineLine2Ref}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400"
              >
                WORK FOR TOP CREATORS.
              </span>
            </h1>

            {/* One Short Paragraph (max 2 lines) */}
            <p
              ref={copyRef}
              className="mt-5 sm:mt-6 text-base sm:text-lg text-zinc-300 font-normal leading-snug sm:leading-relaxed max-w-xl"
            >
              Join Typhoon Agency as an official creator chatter. Earn high commissions and competitive hourly rates managing DMs for top models worldwide.
            </p>

            {/* Primary CTA Button */}
            <div ref={ctaContainerRef} className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                id="cta-talk-btn"
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-[#00aff0] hover:bg-[#1bb8f5] active:scale-[0.98] text-black font-extrabold text-sm sm:text-base tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer shadow-[0_0_40px_-5px_rgba(0,175,240,0.55)] hover:shadow-[0_0_55px_-2px_rgba(0,175,240,0.75)]"
              >
                <span>APPLY NOW</span>
                <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>

              {/* Discreet high-value volume tag */}
              <div className="hidden xl:flex items-center gap-2 pl-2 text-xs font-semibold text-zinc-400 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00aff0]" />
                <span>Weekly USD payouts • Full training provided</span>
              </div>
            </div>

            {/* Tiny Credibility Line */}
            <div
              ref={credibilityRef}
              id="credibility-line"
              className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/[0.08] flex items-center gap-2 sm:gap-3 flex-wrap"
            >
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-400 uppercase">
                100% REMOTE
              </span>
              <span className="text-zinc-600 font-bold">•</span>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-400 uppercase">
                TOP COMMISSIONS
              </span>
              <span className="text-zinc-600 font-bold">•</span>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-400 uppercase">
                WEEKLY PAYOUTS
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE (On Desktop: Right Column | On Mobile: Order 1) */}
          {/* ========================================================= */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center relative">
            
            {/* Subtle Blue Glow behind model */}
            <div
              ref={glowRef}
              className="absolute -inset-4 sm:-inset-6 bg-[#00aff0]/20 rounded-3xl blur-3xl -z-10 pointer-events-none transition-all"
            />

            {/* Editorial Creator Photograph Container */}
            <div
              ref={imageCardRef}
              className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none aspect-[3/4] max-h-[46vh] sm:max-h-[50vh] lg:max-h-[66vh] xl:max-h-[70vh] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-zinc-950"
            >
              {/* High-quality professional female creator/model photograph (tasteful, editorial crop) */}
              <img
                ref={imageInnerRef}
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&h=1600&q=85"
                alt="Creator Editorial Portrait"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to alternative high-fashion portrait if needed
                  const target = e.target as HTMLImageElement;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&h=1600&q=85';
                  }
                }}
                className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.96]"
              />

              {/* Editorial bottom dark gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

              {/* Minimalist discreet creator badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="px-3 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00aff0]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/90">
                    MANAGE TOP CREATOR ACCOUNTS
                  </span>
                </div>
                <div className="px-2.5 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#00aff0]">
                    24/7 SHIFTS
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER / BOTTOM BAR: Ultra-clean minimal branding */}
      <footer className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-4 sm:pb-6 flex items-center justify-between text-[11px] text-zinc-500 font-medium tracking-wider uppercase z-20">
        <span>© {new Date().getFullYear()} TYPHOON AGENCY</span>
        <span className="hidden sm:inline-block text-zinc-400">
          HIRING REMOTE CREATOR CHATTERS WORLDWIDE
        </span>
      </footer>

      {/* The Centered Modal: LET'S WORK TOGETHER */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
