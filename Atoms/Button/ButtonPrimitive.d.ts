import React from "react";
import "../../tokens/components/button.css";
import type { PolymorphicComponent, PolymorphicProps } from "../../types/polymorphic";
import type { ButtonColorToken } from "../../tokens/components/button";
export type ButtonElement = "button" | "a";
export type ButtonSize = "lg" | "md" | "sm";
declare const DEFAULT_ELEMENT = "button";
export interface ButtonPrimitiveOwnProps {
    color?: ButtonColorToken;
    size?: ButtonSize;
    /** The Figma Type axis: chrome (primary/secondary), chromeless in the
     *  button's box (ghost) or bare text (link). */
    variant?: "primary" | "secondary" | "ghost" | "link";
    /** Square icon slot instead of a label — the icon renders from `children`. */
    iconOnly?: boolean;
    iconStart?: React.ReactNode;
    iconEnd?: React.ReactNode;
    fullWidth?: boolean;
    /** String labels render title-cased — never for the link variant; opt out
     *  for casing that must survive verbatim. The app can opt out globally via
     *  ButtonConfigContext's defaultPreserveCasing (set for de/fr locales). */
    preserveCasing?: boolean;
    /** Replaces the content with a centered Loader while keeping the box —
     *  the label stays laid out, only invisible, so the button never resizes.
     *  Visual only (plus aria-busy): pair with `disabled` to block clicks. */
    loading?: boolean;
}
export type ButtonPrimitiveProps<E extends ButtonElement = typeof DEFAULT_ELEMENT> = PolymorphicProps<E, ButtonPrimitiveOwnProps>;
/**
 * Renders any button shape in the family. Deliberately not exported from the
 * package: consumers pick the shape through `Button` (primary/secondary),
 * `IconButton` (square) or `Link` (bare text), which mirror the Figma
 * components one to one.
 */
export declare const ButtonPrimitive: PolymorphicComponent<ButtonElement, typeof DEFAULT_ELEMENT, ButtonPrimitiveOwnProps>;
export {};
