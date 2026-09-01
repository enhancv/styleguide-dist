import React from "react";
/** Natural sizes straight from the Figma variants. */
declare const SIZES: {
    readonly favicon: {
        readonly width: 48;
        readonly height: 48;
    };
    readonly minified: {
        readonly width: 44;
        readonly height: 23;
    };
    readonly horizontal: {
        readonly width: 139;
        readonly height: 23;
    };
    readonly vertical: {
        readonly width: 87;
        readonly height: 52;
    };
};
export type LogoVariant = keyof typeof SIZES;
export type LogoColor = "default" | "black" | "white";
export type LogoProps = ({
    /** The full-colour app mark only exists in the default colour. */
    variant?: "favicon";
    color?: "default";
} | {
    variant: "minified" | "horizontal" | "vertical";
    color?: LogoColor;
}) & Omit<React.SVGAttributes<SVGSVGElement>, "color" | "children" | "viewBox">;
/**
 * The Enhancv brand mark. Renders at the Figma variant's natural size;
 * pass `height` to scale (width follows the aspect ratio).
 */
export declare const Logo: ({ variant, color, height, width, className, ...rest }: LogoProps) => React.JSX.Element;
export {};
