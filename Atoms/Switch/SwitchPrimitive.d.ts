import React from "react";
import "../../tokens/components/switch.css";
/** The Figma Size axis: a 28 × 16 / 36 × 20 / 44 × 24 track with a 12 / 16 / 20 thumb. */
export type SwitchSize = "sm" | "md" | "lg";
interface SwitchPrimitiveOwnProps {
    /** Figma Size. Default `"sm"`, the track Dropdown rows use. */
    size?: SwitchSize;
    /** Controlled on/off state (Figma Checked). */
    checked?: boolean;
    /** Uncontrolled initial state. */
    defaultChecked?: boolean;
    /** Fires with the new state. `onChange` still passes through to the input. */
    onCheckedChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Draws the track alone: no input, hidden from assistive tech, no focus of
     * its own. For a row or Card that is the control itself, such as a menu
     * item with `role="menuitemcheckbox"` or a Card with `role="switch"`, which
     * then carries the role, the state, the hover and the focus. `checked` and
     * `disabled` still pick the look.
     */
    decorative?: boolean;
}
export type SwitchPrimitiveProps = SwitchPrimitiveOwnProps & Omit<React.ComponentPropsWithoutRef<"input">, keyof SwitchPrimitiveOwnProps | "type" | "role" | "children">;
/**
 * The track alone: Figma's SwitchPrimitive set, the building block of Switch.
 * A native checkbox with `role="switch"` (the ref) laid over the track, so it
 * works in forms, controlled or not. On its own it needs an `aria-label`;
 * `className` and `style` go to the wrapper, every other prop to the input.
 * Focus is CSS (`:focus-visible`), never a prop.
 */
export declare const SwitchPrimitive: React.ForwardRefExoticComponent<SwitchPrimitiveOwnProps & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "children" | "role" | "type" | keyof SwitchPrimitiveOwnProps> & React.RefAttributes<HTMLInputElement>>;
export {};
