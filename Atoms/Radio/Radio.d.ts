import React from "react";
import type { RadioPrimitiveProps, RadioSize } from "./RadioPrimitive";
interface RadioOwnProps extends Pick<RadioPrimitiveProps, "checked" | "defaultChecked" | "onCheckedChange"> {
    /**
     * Figma Label text. Omit it (Figma Label off) and pass `aria-label`: the
     * circle keeps its 20 / 24 / 24px line (48 on LG), so it lines up with
     * labelled rows. When nothing has to line up, use RadioPrimitive.
     */
    label?: React.ReactNode;
    /** Figma Description: a line under the label, linked with `aria-describedby`. */
    description?: React.ReactNode;
    /** Figma Size. Default `"sm"`. A RadioGroup sets it for every row. */
    size?: RadioSize;
    /**
     * Figma State = Invalid: outlines an unselected circle in red and sets
     * `aria-invalid`. Radio has no error text: the message lives in RadioGroup,
     * whose `error` sets it on every row.
     */
    invalid?: boolean;
    /**
     * Figma State = Disabled: greys the circle, label and description. Disable
     * one row to lock a single option; a disabled group disables every row.
     */
    disabled?: boolean;
    /**
     * Figma fullWidth. Default `false`: the row hugs its label, like Button.
     * `true` fills the container. A long label wraps either way, with the
     * circle on its first line. RadioGroup rows always fill.
     */
    fullWidth?: boolean;
    /**
     * The input's value. In a RadioGroup it names the option: its selected
     * state then comes from the group's `value`.
     */
    value?: string;
}
export type RadioProps = RadioOwnProps & Omit<React.ComponentPropsWithoutRef<"input">, keyof RadioOwnProps | "type" | "children">;
/**
 * One option with its label and an optional description: Figma's Radio set.
 * Renders a `<label>` around the input, so the whole row is the click target.
 * It belongs in a RadioGroup, which owns the value; on its own (a layout the
 * group doesn't cover) give it a `name` shared with its siblings. The ref is
 * the input; `className` and `style` go to the label, every other prop to the
 * input. Hover and focus are CSS, never props.
 */
export declare const Radio: React.ForwardRefExoticComponent<RadioOwnProps & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "children" | "type" | keyof RadioOwnProps> & React.RefAttributes<HTMLInputElement>>;
export {};
