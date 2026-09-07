import React from 'react';

export const TyphoonLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Typhoon Geometric Icon */}
      <div className="relative w-7 h-7 flex items-center justify-center">
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Subtle outer vortex rings */}
          <path
            d="M14 2C20.6274 2 26 7.37258 26 14C26 16.9452 24.9419 19.6433 23.1818 21.7273"
            stroke="#00aff0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14 26C7.37258 26 2 20.6274 2 14C2 11.0548 3.05809 8.3567 4.81818 6.27273"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Center swirling core */}
          <circle cx="14" cy="14" r="3" fill="#00aff0" />
          <path
            d="M14 7C17.866 7 21 10.134 21 14"
            stroke="#00aff0"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M14 21C10.134 21 7 17.866 7 14"
            stroke="#ffffff"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="text-base font-extrabold tracking-[0.22em] text-white leading-none">
          TYPHOON
        </span>
        <span className="text-[9px] font-semibold tracking-[0.35em] text-[#00aff0] uppercase leading-none mt-1">
          AGENCY
        </span>
      </div>
    </div>
  );
};
