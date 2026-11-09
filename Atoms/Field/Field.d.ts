import React from "react";
import type { FieldControlProps, FieldSize } from "./FieldContext";
export interface FieldProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children" | "id"> {
    /** Figma Label text, a `<label for>` the control. Omit it only where something else names the control, and give the control an `aria-label`. */
    label?: React.ReactNode;
    /** Figma Helper text, under the control, linked with `aria-describedby`. */
    description?: React.ReactNode;
    /** Figma State = Invalid: replaces the description, sets `aria-invalid` on the control and outlines it in red. */
    error?: React.ReactNode;
    /** Figma Size, for the label and message type. Pass the same size to the control. Default `"md"`. */
    size?: FieldSize;
    /** Figma State = Disabled: disables the control; the label and description turn text/disabled. */
    disabled?: boolean;
    /** Sets `required` on the control, with no visual marker: label optional fields "(optional)" instead. */
    required?: boolean;
    /** The control's id. Generated when omitted. */
    id?: string;
    /** Fill the container instead of hugging the control. */
    fullWidth?: boolean;
    /**
     * The control. A styleguide control (InputPrimitive, the Textarea field)
     * picks up the id, states and `aria-describedby` from context; for any other
     * element pass a function and spread what it receives onto the element.
     */
    children: React.ReactNode | ((control: FieldControlProps) => React.ReactNode);
}
/**
 * The spine of every labelled control: the label, the control, then the
 * helper or the error, with their wiring. Input and Textarea render through
 * it; use it directly to label a control the styleguide doesn't ship.
 */
export declare const Field: {
    ({ label, description, error, size, disabled, required, id: idProp, fullWidth, className, children, ...rest }: FieldProps): React.JSX.Element;
    displayName: string;
};
export type { FieldControlProps, FieldSize } from "./FieldContext";
