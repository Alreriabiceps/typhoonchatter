interface HeaderProps {
  onApply: () => void;
}

export function Header({ onApply }: HeaderProps) {
  return (
    <header className="relative z-30 shrink-0 border-b border-white/[0.07]">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 sm:h-20 sm:px-10 lg:px-14">
        <a
          href="/"
          className="group flex items-baseline gap-2.5 sm:gap-3"
          aria-label="Typhoon Agency — home"
        >
          <span className="js-brand text-[19px] font-extrabold uppercase leading-none tracking-[-0.03em] text-white sm:text-[22px]">
            Typhoon Agency
            <span className="text-accent">.</span>
          </span>
        </a>

        <button
          type="button"
          onClick={onApply}
          className="js-brand border border-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 transition-colors duration-200 hover:border-white/35 hover:text-white sm:px-5 sm:text-[11px]"
        >
          Apply
        </button>
      </div>
    </header>
  );
}
