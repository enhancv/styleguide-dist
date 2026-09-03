import React from "react";
export type LoaderSize = "small" | "medium" | "large";
export type LoaderProps = {
    /** 14 / 16 / 18px. Omit and set a font-size to size it freely. */
    size?: LoaderSize;
} & Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;
/**
 * Indeterminate progress ring: a faint track with a rotating arc, drawn in
 * currentColor. Decorative by default (aria-hidden); pass an `aria-label` to
 * announce it as a status region instead.
 */
export declare const Loader: ({ size, className, ...rest }: LoaderProps) => React.JSX.Element;
