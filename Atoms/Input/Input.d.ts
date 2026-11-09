import React from "react";
import type { InputPrimitiveProps } from "./InputPrimitive";
import type { FieldProps } from "../Field/Field";
export type InputProps = InputPrimitiveProps & Pick<FieldProps, "label" | "description" | "error">;
/**
 * Figma's Input: a labelled single-line field. The label, InputPrimitive,
 * then the description or the error, wired through Field. `className` and
 * `style` go to the outer Field; the ref and every other prop to the
 * `<input>`. For search use Search; without a visible label use
 * InputPrimitive with `aria-label`.
 */
export declare const Input: React.ForwardRefExoticComponent<import("./InputPrimitive").InputPrimitiveOwnProps & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, keyof import("./InputPrimitive").InputPrimitiveOwnProps> & Pick<FieldProps, "label" | "error" | "description"> & React.RefAttributes<HTMLInputElement>>;
