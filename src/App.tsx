import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import CourseDeck, { type DeckStep } from "./components/CourseDeck";
import Logo from "./components/Logo";
import PosterWall from "./components/PosterWall";
import {
  CountUp,
  MagicBento,
  MaskedHeading,
  ParticleText,
  PillNav,
  ScrollExpand,
  ScrollReveal,
  ScrollStack,
  ScrollStackItem,
  Silk,
  StarBorder,
  TextLoop,
} from "./components/reactbits";
import WordCycle from "./components/WordCycle";
import useMediaQuery from "./useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "+639171025124";
const PHONE_LABEL = "0917 102 5124";

const navItems = [
  { label: "Occasions", href: "#occasions" },
  { label: "Menus", href: "#menus" },
  { label: "Tables", href: "#gallery" },
  { label: "The day", href: "#day" },
  { label: "Contact", href: "#contact" },
];

type Occasion = {
  index: string;
  label: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  facts: string[];
};

const occasions: Occasion[] = [
  {
    index: "01",
    label: "Weddings",
    title: "Long tables, late dancing",
    body: "Church, garden or beachfront — from the first canapé at the reception to the last slice of cake at midnight. Lechon carved at the table, seafood from the strait, and a crew that packs down quietly.",
    image: "/images/p19869792.jpg",
    alt: "A long wedding table laid with candles, linen and wine",
    facts: ["80–300 guests", "Family-style or plated", "From ₱850 pp"],
  },
  {
    index: "02",
    label: "Debuts & milestones",
    title: "Eighteen candles, one entrance",
    body: "Debuts, sixtieths and anniversaries, staged the way Cebu does them: a long table for the family, a bar that keeps pouring, and a menu that is not the same hotel buffet as last year.",
    image: "/images/p14457551.jpg",
    alt: "A celebration dessert table with a floral cake and pastries",
    facts: ["60–200 guests", "18 roses, ready", "From ₱780 pp"],
  },
  {
    index: "03",
    label: "Kids' birthdays",
    title: "Small hands, big opinions",
    body: "A table the kids actually eat from — spaghetti, lumpia, mini burgers — and a separate one the grown-ups linger over. Nothing beige, nothing fiddly, and a cake that survives the candles.",
    image: "/images/p16220888.jpg",
    alt: "A colourful children's birthday table with balloons and cake",
    facts: ["30–120 guests", "Nut-free option", "From ₱420 pp"],
  },
  {
    index: "04",
    label: "Corporate",
    title: "Canapés that close the deal",
    body: "Launches, openings, town halls and Christmas parties from Cebu IT Park to Mactan resorts. Sharp, quiet service in rooms that were never built for catering — we bring the kitchen with us.",
    image: "/images/corporate.jpg",
    alt: "Guests with champagne at a corporate catering table",
    facts: ["50–400 guests", "Cocktails & grazing", "From ₱600 pp"],
  },
];

const menuItems = [
  {
    title: "Kinilaw & canapés",
    description: "Six bites, one hand. Built to be eaten standing up.",
    image: "/images/p39239222.jpg",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    title: "Lechon & carving",
    description: "Crackling first, always. Carved at the table.",
    image: "/images/p4959845.jpg",
    colSpan: 2,
  },
  {
    title: "Long-table dinners",
    description: "Three courses, passed platters, no performance.",
    image: "/images/p19869792.jpg",
  },
  {
    title: "Debut tables",
    description: "Small plates, zero negotiation.",
    image: "/images/p14457551.jpg",
  },
  {
    title: "Dessert & cake",
    description: "Ube, mango, sans rival.",
    image: "/images/p3593430.jpg",
    colSpan: 2,
  },
  {
    title: "Bar & drinks",
    description: "Wine chosen per course, not per crate.",
    image: "/images/corporate.jpg",
    colSpan: 2,
  },
  {
    title: "Kids’ tables",
    description: "Balloons, cake, zero negotiation.",
    image: "/images/p16220888.jpg",
  },
  {
    title: "Styling & hire",
    description: "Linen, china, candles, the lot.",
    image: "/images/wedding.jpg",
  },
];

const posterItems = [
  {
    image: "/images/wedding.jpg",
    alt: "A long wedding table with candles, linen and wine",
    label: "Celebration table",
    meta: "Busay, 2026",
  },
  {
    image: "/images/p3593430.jpg",
    alt: "An outdoor dessert table with cake and flowers",
    label: "Garden dessert table",
    meta: "Mactan, 2025",
  },
  {
    image: "/images/p19869792.jpg",
    alt: "A garden dinner table laid at dusk",
    label: "Long table",
    meta: "Moalboal, 2025",
  },
  {
    image: "/images/corporate.jpg",
    alt: "Guests with champagne at an evening reception",
    label: "Launch night",
    meta: "Cebu IT Park, 2024",
  },
  {
    image: "/images/p14457551.jpg",
    alt: "A celebration dessert table with a floral cake",
    label: "Debut",
    meta: "Talisay, 2024",
  },
  {
    image: "/images/p16220888.jpg",
    alt: "A children's party table with balloons and sweets",
    label: "Kids' party",
    meta: "Lahug, 2023",
  },
];

const daySteps: DeckStep[] = [
  {
    index: "01",
    label: "Three weeks out",
    title: "You taste everything.",
    body: "Come to the commissary in Mabolo on a Tuesday. We cook the shortlist, you argue about the lechon, and we leave with a menu you actually want to eat at your own party.",
    image: "/images/p39239222.jpg",
    alt: "A catering table of appetisers and drinks",
  },
  {
    index: "02",
    label: "One week out",
    title: "We count, build, brief.",
    body: "Final numbers, allergies, rentals, a minute-by-minute run sheet and a named lead who answers your messages. A rain plan that is not an apology.",
    image: "/images/p3593430.jpg",
    alt: "An outdoor celebration table laid with cakes and flowers",
  },
  {
    index: "03",
    label: "The morning",
    title: "Load-in at six.",
    body: "Two vans, a portable kitchen and a crew that has cooked this venue before. By the time your florist arrives, the room already smells like lunch.",
    image: "/images/p16220888.jpg",
    alt: "A bright party table arranged with cakes and sweets",
  },
  {
    index: "04",
    label: "Service",
    title: "Then we disappear.",
    body: "Plated, poured, cleared, quiet. Speeches run late, the kitchen stretches, nobody notices. We leave the venue as we found it, minus the food.",
    image: "/images/corporate.jpg",
    alt: "Guests holding champagne at an evening reception",
  },
];

const stats = [
  { from: 0, to: 13, suffix: "", label: "Years cooking for Cebu" },
  { from: 0, to: 480, suffix: "", label: "Weddings, debuts & launches" },
  { from: 0, to: 26, suffix: "", label: "Venues we know by heart" },
  { from: 0, to: 18, suffix: "", label: "Chefs, porters & bar crew" },
];

export default function App() {
  const page = useRef<HTMLDivElement>(null);
  const isPhone = useMediaQuery("(max-width: 760px)");

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        ".hero-photo",
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.35, ease: "expo.inOut" },
        0.2
      )
        .fromTo(".hero-photo img", { scale: 1.2 }, { scale: 1, duration: 1.9, ease: "power2.out" }, 0.2)
        .fromTo(
          ".hero-eyebrow",
          { clipPath: "inset(0% 0% 100% 0%)", y: 14 },
          { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 1, ease: "expo.out" },
          0.25
        )
        .fromTo(
          ".hero-cycle",
          { clipPath: "inset(0% 0% 100% 0%)", y: 22 },
          { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 1.1, ease: "expo.out" },
          0.75
        )
        .fromTo(".hero-lede", { y: 26 }, { y: 0, duration: 0.9 }, 0.9)
        .fromTo(".hero-facts li", { yPercent: 115 }, { yPercent: 0, duration: 0.85, stagger: 0.055 }, 0.98)
        .fromTo(".hero-actions", { y: 18 }, { y: 0, duration: 0.8 }, 1.1);

      gsap.to(".hero-photo img", {
        yPercent: 9,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.to(".hero-bg", {
        scale: 1.12,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 },
      });

      gsap.to(".hero-inner", {
        y: -70,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 },
      });
    },
    { scope: page }
  );

  return (
    <div className="page" ref={page}>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="PartyCiti, home">
          <Logo size={46} />
          <span className="brand-word">
            PartyCiti
            <em>Cebu · event catering</em>
          </span>
        </a>

        <div className="topbar-nav">
          <PillNav
            items={navItems}
            theme="dark"
            layout="joined"
            size="sm"
            itemStyle="pill"
            indicator="dot"
            hoverEffect="fill"
            highlightColor="#d6a74f"
            highlightTextColor="#2b0509"
            intro={false}
            ariaLabel="Main"
            className="nav-pills"
          />
        </div>

        <a className="topbar-cta" href="#contact">
          Enquire <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg" aria-hidden="true">
            <Silk
              speed={2.4}
              scale={1.45}
              color="#4c0910"
              sheenColor="#f0d08a"
              noiseIntensity={0.9}
              rotation={0.5}
              sheen={0.75}
              depth={0.55}
              glow={0.5}
              ripple={1.1}
              wave={1.15}
              variation={0.4}
              mouseInteraction
              interactionStrength={0.9}
              clickRipple
              intro
            />
          </div>
          <div className="hero-veil" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-eyebrow">
              <span>Cebu · Philippines</span>
              <span>Family-run since 2013</span>
            </div>

            <div className="hero-word">
              <ParticleText
                text="PARTYCITI"
                particleSize={1.7}
                density={3.2}
                color="#e9c877"
                highlightColor="#fff3d0"
                highlightMode="motion"
                shape="circle"
                intro="gather"
                scatter={210}
                gatherDuration={1800}
                stagger={440}
                clickBurst
                burstStrength={1.1}
                pointerRepel={34}
                repelRadius={130}
                idleDrift={0.6}
                fontSize="clamp(3rem, 14.5vw, 11rem)"
                fontWeight={700}
                fontFamily="'Cormorant Garamond', Georgia, serif"
                glow
              />
            </div>

            <div className="hero-cycle">
              <span className="hero-cycle-pre">Catering for</span>
              <WordCycle words={["weddings", "debuts", "birthdays", "corporate nights"]} />
            </div>

            <div className="hero-foot">
              <p className="hero-lede">
                A Cebu kitchen cooking for the days people photograph and never forget. Lechon on the
                spit, seafood from the strait, and a crew that knows how to run a room.
              </p>

              <ul className="hero-facts">
                <li>
                  <span>Family-run, third generation</span>
                </li>
                <li>
                  <span>Cebu · Mactan · Bohol</span>
                </li>
                <li>
                  <span>Up to 400 guests</span>
                </li>
              </ul>

              <figure className="hero-photo">
                <img src="/images/p39239222.jpg" alt="A catering table of canapés and drinks, styled for an event" />
                <figcaption>Canapé service · Busay</figcaption>
              </figure>
            </div>

            <div className="hero-actions">
              <a className="loud-link" href="#occasions">
                See what we cater <span aria-hidden="true">↓</span>
              </a>
              <a className="quiet-link" href={`tel:${PHONE}`}>
                Call {PHONE_LABEL}
              </a>
              <a className="hero-cue" href="#occasions" aria-label="Scroll to occasions">
                <span className="hero-cue-line" aria-hidden="true" />
                Scroll
              </a>
            </div>
          </div>
        </section>

        <div className="ribbon">
          <TextLoop
            text="WEDDINGS ✦ DEBUTS ✦ BIRTHDAYS ✦ CORPORATE"
            shape="wave"
            ribbon
            ribbonColor="#d6a74f"
            color="#3a060c"
            ribbonWidth={96}
            fontSize={44}
            fontWeight={800}
            letterSpacing={1.5}
            speed={60}
            scrollBoost={650}
            draggable
            pauseOnHover
            separator="✦"
          />
        </div>

        <section className="section house" id="house">
          <div className="row-head">
            <span className="row-index">01</span>
            <span className="row-label">The house</span>
            <span className="row-meta">Cebu · since 2013</span>
          </div>

          <ScrollReveal
            containerClassName="manifesto"
            textClassName="manifesto-text"
            mode="scrub"
            splitBy="words"
            effect="fade"
            enableBlur
            baseOpacity={0.18}
            blurStrength={5}
            stagger={0.02}
            duration={0.7}
            highlightColor="#b07c2c"
          >
            A party is a hundred small decisions, and most of them are made in a kitchen. We would
            rather get those right than print a beautiful menu nobody remembers eating.
          </ScrollReveal>

          <div className="house-grid">
            <div className="house-copy">
              <p>
                PartyCiti started in 2013 with one lechon pit, two cooks and a wedding in Talisay that
                nearly went wrong when the coals ran cold. It didn&rsquo;t. We have been cooking for
                other people&rsquo;s best days ever since.
              </p>
              <p>
                Today we are a kitchen of eighteen, working out of a commissary in Mabolo with a
                portable setup that fits a garden in Busay, a ballroom in Mactan or a beach in Moalboal.
                We cook what is good that week, write menus per party, and price them honestly.
              </p>
            </div>

            <ul className="house-list">
              <li>
                <span>Weddings</span>
                <span>80–300 guests</span>
              </li>
              <li>
                <span>Debuts &amp; milestones</span>
                <span>60–200 guests</span>
              </li>
              <li>
                <span>Kids&rsquo; birthdays</span>
                <span>30–120 guests</span>
              </li>
              <li>
                <span>Corporate &amp; launches</span>
                <span>50–400 guests</span>
              </li>
              <li>
                <span>Island venues</span>
                <span>Cebu &amp; Bohol</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="section occasions" id="occasions">
          <div className="row-head">
            <span className="row-index">02</span>
            <span className="row-label">Occasions</span>
            <span className="row-meta">Four ways in · scroll to stack</span>
          </div>

          <div className="section-intro">
            <h2 className="display-title">
              Four kinds of <em>celebration.</em>
              <br />
              One kitchen.
            </h2>
            <p className="section-note">
              Every occasion gets its own menu, its own pacing and its own crew size. These are
              starting points, not packages — the last four weddings we cooked had four different
              menus.
            </p>
          </div>

          <ScrollStack
            className="occasion-stack"
            useWindowScroll
            itemDistance={90}
            itemStackDistance={16}
            stackPosition="15%"
            baseScale={0.94}
            itemScale={0.035}
            dimAmount={0.28}
            tiltAmount={3}
            rotationAmount={1.2}
            holdDistance={140}
            smoothScroll={false}
            snap={false}
          >
            {occasions.map((occasion) => (
              <ScrollStackItem key={occasion.index} itemClassName="occasion-card">
                <div className="occasion-inner">
                  <div className="occasion-copy">
                    <span className="occasion-label">
                      {occasion.index} — {occasion.label}
                    </span>
                    <h3 className="occasion-title">{occasion.title}</h3>
                    <p className="occasion-body">{occasion.body}</p>
                    <ul className="occasion-facts">
                      {occasion.facts.map((fact) => (
                        <li key={fact}>{fact}</li>
                      ))}
                    </ul>
                    <a className="text-link" href="#contact">
                      Plan one ↗
                    </a>
                  </div>
                  <div className="occasion-media">
                    <img src={occasion.image} alt={occasion.alt} loading="lazy" />
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </section>

        <div className="expand-shell">
          <ScrollExpand
            className="expand"
            src="/images/p19869792.jpg"
            alt="A garden wedding table with candles and flowers at dusk"
            title="Everything else is choreography."
            scrollHint="Keep scrolling"
            startWidth={54}
            startHeight={62}
            startRadius={2}
            endRadius={0}
            mediaZoom={1.42}
            scrollDistance={1.1}
            holdDistance={0.45}
            smoothing={0.12}
            overlayScrim={0.4}
            useWindowScroll
          >
            <div className="expand-copy">
              <span className="expand-label">03 — The centrepiece</span>
              <h2 className="expand-title">
                The food is the <em>centrepiece.</em>
              </h2>
              <p>
                Flowers fade, playlists get old, and nobody remembers the chairs. They remember
                standing at a table at eleven at night, still eating.
              </p>
              <a className="loud-link loud-link--light" href="#menus">
                See what we put on it <span aria-hidden="true">↗</span>
              </a>
            </div>
          </ScrollExpand>
        </div>

        <section className="section menus" id="menus">
          <div className="row-head">
            <span className="row-index">04</span>
            <span className="row-label">On the table</span>
            <span className="row-meta">Sample menus · 2027</span>
          </div>

          <div className="section-intro">
            <h2 className="display-title">
              What actually <em>lands</em> on the table.
            </h2>
            <p className="section-note">
              Eight things we do well. Mix them into a party — canapés and a dessert table, or a full
              sit-down dinner with a bar that stays open an hour too long.
            </p>
          </div>

          <div className="bento-shell">
            <MagicBento
              items={menuItems}
              columns={isPhone ? 2 : 4}
              rowHeight={isPhone ? 150 : 166}
              gap={10}
              radius={2}
              theme="light"
              glowColor="214, 167, 79"
              enableSpotlight
              enableBorderGlow
              enableTilt
              enableMagnetism
              clickEffect
              intro
            />
          </div>

          <div className="menu-foot">
            <p>
              Menus start at ₱420 per person for kids&rsquo; parties and ₱850 for a full wedding
              service. Drinks, hire and staff are quoted separately — never buried.
            </p>
            <a className="text-link" href={`tel:${PHONE}`}>
              Ask for the full menu deck ↗
            </a>
          </div>
        </section>

        <PosterWall items={posterItems} />


        <CourseDeck items={daySteps} />

        <section className="stats-band" aria-label="PartyCiti in numbers">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-value">
                <CountUp from={stat.from} to={stat.to} duration={2.2} separator="," />
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="section words">
          <div className="row-head">
            <span className="row-index">07</span>
            <span className="row-label">In their words</span>
            <span className="row-meta">Unedited, unfortunately</span>
          </div>

          <div className="quote-grid">
            <blockquote className="quote">
              <p>
                &ldquo;We have been to a lot of weddings in Cebu. This is the only one where three
                guests asked for the caterer&rsquo;s number before the cake.&rdquo;
              </p>
              <footer>
                <span>Trisha &amp; Migs</span>
                <span className="mono">Married in Mactan, June 2026</span>
              </footer>
            </blockquote>

            <blockquote className="quote quote--offset">
              <p>
                &ldquo;Two hundred guests, forty canapés, and somehow nobody stood in a queue. They
                ran the room better than our event agency did.&rdquo;
              </p>
              <footer>
                <span>Bea Lim</span>
                <span className="mono">Head of brand, Cebu IT Park</span>
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-bg" aria-hidden="true">
            <Silk
              speed={1.15}
              scale={1.95}
              color="#4a0911"
              sheenColor="#e8c184"
              noiseIntensity={0.8}
              rotation={-0.4}
              sheen={0.72}
              depth={0.45}
              glow={0.55}
              ripple={0.8}
              wave={0.8}
              variation={0.25}
              mouseInteraction
              interactionStrength={0.55}
              clickRipple={false}
            />
          </div>
          <div className="contact-veil" aria-hidden="true" />

          <div className="contact-inner">
            <div className="row-head">
              <span className="row-index">08</span>
              <span className="row-label">Contact</span>
              <span className="row-meta">Booking 2027 · a few dates left</span>
            </div>

            <MaskedHeading
              className="contact-word"
              tag="h2"
              text="LET'S PARTY"
              mediaType="image"
              src="/images/p14457551.jpg"
              fillScale={1.24}
              parallax={26}
              drift={9}
              brightness={1.6}
              saturation={1.15}
              spotlight
              spotlightRadius={240}
              reveal="wipe"
              duration={1.5}
              stagger={0.1}
              trigger="view"
              align="left"
              weight={700}
              tracking={-0.04}
              lineHeight={0.84}
              textScale={0.19}
            />

            <div className="contact-grid">
              <div className="contact-lead">
                <h3 className="contact-title">
                  Tell us the date.
                  <br />
                  We&rsquo;ll bring the rest.
                </h3>
                <Logo size={isPhone ? 92 : 108} className="contact-crest" />
              </div>

              <div className="contact-actions">
                <StarBorder
                  as="a"
                  href={`tel:${PHONE}`}
                  className="cta-star"
                  color="#f0d08a"
                  trailColor="#f8efe1"
                  duration={5}
                  thickness={1}
                  radius={999}
                  trailLength={0.35}
                  glow={0.8}
                  theme="dark"
                  backgroundColor="#d6a74f"
                  textColor="#2b0509"
                  borderColor="rgba(247, 239, 225, 0.35)"
                >
                  Call {PHONE_LABEL} ↗
                </StarBorder>

                <div className="contact-details">
                  <a href={`tel:${PHONE}`}>{PHONE_LABEL}</a>
                  <a
                    href="https://www.facebook.com/PartyciiEventCateringCebu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Partycii EventCatering Cebu
                  </a>
                  <p>
                    Mabolo, Cebu City
                    <br />
                    Cebu · Mactan · Bohol
                  </p>
                  <p className="mono">Replies within one working day</p>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <span>© {new Date().getFullYear()} PartyCiti Event Catering Services</span>
            <span className="footer-links">
              <a href="#occasions">Occasions</a>
              <a href="#menus">Menus</a>
              <a href="#gallery">Tables</a>
              <a href="#top">Back to top</a>
            </span>
            <span className="mono">Cebu, Philippines · Built with React Bits &amp; GSAP</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
