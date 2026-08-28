type IconProps = { size?: number; color?: string };

export function FacebookIcon({ size = 16, color = "#0B2D5C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8v-1.6c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H7.8v2.8h2.4V21h3.3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, color = "#0B2D5C" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r="0.9" fill={color} stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ size = 16, color = "#0B2D5C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M4.9 8.6h3v11.4h-3zM6.4 3.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM10.7 8.6h2.9v1.6h.04c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.7v6.7h-3v-6c0-1.4 0-3.2-2-3.2s-2.3 1.6-2.3 3.1v6.1h-3z" />
    </svg>
  );
}

export function TikTokIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="1" y="1" width="22" height="22" rx="5" fill="#000" />
      <path
        d="M14.3 4.5h2.6c.2 1.6 1.3 2.8 2.9 3.1v2.7c-1.3 0-2.4-.4-3.3-1.1v5.3c0 2.8-2.2 5-5 5s-5-2.2-5-5c0-2.6 2-4.7 4.5-5v2.7c-1 .3-1.7 1.2-1.7 2.3 0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4V4.5z"
        fill="#fff"
      />
    </svg>
  );
}

export function InstagramGradientIcon({ size = 19, id }: { size?: number; id: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <linearGradient id={`ig-${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FEE411" />
          <stop offset="45%" stopColor="#D62828" />
          <stop offset="75%" stopColor="#D62976" />
          <stop offset="100%" stopColor="#962FBF" />
        </linearGradient>
      </defs>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill={`url(#ig-${id})`} />
      <rect x="7" y="7" width="10" height="10" rx="3.2" fill="none" stroke="#fff" strokeWidth={1.6} />
      <circle cx="12" cy="12" r="2.6" fill="none" stroke="#fff" strokeWidth={1.6} />
      <circle cx="16.3" cy="7.7" r="1" fill="#fff" />
    </svg>
  );
}

export function FacebookRoundIcon({ size = 19 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        d="M13.8 21v-6.7h2.2l.4-2.6h-2.6v-1.5c0-.7.2-1.3 1.3-1.3h1.4V6.6c-.2 0-1-.1-2-.1-2.1 0-3.6 1.3-3.6 3.7v1.5H8.6v2.6H11V21h2.8z"
        fill="#fff"
      />
    </svg>
  );
}
