import type React from "react";
/** Text-entry rules shared by the chips people type into: InputChip, AddChip and InputChipField. */
/** Collapse whitespace runs and trim: "  Machine   learning " → "Machine learning". */
export declare const normalizeChip: (raw: string) => string;
/**
 * A keydown that belongs to an IME composition, never a command. keyCode
 * 229: Safari's IME-confirm Enter arrives after compositionend.
 */
export declare const isImeKeyDown: (event: React.KeyboardEvent) => boolean;
