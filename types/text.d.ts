import type { FontWeightToken, TextColorToken } from "./tokens";
export type TextAlign = "start" | "center" | "end" | "justify";
export type TextTransform = "uppercase" | "lowercase" | "capitalize";
export type TextDecoration = "underline" | "line-through";
/** Styling shared by the text components; `Text` owns the CSS for it. */
export interface TextStyleProps {
    color?: TextColorToken;
    weight?: FontWeightToken;
    align?: TextAlign;
    transform?: TextTransform;
    decoration?: TextDecoration;
    italic?: boolean;
    truncate?: boolean;
    lineClamp?: number;
    visuallyHidden?: boolean;
}
