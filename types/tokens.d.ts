import type * as primitives from "../tokens/primitives";
import type * as semantic from "../tokens/semantic";
import type * as theme from "../tokens/theme";
type TypeScales = {
    display: typeof semantic.display;
    heading: typeof semantic.heading;
    body: typeof semantic.body;
};
export type TypeScaleCategory = keyof TypeScales;
export type TypeScaleSize<Category extends TypeScaleCategory> = Category extends TypeScaleCategory ? Extract<keyof TypeScales[Category], string> : never;
export type TypeScaleVariantOf<Category extends TypeScaleCategory> = Category extends TypeScaleCategory ? `${Category}-${TypeScaleSize<Category>}` : never;
/** `display-xl`, `heading-l`, `body-m`, … */
export type TypeScaleVariant = TypeScaleVariantOf<TypeScaleCategory>;
/** A theme text colour, or `inherit` to take the closest ancestor's. */
export type TextColorToken = keyof typeof theme.text | "inherit";
export type FontWeightToken = keyof typeof primitives.type.fontWeight;
export {};
