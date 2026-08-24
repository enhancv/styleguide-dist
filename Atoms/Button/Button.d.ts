import React from "react";
import type { ButtonElement, ButtonSize } from "./ButtonPrimitive";
import type { ButtonColorToken } from "../../tokens/components/button";
import type { PolymorphicComponent, PolymorphicProps } from "../../types/polymorphic";
declare const DEFAULT_ELEMENT = "button";
interface ButtonOwnProps {
    color?: ButtonColorToken;
    size?: ButtonSize;
    /** Solid fill, outline, or chromeless-in-the-box — bare text renders
     *  through `Link`. */
    variant?: "primary" | "secondary" | "ghost";
    iconStart?: React.ReactNode;
    iconEnd?: React.ReactNode;
    fullWidth?: boolean;
    /** String labels render title-cased; opt out for verbatim casing. */
    preserveCasing?: boolean;
    /** Centered Loader over an invisible label — the box never resizes.
     *  Visual only (plus aria-busy): pair with `disabled` to block clicks. */
    loading?: boolean;
}
export type ButtonProps<E extends ButtonElement = typeof DEFAULT_ELEMENT> = PolymorphicProps<E, ButtonOwnProps>;
export declare const Button: PolymorphicComponent<ButtonElement, typeof DEFAULT_ELEMENT, ButtonOwnProps>;
export type { ButtonElement, ButtonSize } from "./ButtonPrimitive";
