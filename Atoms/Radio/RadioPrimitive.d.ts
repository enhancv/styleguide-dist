import React from "react";
import "../../tokens/components/radio.css";
/** The Figma Size axis: a 16 / 20 / 24px circle with a 6 / 8 / 10px dot. */
export type RadioSize = "sm" | "md" | "lg";
interface RadioPrimitiveOwnProps {
    /** Figma Size. Default `"sm"`. */
    size?: RadioSize;
    /** Controlled selected state. */
    checked?: boolean;
    /** Uncontrolled initial state. */
    defaultChecked?: boolean;
    /**
     * Fires when people select this radio. A radio can't be cleared by
     * clicking it again, so it only ever fires with `true`; the radio that
     * loses the selection gets no event. `onChange` still passes through.
     */
    onCheckedChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Figma State = Invalid: outlines an unselected circle in red (a selected
     * circle keeps the selected look) and sets `aria-invalid`.
     */
    invalid?: boolean;
    /**
     * Draws the circle alone: no input, hidden from assistive tech, no hover
     * or focus of its own. For a Card or row that is the control itself (a
     * `<label>` around its own radio input, or a row with `role="radio"`),
     * which then carries the role, the state, the hover and the focus.
     * `checked`, `disabled` and `invalid` still pick the look.
     */
    decorative?: boolean;
}
export type RadioPrimitiveProps = RadioPrimitiveOwnProps & Omit<React.ComponentPropsWithoutRef<"input">, keyof RadioPrimitiveOwnProps | "type" | "children">;
/**
 * The circle alone: Figma's RadioPrimitive set, the building block of Radio
 * and RadioGroup. A native radio (the ref) laid over the circle, so it works
 * in forms, controlled or not, and radios sharing a `name` move with the
 * arrow keys. On its own it needs a `name` and an `aria-label`; `className`
 * and `style` go to the wrapper, every other prop to the input. States are
 * CSS (`:hover`, `:focus-visible`), never props.
 */
export declare const RadioPrimitive: React.ForwardRefExoticComponent<RadioPrimitiveOwnProps & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "children" | "type" | keyof RadioPrimitiveOwnProps> & React.RefAttributes<HTMLInputElement>>;
export {};
