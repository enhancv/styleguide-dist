import React from "react";
import type { RadioSize } from "./RadioPrimitive";
interface RadioGroupOwnProps {
    /**
     * Figma Legend text, rendered as the fieldset's `<legend>`. Omit it (Figma
     * Legend off) and pass `aria-label`.
     */
    label?: React.ReactNode;
    /** Figma Helper text, under the options. Linked with `aria-describedby`. */
    description?: React.ReactNode;
    /**
     * Figma State = Invalid: the message replaces the description (with the
     * alert-circle glyph), and every option turns Invalid: `aria-invalid`, and
     * a red outline on the unselected circles. A selected circle stays selected.
     */
    error?: React.ReactNode;
    /** Figma Size, for the legend, every row and the message. Default `"sm"`. */
    size?: RadioSize;
    /**
     * Figma State = Disabled: a disabled `<fieldset>`, so every option's input
     * is disabled, and the legend, rows and helper grey out. To lock one
     * option, disable that Radio instead.
     */
    disabled?: boolean;
    /** Controlled: the selected option's value, or `null` while nothing is selected. */
    value?: string | null;
    /** Uncontrolled: the value selected at first. Pre-select the safe, most common answer when there is one. */
    defaultValue?: string;
    /** Fires with the newly selected option's value. */
    onValueChange?: (value: string) => void;
    /**
     * The name every option's input submits under. Generated when omitted:
     * the browser needs a shared name to keep one selected and move with the
     * arrow keys.
     */
    name?: string;
    /** The options: Radio rows, each with a `value`. */
    children: React.ReactNode;
}
export type RadioGroupProps = RadioGroupOwnProps & Omit<React.ComponentPropsWithoutRef<"fieldset">, keyof RadioGroupOwnProps>;
/**
 * A labelled set of options where people pick exactly one: Figma's
 * RadioGroup set. A Field in fieldset mode: a `<fieldset>` with a `<legend>`,
 * the helper or error linked with `aria-describedby` from the fieldset and
 * from every row. Its Radio children are the rows: native radios sharing one
 * `name`, so Tab lands on the selected option and the arrow keys move and
 * select. Each row takes the group's size, error and disabled state, and its
 * selected state from the group's `value`.
 */
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupOwnProps & Omit<Omit<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref">, keyof RadioGroupOwnProps> & React.RefAttributes<HTMLFieldSetElement>>;
export {};
