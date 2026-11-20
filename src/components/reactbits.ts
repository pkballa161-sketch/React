import type { ComponentType } from "react";

import AccordionGallerySource from "./AccordionGallery";
import CountUpSource from "./CountUp";
import FlyingPostersSource from "./FlyingPosters";
import MagicBentoSource from "./MagicBento";
import MaskedHeadingSource from "./MaskedHeading";
import ParticleTextSource from "./ParticleText";
import PillNavSource from "./PillNav";
import ScrollExpandSource from "./ScrollExpand";
import ScrollRevealSource from "./ScrollReveal";
import ScrollStackSource, { ScrollStackItem as ScrollStackItemSource } from "./ScrollStack";
import ShuffleSource from "./Shuffle";
import SilkSource from "./Silk";
import StarBorderSource from "./StarBorder";
import TextLoopSource from "./TextLoop";

/**
 * The ReactBits sources are vendored as plain JSX, so TypeScript infers their
 * props straight from the destructuring defaults. This bridge keeps the real
 * component code untouched while giving the page a single, permissive type.
 */
type ReactBitsComponent = ComponentType<any>;

export const AccordionGallery = AccordionGallerySource as unknown as ReactBitsComponent;
export const CountUp = CountUpSource as unknown as ReactBitsComponent;
export const FlyingPosters = FlyingPostersSource as unknown as ReactBitsComponent;
export const MagicBento = MagicBentoSource as unknown as ReactBitsComponent;
export const MaskedHeading = MaskedHeadingSource as unknown as ReactBitsComponent;
export const ParticleText = ParticleTextSource as unknown as ReactBitsComponent;
export const PillNav = PillNavSource as unknown as ReactBitsComponent;
export const ScrollExpand = ScrollExpandSource as unknown as ReactBitsComponent;
export const ScrollReveal = ScrollRevealSource as unknown as ReactBitsComponent;
export const ScrollStack = ScrollStackSource as unknown as ReactBitsComponent;
export const ScrollStackItem = ScrollStackItemSource as unknown as ReactBitsComponent;
export const Shuffle = ShuffleSource as unknown as ReactBitsComponent;
export const Silk = SilkSource as unknown as ReactBitsComponent;
export const StarBorder = StarBorderSource as unknown as ReactBitsComponent;
export const TextLoop = TextLoopSource as unknown as ReactBitsComponent;
