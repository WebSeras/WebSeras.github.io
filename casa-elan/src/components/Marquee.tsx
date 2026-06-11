interface MarqueeProps {
  items: string[];
  duration?: number;
  bgColor?: string;
  textColor?: string;
  dotColor?: string;
  textSize?: string;
  py?: string;
}

export function Marquee({
  items,
  duration = 40,
  bgColor = "#B86A4E",
  textColor = "#F8F5F0",
  dotColor = "#F8F5F0",
  textSize = "text-xs",
  py = "py-4",
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${py} relative`} style={{ background: bgColor }}>
      <div
        className="marquee-track flex items-center gap-0"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span
              className={`${textSize} tracking-[0.3em] uppercase font-light whitespace-nowrap px-6`}
              style={{ color: textColor }}
            >
              {item}
            </span>
            <span
              className="text-base leading-none flex-shrink-0"
              style={{ color: dotColor, opacity: 0.5 }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
