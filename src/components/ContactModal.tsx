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
  const [timezone, setTimezone] = useState('');
  const [hours, setHours] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    if (!name || !email || !telegram) return;

    setIsSubmitting(true);
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
      setTimezone('');
      setHours('');
    }, 300);
  };

  return (
    <div
      id="contact-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/88 backdrop-blur-[3px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="contact-modal-dialog"
        className="relative w-full max-w-xl bg-[#0c0e12] border border-white/15 text-white overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <div className="h-[3px] w-full bg-[#00aff0]" />

        <button
          id="close-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="px-6 sm:px-8 py-12 text-center flex flex-col items-center">
            <div className="w-12 h-12 border border-[#00aff0]/40 bg-[#00aff0]/10 flex items-center justify-center mb-5 text-[#00aff0]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <p className="meta-label text-[#00aff0] mb-2">Status</p>
            <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white mb-3">
              Application received
            </h3>
            <p className="text-sm text-zinc-400 max-w-sm mb-8 leading-relaxed">
              Recruiting will review your submission and reach out via Telegram or email within 24
              hours. Keep notifications on.
            </p>
            <button
              id="success-close-btn"
              type="button"
              onClick={handleResetAndClose}
              className="btn-primary"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="px-6 sm:px-8 py-7 sm:py-8">
            <div className="mb-6 pr-8">
              <span className="meta-label text-[#00aff0] block mb-2">Typhoon recruitment</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide">
                Apply as a chatter
              </h2>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Required fields marked. Incomplete applications are not reviewed.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="chatter-name" className="meta-label block mb-1.5">
                    Full name <span className="text-[#00aff0]">*</span>
                  </label>
                  <input
                    id="chatter-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Legal or preferred name"
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="chatter-email" className="meta-label block mb-1.5">
                    Email <span className="text-[#00aff0]">*</span>
                  </label>
                  <input
                    id="chatter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="chatter-telegram" className="meta-label block mb-1.5">
                  Telegram / Discord <span className="text-[#00aff0]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm font-mono">
                    @
                  </span>
                  <input
                    id="chatter-telegram"
                    type="text"
                    required
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    placeholder="handle"
                    className="input-field !pl-8"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="chatter-timezone" className="meta-label block mb-1.5">
                    Timezone
                  </label>
                  <input
                    id="chatter-timezone"
                    type="text"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    placeholder="e.g. UTC+8 / EST"
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="chatter-hours" className="meta-label block mb-1.5">
                    Weekly hours
                  </label>
                  <input
                    id="chatter-hours"
                    type="text"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="e.g. 30 hrs, nights"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="chatter-experience" className="meta-label block mb-1.5">
                  Experience & notes
                </label>
                <textarea
                  id="chatter-experience"
                  rows={3}
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Prior chatting/sales experience, typing speed, adult niche comfort, preferred shift windows…"
                  className="input-field resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  id="send-request-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Processing…</span>
                    </>
                  ) : (
                    <span>Submit application →</span>
                  )}
                </button>
              </div>

              <p className="meta-label text-center text-zinc-500 pt-1">
                Response within 24h · Remote worldwide
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
