import React from "react";
interface ChipAddSlotStateOptions {
    /** `false` while the owner renders no add chip (InputChipField's field form). Default `true`. */
    enabled?: boolean;
    disabled: boolean;
    atLimit: boolean;
    /** The owner's typing text: opening and closing empty it, and an empty one closes at the limit. */
    draft: string;
    setDraft: (draft: string) => void;
    /** Focuses the typing input. Runs inside the opening press. */
    focusInput: () => void;
    /** Runs before each open (the owner forgets its last refusal). */
    onOpen: () => void;
}
/**
 * INTERNAL: ChipAddSlot's open and close rules, shared by AddChip and
 * InputChipField's inline form. The owner keeps the value and every key
 * rule, and calls `closeAdd` on Enter, Escape, blur and disabled.
 *
 * Call it after the owner's other layout effects: its own two run in that
 * order.
 */
export declare function useChipAddSlot({ enabled, disabled, atLimit, draft, setDraft, focusInput, onOpen, }: ChipAddSlotStateOptions): {
    open: boolean;
    openRef: React.MutableRefObject<boolean>;
    buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
    openAdd: () => void;
    closeAdd: (refocusAdd: boolean) => void;
};
export {};
