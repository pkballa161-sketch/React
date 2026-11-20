import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export type DeckStep = {
  index: string;
  label: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

type CourseDeckProps = {
  items: DeckStep[];
};

/**
 * Pinned "run sheet". Scroll drives a Rolodex of cards: each one tips back
 * into the deck as the next rises, and the copy wipes in behind a clip,
 * so the movement is tied to the scrollbar instead of fading on entry.
 */
export default function CourseDeck({ items }: CourseDeckProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 861px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".deck-card", section);
        const steps = gsap.utils.toArray<HTMLElement>(".deck-step", section);
        const fill = section.querySelector<HTMLElement>(".deck-rail-fill");
        const count = section.querySelector<HTMLElement>(".deck-count");
        if (cards.length < 2) return;

        const travel = cards.length * 88;

        gsap.set(cards, { transformOrigin: "50% 105%", transformStyle: "preserve-3d" });
        gsap.set(cards.slice(1), { yPercent: 34, rotateX: 34, scale: 0.94, autoAlpha: 0 });
        gsap.set(steps.slice(1), { clipPath: "inset(0% 0% 100% 0%)" });

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${travel}%`,
            pin: true,
            anticipatePin: 1,
            scrub: 0.5,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (!count) return;
              const step = Math.min(items.length, Math.floor(self.progress * items.length) + 1);
              count.textContent = String(step).padStart(2, "0");
            },
          },
        });

        cards.forEach((card, i) => {
          if (i === 0) return;
          const previous = cards[i - 1];
          const at = i;
          tl.to(
            previous,
            { yPercent: -18, rotateX: -26, scale: 0.9, autoAlpha: 0, duration: 0.45, ease: "power2.in" },
            at - 0.55
          )
            .to(card, { yPercent: 0, rotateX: 0, scale: 1, autoAlpha: 1, duration: 0.8 }, at - 0.4)
            .to(steps[i - 1], { clipPath: "inset(0% 0% 100% 0%)", duration: 0.35, ease: "power2.in" }, at - 0.55)
            .to(steps[i], { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6 }, at - 0.32);
        });

        tl.to({}, { duration: 0.7 });

        if (fill) {
          gsap.fromTo(
            fill,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              transformOrigin: "top center",
              scrollTrigger: { trigger: section, start: "top top", end: `+=${travel}%`, scrub: 0.4 },
            }
          );
        }
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="deck" id="day" ref={root} aria-label="How the day runs">
      <div className="deck-pin">
        <div className="row-head deck-head">
          <span className="row-index">06</span>
          <span className="row-label">The day itself</span>
          <span className="row-meta">Keep scrolling — the deck turns</span>
        </div>

        <div className="deck-stage">
          <div className="deck-copy">
            <div className="deck-tally">
              <span className="deck-count">01</span>
              <span className="deck-tally-sep">/</span>
              <span>{String(items.length).padStart(2, "0")}</span>
            </div>

            <div className="deck-steps">
              {items.map((step) => (
                <article className="deck-step" key={step.index}>
                  <span className="deck-step-label">
                    {step.index} — {step.label}
                  </span>
                  <h2 className="deck-step-title">{step.title}</h2>
                  <p className="deck-step-body">{step.body}</p>
                  <figure className="deck-step-media">
                    <img src={step.image} alt={step.alt} loading="lazy" />
                    <figcaption>
                      <span>{step.index}</span>
                      {step.label}
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>

            <div className="deck-rail" aria-hidden="true">
              <span className="deck-rail-track">
                <span className="deck-rail-fill" />
              </span>
              <span className="deck-rail-note">From first tasting to last glass.</span>
            </div>
          </div>

          <div className="deck-cards">
            {items.map((step) => (
              <figure className="deck-card" key={step.index}>
                <img src={step.image} alt={step.alt} loading="lazy" />
                <figcaption>
                  <span>{step.index}</span>
                  {step.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
