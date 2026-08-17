import type { PolymorphicComponent, PolymorphicProps } from "../../types/polymorphic";
import type { TextStyleProps } from "../../types/text";
import type { TypeScaleVariant } from "../../types/tokens";
export type TextElement = "p" | "span" | "div" | "label" | "legend" | "figcaption" | "blockquote" | "caption" | "li" | "dt" | "dd" | "strong" | "em" | "small" | "time" | "address" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
declare const DEFAULT_ELEMENT = "p";
interface TextPrimitiveOwnProps extends TextStyleProps {
    variant?: TypeScaleVariant;
}
export type TextPrimitiveProps<E extends TextElement = typeof DEFAULT_ELEMENT> = PolymorphicProps<E, TextPrimitiveOwnProps>;
/**
 * Renders any style in the type scale. Deliberately not exported from the
 * package: consumers pick the ramp through `Text` (body) or `Heading`
 * (display/heading), which mirror the Figma components one to one.
 */
export declare const TextPrimitive: PolymorphicComponent<TextElement, typeof DEFAULT_ELEMENT, TextPrimitiveOwnProps>;
export {};
