import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export type Poster = {
  image: string;
  alt: string;
  label: string;
  meta: string;
};

type PosterWallProps = {
  items: Poster[];
};

/**
 * A cylinder of posters that turns as you scroll. Each card sits on its own
 * angle around the ring, so the scene moves in depth instead of sliding flat.
 */
export default function PosterWall({ items }: PosterWallProps) {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const count = items.length;
  const step = 360 / count;
  const radius = (0.5 / Math.tan(Math.PI / count)).toFixed(3);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 861px) and (prefers-reduced-motion: no-preference)", () => {
        const ring = section.querySelector<HTMLElement>(".wall-ring");
        if (!ring) return;

        const travel = count * 62;

        gsap.to(ring, {
          rotateY: -(step * (count - 1)),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${travel}%`,
            pin: true,
            anticipatePin: 1,
            scrub: 0.55,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setActive(Math.min(count - 1, Math.round(self.progress * (count - 1))));
            },
          },
        });

        gsap.to(".wall-glow", {
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: `+=${travel}%`, scrub: 0.6 },
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="wall" id="gallery" ref={root} aria-label="Tables we have set">
      <div className="wall-pin">
        <div className="row-head">
          <span className="row-index">05</span>
          <span className="row-label">Tables we have set</span>
          <span className="row-meta">Scroll to turn the wall</span>
        </div>

        <div className="wall-head">
          <h2 className="display-title">
            A wall of <em>nights</em> we cooked for.
          </h2>
          <p className="section-note">
            Posters from the last few seasons — Busay gardens, Mactan ballrooms, a very long table in
            Moalboal. Scrolling turns the wall.
          </p>
        </div>

        <div className="wall-stage">
          <div className="wall-glow" aria-hidden="true" />
          <div
            className="wall-ring"
            style={{ "--ring-step": `${step}deg`, "--ring-radius": `calc(var(--wall-card-w) * ${radius})` } as React.CSSProperties}
          >
            {items.map((item, index) => (
              <figure className="wall-card" key={item.label} style={{ "--i": index } as React.CSSProperties}>
                <img src={item.image} alt={item.alt} loading={index < 3 ? "eager" : "lazy"} />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="wall-foot">
          <div className="wall-caption" aria-live="polite">
            <span className="wall-count">{String(active + 1).padStart(2, "0")}</span>
            <span className="wall-caption-text">
              {items[active].label} <em>— {items[active].meta}</em>
            </span>
          </div>
          <span className="wall-hint">Keep scrolling · the wall turns</span>
        </div>
      </div>
    </section>
  );
}
