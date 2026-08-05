import React from "react";
import type { PolymorphicProps } from "../../types/polymorphic";
import type { TextStyleProps } from "../../types/text";
export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;
interface HeadingOwnProps extends TextStyleProps {
    /** Sets both the style and the tag. */
    level: HeadingLevel;
}
export type HeadingProps = PolymorphicProps<HeadingElement, HeadingOwnProps>;
/**
 * A heading, styled by rank. `level` sets the style and the tag together; `as`
 * overrides the tag only, for when the outline needs a different rank than the
 * design. For heading-sized text that is not a heading, use `Text`.
 */
declare const Heading: React.ForwardRefExoticComponent<HeadingOwnProps & {
    as?: HeadingElement | undefined;
} & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref">, "as" | keyof HeadingOwnProps> & React.RefAttributes<HTMLHeadingElement>>;
export { Heading };
