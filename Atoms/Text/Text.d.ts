import type { TextElement } from "./TextPrimitive";
import type { PolymorphicComponent, PolymorphicProps } from "../../types/polymorphic";
import type { TextStyleProps } from "../../types/text";
import type { TypeScaleVariantOf } from "../../types/tokens";
declare const DEFAULT_ELEMENT = "p";
interface TextOwnProps extends TextStyleProps {
    /** Body ramp only — display and heading styles render through `Heading`. */
    variant?: TypeScaleVariantOf<"body">;
}
export type TextProps<E extends TextElement = typeof DEFAULT_ELEMENT> = PolymorphicProps<E, TextOwnProps>;
export declare const Text: PolymorphicComponent<TextElement, typeof DEFAULT_ELEMENT, TextOwnProps>;
export type { TextElement } from "./TextPrimitive";
