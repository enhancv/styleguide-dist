import React from "react";
export type FieldSize = "sm" | "md" | "lg";
/** What a Field hands its control: the ids and states the control renders. */
export interface FieldControlProps {
    id: string;
    "aria-describedby"?: string;
    "aria-invalid"?: true;
    disabled?: boolean;
    required?: boolean;
}
export interface FieldContextValue extends FieldControlProps {
    size: FieldSize;
    invalid: boolean;
}
export declare const FieldContext: React.Context<FieldContextValue | null>;
export declare const useField: () => FieldContextValue | null;
