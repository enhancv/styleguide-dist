import React from "react";
import type { ChipSize } from "./ChipPrimitive";
/** Everything the typing input takes; the owner supplies value, handlers and limits. */
export type ChipAddSlotInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "children" | "value"> & {
    value: string;
};
export interface ChipAddSlotProps {
    /** Closed: the dashed "+ label" button. Open: the chip being typed in, focused by the owner. */
    open: boolean;
    /** The button's label, the typing chip's placeholder and its input's name ("Add skill"). */
    label: string;
    size?: ChipSize;
    disabled?: boolean;
    /** At the owner's limit: the button stays focusable but inert (aria-disabled) and reads `limitLabel`. */
    atLimit?: boolean;
    limitLabel?: string;
    onOpen: () => void;
    buttonRef?: React.Ref<HTMLButtonElement>;
    inputRef?: React.Ref<HTMLInputElement>;
    inputProps: ChipAddSlotInputProps;
    /** Stories only: forces a state class onto the pill. */
    className?: string;
    /** Test hook: on the closed button, and as `{testId}-input` on the typing input. */
    testId?: string;
}
/**
 * INTERNAL (not exported from the package): InputChipField's inline add
 * control, and the base of the public AddChip. Markup and styling only — the
 * owner keeps the state (useChipAddSlot), the value and every key rule.
 *
 * Closed, it is a neutral Ghost chip with a dashed 1px inside outline, "+
 * label". Open, it is a neutral Subtle chip being typed in, at the same spot:
 * a hidden copy of the placeholder keeps it at least as wide as the button
 * was, so opening never moves the row.
 */
export declare function ChipAddSlot({ open, label, size, disabled, atLimit, limitLabel, onOpen, buttonRef, inputRef, inputProps, className, testId, }: ChipAddSlotProps): React.JSX.Element;
