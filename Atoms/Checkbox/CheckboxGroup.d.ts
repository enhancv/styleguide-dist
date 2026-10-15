import React from "react";
import type { CheckboxSize } from "./CheckboxPrimitive";
interface CheckboxGroupOwnProps {
    /**
     * Figma Legend text, rendered as the fieldset's `<legend>`. Omit it (Figma
     * Legend off) and pass `aria-label`.
     */
    label?: React.ReactNode;
    /** Figma Helper text, under the options. Linked with `aria-describedby`. */
    description?: React.ReactNode;
    /**
     * Figma State = Invalid: the message replaces the description (with the
     * alert-circle glyph), and every option turns Invalid: `aria-invalid`, and a
     * red outline on the unchecked boxes. Checked boxes stay checked.
     */
    error?: React.ReactNode;
    /** Figma Size, for the legend, every row and the message. Default `"sm"`. */
    size?: CheckboxSize;
    /**
     * Figma State = Disabled: a disabled `<fieldset>`, so every option's input
     * is disabled, and the legend, rows and helper grey out. To lock one
     * option, disable that Checkbox instead.
     */
    disabled?: boolean;
    /** Controlled: the values of the checked options. */
    value?: readonly string[];
    /** Uncontrolled: the values checked at first. Don't pre-select options. */
    defaultValue?: readonly string[];
    /** Fires with the checked options' values, in the order they were checked. */
    onValueChange?: (value: string[]) => void;
    /** The name every option's input submits under (each with its own `value`). */
    name?: string;
    /** The options: Checkbox rows, each with a `value`. */
    children: React.ReactNode;
}
export type CheckboxGroupProps = CheckboxGroupOwnProps & Omit<React.ComponentPropsWithoutRef<"fieldset">, keyof CheckboxGroupOwnProps>;
/**
 * A labelled set of checkboxes where people pick any number of options:
 * Figma's CheckboxGroup set. A `<fieldset>` with a `<legend>`; the helper or
 * error is linked with `aria-describedby`. Its Checkbox children are the
 * rows: each takes the group's size, error and disabled state, and its
 * checked state from the group's `value`.
 */
export declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupOwnProps & Omit<Omit<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref">, keyof CheckboxGroupOwnProps> & React.RefAttributes<HTMLFieldSetElement>>;
export {};
