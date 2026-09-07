import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');
  const [experience, setExperience] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    // Swift simulated processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setName('');
      setEmail('');
      setTelegram('');
      setExperience('');
    }, 300);
  };

  return (
    <div
      id="contact-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="contact-modal-dialog"
        className="relative w-full max-w-lg bg-[#0d0f14] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_-15px_rgba(0,175,240,0.25)] text-white overflow-hidden"
      >
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00aff0] to-transparent opacity-80" />

        {/* Close Button */}
        <button
          id="close-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#00aff0]/10 border border-[#00aff0]/30 flex items-center justify-center mb-4 text-[#00aff0]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
              APPLICATION RECEIVED
            </h3>
            <p className="text-sm text-zinc-400 max-w-xs mb-6">
              Our chatter recruitment manager will review your submission and contact you via Telegram/Email within 24 hours.
            </p>
            <button
              id="success-close-btn"
              type="button"
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-full bg-[#00aff0] hover:bg-[#009fd9] text-black font-semibold text-sm transition-all shadow-[0_0_20px_rgba(0,175,240,0.4)] cursor-pointer"
            >
              DONE
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[11px] font-bold tracking-widest text-[#00aff0] uppercase block mb-1">
                TYPHOON RECRUITMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                APPLY AS A CHATTER
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label
                  htmlFor="chatter-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1"
                >
                  Full Name <span className="text-[#00aff0]">*</span>
                </label>
                <input
                  id="chatter-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 bg-[#13161f] border border-white/10 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#00aff0] focus:ring-1 focus:ring-[#00aff0] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="chatter-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1"
                >
                  Email <span className="text-[#00aff0]">*</span>
                </label>
                <input
                  id="chatter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@gmail.com"
                  className="w-full px-4 py-2.5 bg-[#13161f] border border-white/10 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#00aff0] focus:ring-1 focus:ring-[#00aff0] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="chatter-telegram"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1"
                >
                  Telegram / Discord Username <span className="text-[#00aff0]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">
                    @
                  </span>
                  <input
                    id="chatter-telegram"
                    type="text"
                    required
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    placeholder="telegram_handle"
                    className="w-full pl-8 pr-4 py-2.5 bg-[#13161f] border border-white/10 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#00aff0] focus:ring-1 focus:ring-[#00aff0] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="chatter-experience"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1"
                >
                  Experience & Availability
                </label>
                <textarea
                  id="chatter-experience"
                  rows={2}
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Any prior chatting/sales experience, typing speed, and weekly hours available..."
                  className="w-full px-4 py-2.5 bg-[#13161f] border border-white/10 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#00aff0] focus:ring-1 focus:ring-[#00aff0] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  id="send-request-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#00aff0] hover:bg-[#15baff] active:scale-[0.99] text-black font-bold text-sm tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(0,175,240,0.6)] cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>PROCESSING...</span>
                    </>
                  ) : (
                    <span>SUBMIT APPLICATION →</span>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-zinc-500 tracking-wide pt-0.5">
                100% remote worldwide • High commissions • Weekly payouts
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
