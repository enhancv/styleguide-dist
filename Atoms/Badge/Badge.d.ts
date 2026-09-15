import React from "react";
import "../../tokens/components/badge.css";
import type { BadgeColorToken } from "../../tokens/components/badge";
interface BadgeSharedProps {
    /** Color family from the badge component tokens (the Figma Type axis). */
    color?: BadgeColorToken;
    /**
     * The Figma "Crop Border": a 2px ring in the surface colour that cuts the
     * badge out of whatever it overlays (an IconButton, an avatar). Drawn as a
     * shadow, so the 24/18/8/6 box never changes.
     */
    cropBorder?: boolean;
}
interface BadgeLabelProps {
    /** A 24px (`xl`) or 18px (`lg`) pill hugging a short label. */
    size?: "xl" | "lg";
    iconOnly?: false;
    /** A count or a 1–3 character label; the caller formats overflow ("99+"). */
    children: React.ReactNode;
}
interface BadgeIconProps {
    /** The same pill, with the color family's glyph in place of the label. */
    size?: "xl" | "lg";
    /** Draw the state as an icon: `!` (danger, warning), a tick (success), `i` (info), a dash (neutral). */
    iconOnly: true;
    children?: never;
}
interface BadgeDotProps {
    /** An 8px (`md`) or 6px (`sm`) status dot — no label. */
    size: "md" | "sm";
    iconOnly?: never;
    children?: never;
}
export type BadgeProps = BadgeSharedProps & (BadgeLabelProps | BadgeIconProps | BadgeDotProps) & Omit<React.ComponentPropsWithoutRef<"span">, "color" | "children">;
export type BadgeSize = NonNullable<BadgeProps["size"]>;
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
export {};
