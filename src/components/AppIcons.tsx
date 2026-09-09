import React, { useId } from 'react';

/**
 * macOS Tahoe (26) style app icons, drawn as inline SVG on a 64x64 grid and
 * clipped to Apple's squircle. Modelled on the system icons shipped with
 * macOS 26.
 */

export interface AppIconProps {
  className?: string;
}

// Apple's icon mask is a superellipse. Tahoe's corners are rounder than the
// Big Sur era, which lands around an exponent of 4.
const SQUIRCLE = (() => {
  const n = 4;
  const steps = 120;
  const r = 32;
  const c = 32;
  const points: string[] = [];
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const ct = Math.cos(t);
    const st = Math.sin(t);
    const x = c + r * Math.sign(ct) * Math.abs(ct) ** (2 / n);
    const y = c + r * Math.sign(st) * Math.abs(st) ** (2 / n);
    points.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `M${points.join('L')}Z`;
})();

// useId() returns ids containing ":", which is unsafe inside url(#...) references.
const useUid = () => useId().replace(/:/g, '');

interface TileProps {
  className?: string;
  uid: string;
  defs?: React.ReactNode;
  /** Draw the art un-clipped (used by shapes like the folder that aren't tiles) */
  free?: boolean;
  children: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({ className, uid, defs, free, children }) => (
  <svg viewBox="0 0 64 64" className={className} role="presentation" focusable="false">
    <defs>
      <clipPath id={`${uid}-clip`}>
        <path d={SQUIRCLE} />
      </clipPath>
      {defs}
    </defs>
    {free ? children : <g clipPath={`url(#${uid}-clip)`}>{children}</g>}
    {!free && (
      <path d={SQUIRCLE} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.9" />
    )}
  </svg>
);

/* ------------------------------------------------------------------ Finder */

export const FinderIcon: React.FC<AppIconProps> = ({ className }) => {
  const uid = useUid();
  return (
    <Tile
      className={className}
      uid={uid}
      defs={
        <>
          <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="#3AC8FF" />
            <stop offset="50%" stopColor="#1F9DF7" />
            <stop offset="100%" stopColor="#1272EE" />
          </linearGradient>
          <linearGradient id={`${uid}-face`} x1="0.2" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#EAF2FD" />
            <stop offset="100%" stopColor="#CFE0F5" />
          </linearGradient>
        </>
      }
    >
      <rect width="64" height="64" fill={`url(#${uid}-bg)`} />
      {/* Profile face: forehead, nose ridge down to the tip, then the cheek */}
      <path
        d="M32.5 5.2 Q26.6 15.4 23.4 26 Q23 27.5 24.4 28.4 L29.5 32.2 V50.6 A6.6 6.6 0 0 0 36.1 57.2 H48.4 A8.4 8.4 0 0 0 56.8 48.8 V13.6 A8.4 8.4 0 0 0 48.4 5.2 Z"
        fill={`url(#${uid}-face)`}
      />
      <g fill="#16283C">
        <rect x="16" y="16.5" width="2.8" height="8.6" rx="1.4" />
        <rect x="44" y="16.5" width="2.8" height="8.6" rx="1.4" />
      </g>
      <path
        d="M11 41.8 Q32 55 53.8 42.2"
        fill="none"
        stroke="#16283C"
        strokeWidth="2.9"
        strokeLinecap="round"
      />
    </Tile>
  );
};

/* -------------------------------------------------------------------- Mail */

export const MailIcon: React.FC<AppIconProps> = ({ className }) => {
  const uid = useUid();
  return (
    <Tile
      className={className}
      uid={uid}
      defs={
        <>
          <linearGradient id={`${uid}-bg`} x1="0.2" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="#63CFFB" />
            <stop offset="50%" stopColor="#2E9BF4" />
            <stop offset="100%" stopColor="#1F80EE" />
          </linearGradient>
          <linearGradient id={`${uid}-paper`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E7EEF7" />
          </linearGradient>
          <linearGradient id={`${uid}-flap`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4F8FC" />
            <stop offset="100%" stopColor="#D9E4F1" />
          </linearGradient>
        </>
      }
    >
      <rect width="64" height="64" fill={`url(#${uid}-bg)`} />
      <rect x="13" y="20" width="38" height="24" rx="3" fill={`url(#${uid}-paper)`} />
      <path d="M14.4 21.3h35.2L32 36.6Z" fill={`url(#${uid}-flap)`} />
      <path
        d="M14 21.2 32 36.8 50 21.2"
        fill="none"
        stroke="#93AEC9"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <g stroke="#CBD8E7" strokeWidth="1.1" strokeLinecap="round">
        <path d="M14.4 42.8 25.5 33.4" />
        <path d="M49.6 42.8 38.5 33.4" />
      </g>
    </Tile>
  );
};

/* ------------------------------------------------------------------ Photos */

export const PhotosIcon: React.FC<AppIconProps> = ({ className }) => {
  const uid = useUid();
  // Clockwise from the top, matching the system pinwheel.
  const petals = [
    '#FF8B14',
    '#FFD32E',
    '#A9D63C',
    '#31B94E',
    '#2F7BEA',
    '#7B4FD6',
    '#E0349B',
    '#F2453D',
  ];
  const petal =
    'M32 32.8 C24.8 24.4 22 20.4 22.9 16.2 C23.8 11.8 27.5 9.4 32 9.4 C36.5 9.4 40.2 11.8 41.1 16.2 C42 20.4 39.2 24.4 32 32.8 Z';
  return (
    <Tile
      className={className}
      uid={uid}
      defs={
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F1F3" />
        </linearGradient>
      }
    >
      <rect width="64" height="64" fill={`url(#${uid}-bg)`} />
      <g style={{ mixBlendMode: 'multiply' }}>
        {petals.map((color, i) => (
          <path
            key={color}
            d={petal}
            fill={color}
            opacity="0.8"
            transform={`rotate(${i * 45} 32 32)`}
          />
        ))}
      </g>
    </Tile>
  );
};

/* ---------------------------------------------------------------- Contacts */

export const ContactsIcon: React.FC<AppIconProps> = ({ className }) => {
  const uid = useUid();
  return (
    <Tile
      className={className}
      uid={uid}
      defs={
        <>
          <linearGradient id={`${uid}-card`} x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#ECEAE2" />
            <stop offset="100%" stopColor="#D8D5CA" />
          </linearGradient>
          <linearGradient id={`${uid}-avatar`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C7C3B7" />
            <stop offset="100%" stopColor="#B1ADA0" />
          </linearGradient>
          <clipPath id={`${uid}-avatar-clip`}>
            <circle cx="29" cy="31.5" r="17" />
          </clipPath>
        </>
      }
    >
      <rect width="64" height="64" fill={`url(#${uid}-card)`} />
      {/* Address-book tabs along the right edge */}
      <g>
        <rect x="55.5" y="6" width="8.5" height="14" fill="#6EC5F7" />
        <rect x="55.5" y="20" width="8.5" height="14" fill="#F5A231" />
        <rect x="55.5" y="34" width="8.5" height="14" fill="#5FD07A" />
      </g>
      <circle cx="29" cy="31.5" r="17" fill={`url(#${uid}-avatar)`} />
      <g clipPath={`url(#${uid}-avatar-clip)`} fill="#FCFBF7">
        <circle cx="29" cy="25.6" r="7.3" />
        <path d="M29 35c7.5 0 13.5 5.5 13.5 13.5h-27C15.5 40.5 21.5 35 29 35Z" />
      </g>
    </Tile>
  );
};

/* ------------------------------------------------------------------ Folder */

export const FolderIcon: React.FC<AppIconProps> = ({ className }) => {
  const uid = useUid();
  return (
    <Tile
      className={className}
      uid={uid}
      free
      defs={
        <>
          <linearGradient id={`${uid}-back`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A9DEF9" />
            <stop offset="100%" stopColor="#7CC8F2" />
          </linearGradient>
          <linearGradient id={`${uid}-front`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A5DDF8" />
            <stop offset="100%" stopColor="#5FBCEE" />
          </linearGradient>
        </>
      }
    >
      <path
        d="M3 16a3 3 0 0 1 3-3h22a3 3 0 0 1 2.2 1l3.1 3.4a3 3 0 0 0 2.2 1H58a3 3 0 0 1 3 3v31.6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"
        fill={`url(#${uid}-back)`}
      />
      <path
        d="M2 25.5a3 3 0 0 1 3-3h54a3 3 0 0 1 3 3v26.5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
        fill={`url(#${uid}-front)`}
      />
      <path
        d="M5 22.5h54a3 3 0 0 1 3 3H2a3 3 0 0 1 3-3z"
        fill="#FFFFFF"
        opacity="0.5"
      />
    </Tile>
  );
};

/* ---------------------------------------------------------------- Terminal */

export const TerminalIcon: React.FC<AppIconProps> = ({ className }) => {
  const uid = useUid();
  return (
    <Tile
      className={className}
      uid={uid}
      defs={
        <linearGradient id={`${uid}-bg`} x1="0.2" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#3E3E42" />
          <stop offset="60%" stopColor="#232326" />
          <stop offset="100%" stopColor="#151517" />
        </linearGradient>
      }
    >
      <rect width="64" height="64" fill={`url(#${uid}-bg)`} />
      <path
        d="M12.5 16.4 23.6 23.2 12.5 30"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="26.8" y="30.6" width="13.5" height="3" rx="1.5" fill="#FFFFFF" />
    </Tile>
  );
};

/* ------------------------------------------------------------------- Notes */

export const NotesIcon: React.FC<AppIconProps> = ({ className }) => {
  const uid = useUid();
  return (
    <Tile
      className={className}
      uid={uid}
      defs={
        <>
          <linearGradient id={`${uid}-page`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F4F4F4" />
          </linearGradient>
          <linearGradient id={`${uid}-band`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFDD57" />
            <stop offset="100%" stopColor="#FFCB36" />
          </linearGradient>
        </>
      }
    >
      <rect width="64" height="64" fill={`url(#${uid}-page)`} />
      <rect width="64" height="17" fill={`url(#${uid}-band)`} />
      {/* Perforations under the binding */}
      <g fill="#D8D8D8">
        {Array.from({ length: 9 }, (_, i) => (
          <circle key={i} cx={7 + i * 6.25} cy="20.5" r="1" />
        ))}
      </g>
      <g fill="#DCDCDC">
        <rect x="9" y="29" width="46" height="1.8" rx="0.9" />
        <rect x="9" y="38.5" width="46" height="1.8" rx="0.9" />
        <rect x="9" y="48" width="46" height="1.8" rx="0.9" />
      </g>
    </Tile>
  );
};

/* ------------------------------------------------------------------ GitHub */

export const GithubIcon: React.FC<AppIconProps> = ({ className }) => {
  const uid = useUid();
  return (
    <Tile
      className={className}
      uid={uid}
      defs={
        <linearGradient id={`${uid}-bg`} x1="0.2" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#40464D" />
          <stop offset="60%" stopColor="#23282E" />
          <stop offset="100%" stopColor="#161A1F" />
        </linearGradient>
      }
    >
      <rect width="64" height="64" fill={`url(#${uid}-bg)`} />
      <g transform="translate(10 10) scale(1.833)">
        <path
          fill="#FFFFFF"
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </g>
    </Tile>
  );
};

/* ---------------------------------------------------------------- LinkedIn */

export const LinkedinIcon: React.FC<AppIconProps> = ({ className }) => {
  const uid = useUid();
  return (
    <Tile
      className={className}
      uid={uid}
      defs={
        <linearGradient id={`${uid}-bg`} x1="0.2" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#3596DC" />
          <stop offset="60%" stopColor="#0D72C6" />
          <stop offset="100%" stopColor="#0A61AE" />
        </linearGradient>
      }
    >
      <rect width="64" height="64" fill={`url(#${uid}-bg)`} />
      <g transform="translate(9.9 9.9) scale(1.86)" fill="#FFFFFF">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
        <path d="M5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z" />
        <path d="M7.119 20.452H3.555V9h3.564v11.452z" />
      </g>
    </Tile>
  );
};

/* ---------------------------------------------------------------- Settings */

/** Fine-toothed sprocket, like the System Settings gear. */
const sprocket = (cx: number, cy: number, rOuter: number, rRoot: number, teeth: number) => {
  const seg: string[] = [];
  const step = (Math.PI * 2) / teeth;
  const pt = (r: number, a: number) => `${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`;
  for (let i = 0; i < teeth; i++) {
    const a0 = i * step;
    const tip = step * 0.3;
    const gap = step * 0.2;
    seg.push(i === 0 ? `M${pt(rRoot, a0)}` : `L${pt(rRoot, a0)}`);
    seg.push(`L${pt(rOuter, a0 + gap)}`);
    seg.push(`L${pt(rOuter, a0 + gap + tip)}`);
    seg.push(`L${pt(rRoot, a0 + gap + tip + gap)}`);
  }
  return `${seg.join('')}Z`;
};

export const SettingsIcon: React.FC<AppIconProps> = ({ className }) => {
  const uid = useUid();
  const spokes = [90, 210, 330];
  return (
    <Tile
      className={className}
      uid={uid}
      defs={
        <>
          <linearGradient id={`${uid}-bg`} x1="0.2" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#B4B4B7" />
            <stop offset="100%" stopColor="#7C7C80" />
          </linearGradient>
          <linearGradient id={`${uid}-metal`} x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#F2F2F3" />
            <stop offset="100%" stopColor="#C2C2C6" />
          </linearGradient>
        </>
      }
    >
      <rect width="64" height="64" fill={`url(#${uid}-bg)`} />
      {/* Small gear tucked behind, upper left */}
      <g opacity="0.75" fill="#8E8E93">
        <path d={sprocket(18, 20.5, 14, 11.2, 20)} />
        <circle cx="18" cy="20.5" r="7" fill={`url(#${uid}-bg)`} />
      </g>
      {/* Main sprocket with three spokes */}
      <g fill={`url(#${uid}-metal)`}>
        <path d={sprocket(33.5, 34, 27, 23.5, 36)} />
      </g>
      <circle cx="33.5" cy="34" r="14" fill={`url(#${uid}-bg)`} />
      <g stroke={`url(#${uid}-metal)`} strokeWidth="3.8" strokeLinecap="round">
        {spokes.map((a) => (
          <line
            key={a}
            x1="33.5"
            y1="34"
            x2={(33.5 + 15 * Math.cos((a * Math.PI) / 180)).toFixed(2)}
            y2={(34 + 15 * Math.sin((a * Math.PI) / 180)).toFixed(2)}
          />
        ))}
      </g>
      <circle cx="33.5" cy="34" r="5" fill={`url(#${uid}-metal)`} />
    </Tile>
  );
};
