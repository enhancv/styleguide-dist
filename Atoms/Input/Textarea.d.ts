import React from "react";
import "../../tokens/components/input.css";
import type { FieldProps } from "../Field/Field";
interface TextareaOwnProps extends Pick<FieldProps, "label" | "description" | "error"> {
    /** Figma Invalid without a message: the red outline and `aria-invalid`. `error` sets it too. */
    invalid?: boolean;
    /** Let people drag the field taller (`resize: vertical`). */
    resize?: boolean;
    /** Fill the container. Default `true`. */
    fullWidth?: boolean;
}
export type TextareaProps = TextareaOwnProps & Omit<React.ComponentPropsWithoutRef<"textarea">, keyof TextareaOwnProps>;
/**
 * Figma's Textarea: a labelled multi-line field, Input MD's anatomy and type.
 * Height follows `rows` (default 4). `className` and `style` go to the outer
 * Field; the ref and every other prop to the `<textarea>`.
 */
export declare const Textarea: React.ForwardRefExoticComponent<TextareaOwnProps & Omit<Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref">, keyof TextareaOwnProps> & React.RefAttributes<HTMLTextAreaElement>>;
export {};
