export function Waveform() {
  return (
    <svg
      className="h-16 w-full text-[#246BFE]"
      viewBox="0 0 760 96"
      role="img"
      aria-label="Technical RF waveform line"
      fill="none"
    >
      <path
        d="M2 54 H76 L88 26 L108 70 L130 18 L154 78 L178 54 H252 L268 36 L286 64 L304 34 L322 54 H394 L410 22 L434 74 L454 28 L482 66 L504 54 H588 L604 38 L624 60 L644 34 L670 54 H758"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 54 H758"
        stroke="currentColor"
        strokeOpacity="0.16"
        strokeWidth="2"
        strokeDasharray="8 12"
      />
    </svg>
  );
}
