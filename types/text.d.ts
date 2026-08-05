import type { FontWeightToken, TextColorToken } from "./tokens";
export type TextAlign = "start" | "center" | "end" | "justify";
/** Styling shared by the text components; `Text` owns the CSS for it. */
export interface TextStyleProps {
    color?: TextColorToken;
    weight?: FontWeightToken;
    align?: TextAlign;
    truncate?: boolean;
    lineClamp?: number;
    visuallyHidden?: boolean;
}
