type HummingbirdProps = {
  className?: string;
  title?: string;
};

export default function Hummingbird({
  className = "",
  title = "PictureThese hummingbird",
}: HummingbirdProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 82"
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M68 43c12-11 25-16 39-16-10 5-18 12-24 22 9 2 16 6 22 13-15-2-27-7-36-15"
        fill="currentColor"
      />
      <path
        className="bird-wing bird-wing--top"
        d="M65 42C53 23 49 10 51 2c10 8 17 21 20 37"
        fill="var(--rose)"
      />
      <path
        className="bird-wing bird-wing--bottom"
        d="M63 45c-15 4-27 12-36 24 16-2 30-8 41-19"
        fill="var(--sage)"
      />
      <path d="M68 43c-7-3-14-2-20 3 7 6 15 8 24 3l13-8-17 2Z" fill="currentColor" />
      <path d="M49 46 8 34l39 17" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="82" cy="39" r="2" fill="var(--paper)" />
    </svg>
  );
}
