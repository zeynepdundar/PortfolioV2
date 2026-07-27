/**
 * Ambient, Sketch-inspired background: a base page colour with a handful of
 * soft, slowly drifting colour orbs. Fixed behind all content, non-interactive.
 */

type Orb = {
  className: string;
  color: string;
  animation: string;
};

const orbs: Orb[] = [
  {
    className: "-top-40 -left-32 h-[40rem] w-[40rem]",
    color: "rgba(255,104,93,0.55)", // warm rose
    animation: "orb-float-a 36s ease-in-out infinite",
  },
  {
    className: "-top-32 -right-40 h-[42rem] w-[42rem]",
    color: "rgba(214,122,163,0.50)", // brand pink / magenta
    animation: "orb-float-b 44s ease-in-out infinite",
  },
  {
    className: "top-[8%] left-[32%] h-[34rem] w-[34rem]",
    color: "rgba(81,85,255,0.38)", // indigo
    animation: "orb-float-c 50s ease-in-out infinite",
  },
  {
    className: "top-[34%] -left-24 h-[30rem] w-[30rem]",
    color: "rgba(84,237,255,0.32)", // cyan
    animation: "orb-float-b 40s ease-in-out infinite",
  },
  {
    className: "top-[28%] -right-24 h-[32rem] w-[32rem]",
    color: "rgba(255,202,85,0.38)", // amber
    animation: "orb-float-a 46s ease-in-out infinite",
  },
];

export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          data-orb
          className={`absolute rounded-full blur-[110px] will-change-transform ${orb.className}`}
          style={{
            background: `radial-gradient(circle at 30% 30%, ${orb.color}, transparent 70%)`,
            animation: orb.animation,
          }}
        />
      ))}

      {/* Gentle fade so the lower page stays calm and readable. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, var(--background) 88%)",
        }}
      />
    </div>
  );
}
