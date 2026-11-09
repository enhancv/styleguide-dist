import React from "react";
import "../../tokens/components/input.css";
import type { FieldSize } from "../Field/FieldContext";
import type { UiIconName } from "../Icon/Icon";
export type InputSize = FieldSize;
/** Box: InputPrimitive's 8px-radius field. Pill: Search's. */
type InputShape = "box" | "pill";
export interface InputPrimitiveOwnProps {
    /** Figma Size: 32 · 40 · 48 high, the Button heights. Default `"md"`, or the enclosing Field's. */
    size?: InputSize;
    /** Figma Invalid: a red outline, through hover and focus, and `aria-invalid`. A Field's `error` sets it. */
    invalid?: boolean;
    /** Figma Icon Leading: a decorative icon before the text. */
    iconStart?: UiIconName;
    /** Figma Icon Trailing: a decorative icon after the text. */
    iconEnd?: UiIconName;
    /** Figma Prefix: short fixed text before the value ("$", "https://"). Keep the unit in the label too. */
    prefix?: React.ReactNode;
    /** Figma Suffix: short fixed text after the value ("per year"). */
    suffix?: React.ReactNode;
    /** Figma Clear button: shown while the field has a value; empties it (firing `onChange`) and refocuses it. */
    clearable?: boolean;
    /** Called after Clear has emptied the field. */
    onClear?: () => void;
    /** The Clear button's accessible name. Default `"Clear"`. */
    clearLabel?: string;
    /** The password toggle's accessible name. Default `"Show password"`. */
    showPasswordLabel?: string;
    /** Fill the container. Default `false`: the field keeps the input's intrinsic width. */
    fullWidth?: boolean;
}
export type InputPrimitiveProps = InputPrimitiveOwnProps & Omit<React.ComponentPropsWithoutRef<"input">, keyof InputPrimitiveOwnProps>;
interface InputFieldProps extends InputPrimitiveProps {
    shape: InputShape;
    /** Search: the trailing icon gives way to Clear while there is a value. */
    hideIconEndWhenFilled?: boolean;
    /** Search: Esc empties the field like Clear. */
    clearOnEscape?: boolean;
    /** Search: `role="search"` on the field box, named like the input so several landmarks stay distinct. */
    boxRole?: React.AriaRole;
}
/** The shared field behind InputPrimitive and Search. Not exported from the package. */
export declare const InputField: React.ForwardRefExoticComponent<InputFieldProps & React.RefAttributes<HTMLInputElement>>;
/**
 * Figma's InputPrimitive: the single-line field without a label: outline,
 * fill, affixes, Clear and the password toggle. Input adds the label and
 * messages. Use it on its own only where something else names the field (a
 * table cell, a hero field next to a Button), and pass `aria-label`.
 * `className` and `style` go to the field box; the ref and every other prop
 * to the `<input>`. Hover and focus are CSS, never props.
 */
export declare const InputPrimitive: React.ForwardRefExoticComponent<InputPrimitiveOwnProps & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, keyof InputPrimitiveOwnProps> & React.RefAttributes<HTMLInputElement>>;
export {};
