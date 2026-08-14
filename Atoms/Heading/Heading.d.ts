import type { TextElement } from "../Text/TextPrimitive";
import type { PolymorphicComponent, PolymorphicProps } from "../../types/polymorphic";
import type { TextStyleProps } from "../../types/text";
export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;
interface HeadingOwnProps extends TextStyleProps {
    /** Sets both the style and the tag. */
    level: HeadingLevel;
}
export type HeadingProps<E extends TextElement = HeadingElement> = PolymorphicProps<E, HeadingOwnProps>;
/**
 * A heading, styled by rank. `level` sets the style and the tag together; `as`
 * overrides the tag only — a different heading tag when the outline needs
 * another rank, or a non-heading tag for heading-styled text that must stay
 * out of the outline. The display and heading ramps render only through this
 * component — `Text` carries the body ramp.
 */
export declare const Heading: PolymorphicComponent<TextElement, HeadingElement, HeadingOwnProps>;
export {};
