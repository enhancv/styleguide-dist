import React from "react";
import type { InputPrimitiveProps } from "./InputPrimitive";
interface SearchOwnProps {
    /** Figma Size: MD 40 for pages and phones (16px text), SM 32 for desktop toolbars and tables. Default `"md"`. */
    size?: "sm" | "md";
    /** Search has no visible label: name what is searched ("Search documents"). */
    "aria-label": string;
}
export type SearchProps = SearchOwnProps & Omit<InputPrimitiveProps, keyof SearchOwnProps | "type" | "invalid" | "iconStart" | "iconEnd" | "prefix" | "suffix" | "clearable" | "showPasswordLabel">;
/**
 * Figma's Search: the app's one search field, a pill with the search icon
 * that turns into Clear while there is a value. Clear and Esc empty it
 * (firing `onChange`), keep focus in it, then call `onClear`. No label,
 * Invalid or Disabled state.
 */
export declare const Search: React.ForwardRefExoticComponent<SearchOwnProps & Omit<InputPrimitiveProps, "prefix" | "type" | "invalid" | "iconStart" | "iconEnd" | "suffix" | "clearable" | "showPasswordLabel" | keyof SearchOwnProps> & React.RefAttributes<HTMLInputElement>>;
export {};
