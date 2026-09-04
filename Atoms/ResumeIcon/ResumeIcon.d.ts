import React from "react";
import type { ResumeIconName } from "./names";
declare const SETS: {
    readonly "enhancv-filled": import("./types").ResumeIconSetData;
    readonly "enhancv-outline": import("./types").ResumeIconSetData;
};
export type ResumeIconSet = keyof typeof SETS;
export type ResumeIconProps = {
    /** Glyph key as stored in resume data. Unknown keys fall back to the set's default glyph. */
    name: ResumeIconName;
    /** Which drawing of the vocabulary to use; templates pick one. */
    set?: ResumeIconSet;
    /** Glyph size in px (sets font-size). Inherits the surrounding font-size when omitted. */
    size?: number;
} & Omit<React.SVGAttributes<SVGSVGElement>, "name" | "children" | "viewBox">;
export declare const isResumeIconName: (name: string) => name is ResumeIconName;
/**
 * Inline-SVG glyph from the resume icon vocabulary (the keys stored on resume
 * items). Sized by `size`/font-size, painted with currentColor, so it drops in
 * wherever the resume font glyph used to be — including PDF rendering.
 */
export declare const ResumeIcon: React.ForwardRefExoticComponent<{
    /** Glyph key as stored in resume data. Unknown keys fall back to the set's default glyph. */
    name: ResumeIconName;
    /** Which drawing of the vocabulary to use; templates pick one. */
    set?: ResumeIconSet;
    /** Glyph size in px (sets font-size). Inherits the surrounding font-size when omitted. */
    size?: number;
} & Omit<React.SVGAttributes<SVGSVGElement>, "children" | "name" | "viewBox"> & React.RefAttributes<SVGSVGElement>>;
export {};
