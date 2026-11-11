import React from "react";
import type { RadioSize } from "./RadioPrimitive";
/** What a RadioGroup hands its Radio rows. */
export interface RadioGroupContextValue {
    size: RadioSize;
    /** The group has an error: every row is Invalid. */
    invalid: boolean;
    disabled: boolean;
    /** Every row's input shares it, so the browser keeps one selected and the arrow keys move between them. */
    name: string;
    /** The selected option's value, if any. */
    value: string | undefined;
    select: (option: string) => void;
    /** The group's helper or error, linked from every row too: not every screen reader reads a fieldset's description. */
    messageId?: string;
}
/** Null outside a group. */
export declare const RadioGroupContext: React.Context<RadioGroupContextValue | null>;
