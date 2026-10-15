import React from "react";
import type { CheckboxSize } from "./CheckboxPrimitive";
/** What a CheckboxGroup hands its Checkbox rows. */
export interface CheckboxGroupContextValue {
    size: CheckboxSize;
    /** The group has an error: every row is Invalid. */
    invalid: boolean;
    disabled: boolean;
    name?: string;
    /** The checked options' values. */
    value: readonly string[];
    toggle: (option: string, checked: boolean) => void;
}
/** Null outside a group. */
export declare const CheckboxGroupContext: React.Context<CheckboxGroupContextValue | null>;
