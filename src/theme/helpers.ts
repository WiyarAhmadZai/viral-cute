export function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function withAlpha(color: string, alpha: number): string {
  if (color.startsWith('#')) return hexToRgba(color, alpha);
  if (color.startsWith('rgb')) {
    const match = color.match(/rgba?\(([^)]+)\)/);
    if (!match?.[1]) return color;
    const parts = match[1].split(',').map((s) => s.trim());
    const [r, g, b] = parts;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return color;
}

export function mix(colorA: string, colorB: string, ratio: number): string {
  const clamp = (v: number) => Math.max(0, Math.min(1, v));
  const r = clamp(ratio);
  const parse = (hex: string): [number, number, number] => {
    const clean = hex.replace('#', '');
    return [
      parseInt(clean.slice(0, 2), 16),
      parseInt(clean.slice(2, 4), 16),
      parseInt(clean.slice(4, 6), 16),
    ];
  };
  const [r1, g1, b1] = parse(colorA);
  const [r2, g2, b2] = parse(colorB);
  const mixChannel = (a: number, b: number) => Math.round(a * (1 - r) + b * r);
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(mixChannel(r1, r2))}${toHex(mixChannel(g1, g2))}${toHex(mixChannel(b1, b2))}`;
}
