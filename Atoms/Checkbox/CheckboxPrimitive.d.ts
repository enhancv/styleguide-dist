import React from "react";
import "../../tokens/components/checkbox.css";
/** The Figma Size axis: a 16 / 20 / 24px box with a 12 / 16 / 20px check. */
export type CheckboxSize = "sm" | "md" | "lg";
interface CheckboxPrimitiveOwnProps {
    /** Figma Size. Default `"sm"`, the box Dropdown rows use. */
    size?: CheckboxSize;
    /** Controlled checked state. */
    checked?: boolean;
    /**
     * Some, not all: a select-all box over a partly selected list. Draws the
     * checked look with a minus and sets the input's `indeterminate`, which
     * assistive tech reads as mixed; a click still toggles `checked`. Code only
     * for now: Figma has no Checked = Indeterminate variant yet.
     */
    indeterminate?: boolean;
    /** Uncontrolled initial state. */
    defaultChecked?: boolean;
    /** Fires with the new state. `onChange` still passes through to the input. */
    onCheckedChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Figma State = Invalid: outlines an unchecked box in red (a checked box
     * keeps the checked look) and sets `aria-invalid`.
     */
    invalid?: boolean;
    /**
     * Draws the box alone: no input, hidden from assistive tech, no hover or
     * focus of its own. For a row that is the control itself, such as a menu
     * item with `role="menuitemcheckbox"`, which then carries the role, the
     * state, the hover and the focus. `checked`, `disabled` and `invalid` still
     * pick the look.
     */
    decorative?: boolean;
}
export type CheckboxPrimitiveProps = CheckboxPrimitiveOwnProps & Omit<React.ComponentPropsWithoutRef<"input">, keyof CheckboxPrimitiveOwnProps | "type" | "children">;
/**
 * The box alone: Figma's CheckboxPrimitive set, the building block of
 * Checkbox and CheckboxGroup. A native checkbox (the ref) laid over the box,
 * so it works in forms, controlled or not. On its own it needs an
 * `aria-label`; `className` and `style` go to the wrapper, every other prop to
 * the input. States are CSS (`:hover`, `:focus-visible`), never props.
 */
export declare const CheckboxPrimitive: React.ForwardRefExoticComponent<CheckboxPrimitiveOwnProps & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "children" | "type" | keyof CheckboxPrimitiveOwnProps> & React.RefAttributes<HTMLInputElement>>;
export {};
