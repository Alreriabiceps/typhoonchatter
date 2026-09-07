import React from 'react';

export const TyphoonLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <div className="relative w-7 h-7 flex items-center justify-center border border-[#00aff0]/50 bg-black/40">
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] h-[18px]"
        >
          <path
            d="M14 2C20.6274 2 26 7.37258 26 14C26 16.9452 24.9419 19.6433 23.1818 21.7273"
            stroke="#00aff0"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <path
            d="M14 26C7.37258 26 2 20.6274 2 14C2 11.0548 3.05809 8.3567 4.81818 6.27273"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <rect x="11" y="11" width="6" height="6" fill="#00aff0" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="font-display text-lg font-extrabold tracking-[0.18em] text-white leading-none uppercase">
          Typhoon
        </span>
        <span className="font-mono text-[9px] font-medium tracking-[0.32em] text-[#00aff0] uppercase leading-none mt-1">
          Agency
        </span>
      </div>
    </div>
  );
};
