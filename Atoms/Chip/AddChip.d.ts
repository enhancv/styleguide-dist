import React from "react";
import type { ChipSize } from "./ChipPrimitive";
/** What the typing input takes from the host. The component owns its value, handlers and limits. */
export type AddChipInputProps = Pick<React.InputHTMLAttributes<HTMLInputElement>, "autoCapitalize" | "autoCorrect" | "spellCheck" | "inputMode" | "enterKeyHint" | "aria-describedby">;
export interface AddChipProps {
    /**
     * The dashed chip's label, the typing chip's placeholder and its input's
     * name. Write it with no ellipsis ("Add custom"). Localise it.
     */
    label: string;
    /**
     * Called on Enter with text, and on a blur with text. The value is trimmed
     * and inner spaces are collapsed. It is never "". Commas stay in it.
     * Return `false` to refuse it: after Enter the text stays in the input to
     * be fixed; after a blur it is dropped.
     */
    onAdd: (value: string) => boolean | void;
    /** Default `"md"` (32px). Use the size of the chips beside it. */
    size?: ChipSize;
    /** Turning it on while typing closes the typing chip and adds nothing. */
    disabled?: boolean;
    /**
     * The host's limit is reached. The add chip reads `limitLabel`, has no +
     * and does nothing, but stays focusable. If it turns on while the typing
     * chip is open and empty, the typing chip closes and focus moves to the
     * add chip.
     */
    atLimit?: boolean;
    /** The add chip's label at the limit. Default "Limit reached". Localise it. */
    limitLabel?: string;
    /** Caps the typed text natively. */
    maxLength?: number;
    /** Polite live-region text after an accepted add. Default "{value} added". `""` stays silent. Localise it. */
    announce?: (value: string) => string;
    /** Passed to the typing input. `enterKeyHint` defaults to `"enter"`. */
    inputProps?: AddChipInputProps;
    /** On the chip, closed and open. */
    className?: string;
    /** Test hook: on the add chip, and as `{id}-input` on the typing input. */
    "data-test-id"?: string;
    children?: never;
}
/**
 * A dashed "+ Add custom" chip that turns into a chip you type in, in the
 * same spot. Put it after a group of FilterChips so people can add their own
 * option. The host owns the list: `onAdd` gets each value and may refuse it.
 * InputChipField's `appearance="inline"` ends in the same chip.
 */
export declare const AddChip: React.ForwardRefExoticComponent<AddChipProps & React.RefAttributes<HTMLButtonElement>>;
