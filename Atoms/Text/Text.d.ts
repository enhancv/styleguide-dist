import type { PolymorphicComponent, PolymorphicProps } from "../../types/polymorphic";
import type { TextStyleProps } from "../../types/text";
import type { TypeScaleVariant } from "../../types/tokens";
export type TextElement = "p" | "span" | "div" | "label" | "legend" | "figcaption" | "blockquote" | "caption" | "li" | "dt" | "dd" | "strong" | "em" | "small" | "time" | "address" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
declare const DEFAULT_ELEMENT = "p";
interface TextOwnProps extends TextStyleProps {
    variant?: TypeScaleVariant;
}
export type TextProps<E extends TextElement = typeof DEFAULT_ELEMENT> = PolymorphicProps<E, TextOwnProps>;
export declare const Text: PolymorphicComponent<TextElement, "p", TextOwnProps>;
export {};
