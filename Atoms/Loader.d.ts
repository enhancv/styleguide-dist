import React from "react";
/** A preset ring (14 / 16 / 18px), or `inherit`: a 1em ring that follows the font-size. */
export type LoaderSize = "small" | "medium" | "large" | "inherit";
export type LoaderProps = {
    /** 14 / 16 / 18px, or `"inherit"` for a 1em ring sized by the font-size. Default `"medium"`. */
    size?: LoaderSize;
} & Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;
/**
 * Indeterminate progress ring: a faint track with a rotating arc, drawn in
 * currentColor. Decorative by default (aria-hidden); pass an `aria-label` to
 * announce it as a status region instead.
 */
export declare const Loader: ({ size, className, ...rest }: LoaderProps) => React.JSX.Element;
