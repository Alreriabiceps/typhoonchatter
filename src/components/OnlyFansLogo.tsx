import React from 'react';

/** OnlyFans brand mark for platform partnership display. */
export const OnlyFansLogo: React.FC<{ className?: string; compact?: boolean }> = ({
  className = '',
  compact = false,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      aria-label="OnlyFans"
    >
      {/* OF winged monogram */}
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={compact ? 'w-5 h-5' : 'w-7 h-7'}
        aria-hidden
      >
        <circle cx="13" cy="16" r="10" fill="#00AEEF" />
        <circle cx="13" cy="16" r="4.25" fill="#08090b" />
        <path
          fill="#008CCF"
          d="M20.5 7.2c2.6 1.5 4.6 4 5.5 6.9.5 1.7.6 3.5.3 5.2-.4 2.1-1.4 4-2.9 5.5 2.2.4 4.5.1 6.5-1 1.7-1 3-2.6 3.6-4.5.8-2.5.5-5.3-.7-7.6-1.4-2.6-3.8-4.5-6.6-5.3-1.9-.5-3.9-.4-5.7.2v.6z"
        />
        <path
          fill="#008CCF"
          d="M22 8.5c1.8.2 3.4 1.1 4.5 2.5 1 1.3 1.5 3 1.4 4.7-.1 1.4-.6 2.7-1.5 3.8l-2.2-1.5c.5-.6.7-1.3.8-2.1.1-1-.2-2-.8-2.8-.6-.8-1.5-1.3-2.5-1.5V8.5z"
        />
      </svg>
      {!compact && (
        <span className="font-display text-lg sm:text-xl font-bold tracking-[0.02em] leading-none">
          <span className="text-[#00AEEF]">Only</span>
          <span className="text-[#008CCF]">Fans</span>
        </span>
      )}
    </div>
  );
};
