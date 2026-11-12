import React from "react";
import type { FieldControlProps, FieldSize } from "./FieldContext";
interface FieldOwnProps {
    /** Figma Helper text, under the control, linked with `aria-describedby`. */
    description?: React.ReactNode;
    /** Figma State = Invalid: replaces the description, sets `aria-invalid` on the control and outlines it in red. */
    error?: React.ReactNode;
    /** Figma Size, for the label and message type. Pass the same size to the control. Default `"md"`. */
    size?: FieldSize;
    /** Figma State = Disabled: disables the control; the label and description turn text/disabled. */
    disabled?: boolean;
    /** Fill the container instead of hugging the control. */
    fullWidth?: boolean;
}
export interface FieldLabelProps extends FieldOwnProps, Omit<React.ComponentPropsWithoutRef<"div">, "children" | "id" | keyof FieldOwnProps> {
    /** `"div"` (default): one control, named by a `<label for>`. `"fieldset"`: a group of controls, named by a `<legend>`. */
    as?: "div";
    /** Figma Label text, a `<label for>` the control. Omit it only where something else names the control, and give the control an `aria-label`. */
    label?: React.ReactNode;
    /** Sets `required` on the control, with no visual marker: label optional fields "(optional)" instead. */
    required?: boolean;
    /** The control's id. Generated when omitted. */
    id?: string;
    /**
     * The control. A styleguide control (InputPrimitive, the Textarea field)
     * picks up the id, states and `aria-describedby` from context; for any other
     * element pass a function and spread what it receives onto the element.
     */
    children: React.ReactNode | ((control: FieldControlProps) => React.ReactNode);
}
export interface FieldFieldsetProps extends FieldOwnProps, Omit<React.ComponentPropsWithoutRef<"fieldset">, "children" | keyof FieldOwnProps> {
    as: "fieldset";
    /** The `<legend>` naming the group. Omit it only with an `aria-label` on the Field. */
    label?: React.ReactNode;
    /**
     * The group's controls. They name themselves; `disabled` reaches them
     * through the fieldset. Pass a function to get the message's
     * `aria-describedby` and `aria-invalid` for each control: not every screen
     * reader reads a fieldset's description.
     */
    children: React.ReactNode | ((group: FieldGroupControlProps) => React.ReactNode);
}
/** What a fieldset Field hands each of its controls. */
export type FieldGroupControlProps = Pick<FieldControlProps, "aria-describedby" | "aria-invalid">;
export type FieldProps = FieldLabelProps | FieldFieldsetProps;
/**
 * The spine of every labelled control: the label, the control, then the
 * helper or the error, with their wiring. Input and Textarea render through
 * it; use it directly to label a control the styleguide doesn't ship.
 * `as="fieldset"` names a group of controls with a `<legend>` instead, as
 * CheckboxGroup does.
 */
export declare const Field: React.ForwardRefExoticComponent<FieldProps & React.RefAttributes<HTMLDivElement | HTMLFieldSetElement>>;
export type { FieldControlProps, FieldSize } from "./FieldContext";
