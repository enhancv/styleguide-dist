import React from "react";
import type { SwitchPrimitiveProps, SwitchSize } from "./SwitchPrimitive";
interface SwitchOwnProps extends Pick<SwitchPrimitiveProps, "checked" | "defaultChecked" | "onCheckedChange"> {
    /**
     * Figma Label text. Omit it (Figma Label off) and pass `aria-label`: the
     * track keeps its 20 / 24 / 24px line (48 on LG), so it lines up with
     * labelled rows.
     */
    label?: React.ReactNode;
    /** Figma Size. Default `"sm"`. */
    size?: SwitchSize;
    /** Figma Disabled: greys the track and the label; never focusable. */
    disabled?: boolean;
    /**
     * Figma flipped. Default `false`: the switch first, the label after. `true`
     * puts the label first and the switch after it, as in Dropdown rows.
     */
    flipped?: boolean;
    /**
     * Figma fullWidth. Default `false`: the row hugs its label, like Button.
     * `true` fills the container and the label takes the free space, so a
     * flipped switch sits on the trailing edge. A long label wraps either way,
     * with the switch on its first line.
     */
    fullWidth?: boolean;
}
export type SwitchProps = SwitchOwnProps & Omit<React.ComponentPropsWithoutRef<"input">, keyof SwitchOwnProps | "type" | "role" | "children">;
/**
 * An on/off setting with its label that applies at once: Figma's Switch set.
 * Renders a `<label>` around the input, so the whole row is the click target.
 * The ref is the input; `className` and `style` go to the label, every other
 * prop to the input. Focus is CSS, never a prop.
 */
export declare const Switch: React.ForwardRefExoticComponent<SwitchOwnProps & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "children" | "role" | "type" | keyof SwitchOwnProps> & React.RefAttributes<HTMLInputElement>>;
export {};
