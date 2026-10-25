import type { SVGProps } from "react";

// One simple line icon per destination country, each showing a well-known landmark.
// Drawn on a 24x24 grid with the same round-capped outline style as the lucide icons
// used elsewhere on the site, so they sit comfortably next to them.

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Russia — St Basil's Cathedral (onion domes) */
export const RussiaIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 2v2" />
    <path d="M12 4c-1.3 1.6-2.6 2.8-2.6 4.6 0 1.5 1.2 2.6 2.6 2.6s2.6-1.1 2.6-2.6C14.6 6.8 13.3 5.6 12 4z" />
    <path d="M10 11.2V21M14 11.2V21" />
    <path d="M5.5 8c-1 1.2-2 2.1-2 3.4 0 1.1.9 1.9 2 1.9s2-.8 2-1.9C7.5 10.1 6.5 9.2 5.5 8z" />
    <path d="M3.8 13.3V21M7.2 13.3V21M7.2 17H10" />
    <path d="M18.5 8c-1 1.2-2 2.1-2 3.4 0 1.1.9 1.9 2 1.9s2-.8 2-1.9C20.5 10.1 19.5 9.2 18.5 8z" />
    <path d="M16.8 13.3V21M20.2 13.3V21M14 17h2.8" />
    <path d="M2 21h20" />
  </Icon>
);

/** Armenia — Mount Ararat (two peaks, snow caps) */
export const ArmeniaIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2 20L8 6l5.5 9.5L17 10l5 10z" />
    <path d="M5.4 12l1.6 1.5L8.5 12l1.5 1.5 1.5-1.5" />
    <path d="M15.4 12.5l1.4 1.3 1.45-1.3" />
  </Icon>
);

/** Greece — the Parthenon */
export const GreeceIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2.5 9L12 4l9.5 5z" />
    <path d="M4 11h16" />
    <path d="M5 11v7M8.5 11v7M12 11v7M15.5 11v7M19 11v7" />
    <path d="M3.5 18h17M2.5 21h19" />
  </Icon>
);

/** UAE — Burj Khalifa (stepped tower) */
export const UaeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 1.5V5.5" />
    <path d="M11.2 5.5h1.6l.6 4.5h.8l.6 5h1l1.2 6H7l1.2-6h1l.6-5h.8z" />
    <path d="M12 10v11" />
  </Icon>
);

/** Kuwait — Kuwait Towers (spheres on slender shafts) */
export const KuwaitIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 2v3" />
    <circle cx="9" cy="8.5" r="3.5" />
    <path d="M9 12v9" />
    <circle cx="9" cy="16.2" r="1.7" />
    <path d="M17 8.6v2.2" />
    <circle cx="17" cy="13" r="2.2" />
    <path d="M17 15.2V21" />
    <path d="M5 21h16" />
  </Icon>
);

/** Oman — Sultan Qaboos Grand Mosque (dome and minarets) */
export const OmanIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5.5v3" />
    <path d="M7.5 13a4.5 4.5 0 0 1 9 0" />
    <path d="M6 13h12v8H6z" />
    <path d="M10.5 21v-3.5a1.5 1.5 0 0 1 3 0V21" />
    <path d="M3 21V9l.9-1.8L4.8 9v12" />
    <path d="M19.2 21V9l.9-1.8L21 9v12" />
  </Icon>
);

/** Japan — torii gate */
export const JapanIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2 5.5c3 1.8 17 1.8 20 0" />
    <path d="M4.5 8.5h15" />
    <path d="M5.5 12h13" />
    <path d="M7 8.5V21M17 8.5V21" />
    <path d="M12 7.3V12" />
  </Icon>
);

/** Germany — Brandenburg Gate */
export const GermanyIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M10 6V4.8h4V6" />
    <path d="M3.5 6h17v2.5h-17z" />
    <path d="M3 10h18" />
    <path d="M4.5 10v11M7.5 10v11M10.5 10v11M13.5 10v11M16.5 10v11M19.5 10v11" />
    <path d="M2.5 21h19" />
  </Icon>
);

/** Belarus — Mir Castle (corner towers with conical roofs) */
export const BelarusIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 21V10h5v11" />
    <path d="M2.5 10l3-5.5 3 5.5z" />
    <path d="M16 21V10h5v11" />
    <path d="M15.5 10l3-5.5 3 5.5z" />
    <path d="M8 21v-7M16 21v-7" />
    <path d="M8 14v-1.5h2V14M11 14v-1.5h2V14M14 14v-1.5h2V14" />
    <path d="M10.8 21v-2.7a1.2 1.2 0 0 1 2.4 0V21" />
  </Icon>
);

export const landmarks = {
  ru: RussiaIcon,
  am: ArmeniaIcon,
  gr: GreeceIcon,
  ae: UaeIcon,
  kw: KuwaitIcon,
  om: OmanIcon,
  jp: JapanIcon,
  de: GermanyIcon,
  by: BelarusIcon,
} as const;

export type CountryCode = keyof typeof landmarks;
