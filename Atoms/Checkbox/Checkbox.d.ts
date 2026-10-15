import React from "react";
import type { CheckboxPrimitiveProps, CheckboxSize } from "./CheckboxPrimitive";
interface CheckboxOwnProps extends Pick<CheckboxPrimitiveProps, "checked" | "indeterminate" | "defaultChecked" | "onCheckedChange"> {
    /**
     * Figma Label text. Omit it (Figma Label off) and pass `aria-label`: the box
     * keeps its 20 / 24 / 24px line (48 on LG), so it lines up with labelled
     * rows. When nothing has to line up, use CheckboxPrimitive.
     */
    label?: React.ReactNode;
    /** Figma Description: a line under the label, linked with `aria-describedby`. */
    description?: React.ReactNode;
    /** Figma Size. Default `"sm"`. A CheckboxGroup sets it for every row. */
    size?: CheckboxSize;
    /**
     * Figma State = Invalid: outlines an unchecked box in red and sets
     * `aria-invalid`. Checkbox has no error text: a single checkbox that needs a
     * message is a CheckboxGroup with one option. A group's `error` sets it on
     * every row.
     */
    invalid?: boolean;
    /** Figma State = Disabled: greys the box, label and description. A disabled group disables every row. */
    disabled?: boolean;
    /**
     * Figma fullWidth. Default `false`: the row hugs its label, like Button.
     * `true` fills the container. A long label wraps either way, with the box
     * on its first line. CheckboxGroup rows always fill.
     */
    fullWidth?: boolean;
    /**
     * The input's value. In a CheckboxGroup it names the option: its checked
     * state then comes from the group's `value`.
     */
    value?: string;
}
export type CheckboxProps = CheckboxOwnProps & Omit<React.ComponentPropsWithoutRef<"input">, keyof CheckboxOwnProps | "type" | "children">;
/**
 * A checkbox with its label and an optional description: Figma's Checkbox
 * set. Renders a `<label>` around the input, so the whole row is the click
 * target. The ref is the input; `className` and `style` go to the label,
 * every other prop to the input. Hover and focus are CSS, never props.
 */
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxOwnProps & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "children" | "type" | keyof CheckboxOwnProps> & React.RefAttributes<HTMLInputElement>>;
export {};
