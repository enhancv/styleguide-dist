/**
 * Pure rules behind InputChipField — no React, no DOM.
 *
 * Commas and line breaks are never part of a value: they separate chips.
 * The resume model splits skills on commas (TechnologyItem.toTagsList), so a
 * value holding one would come back as two.
 */
export type InputChipFieldRejectReason = "duplicate" | "max-items" | "too-long";
export interface InputChipFieldRejection {
    /** The normalised text that was refused. */
    value: string;
    reason: InputChipFieldRejectReason;
}
export interface ChipLimits {
    maxItems?: number;
    maxLength?: number;
}
/** A separator anywhere in the text (typed, pasted or IME-inserted). */
export declare const SEPARATOR: RegExp;
/** Split on separators, normalise, drop empties. */
export declare const splitChips: (raw: string) => string[];
/** Index of the last separator, or -1. */
export declare const lastSeparator: (text: string) => number;
/**
 * Which `candidates` can join `current`, in order. Each accepted candidate
 * counts against the limits and the duplicate check of the ones after it.
 * `maxItems` is omitted by callers that replace a chip rather than add one.
 */
export declare function planAdd(current: readonly string[], candidates: readonly string[], { maxItems, maxLength }: ChipLimits): {
    accepted: string[];
    rejected: InputChipFieldRejection[];
};
export declare const sameItems: (a: readonly string[], b: readonly string[]) => boolean;
/**
 * Carry ids across a change the field did not plan (the host reset or
 * reordered `value`): each value takes the first unused id it had before, in
 * order, so duplicates keep distinct ids and survivors never remount.
 */
export declare function reconcileIds(previous: readonly string[], previousIds: readonly string[], next: readonly string[], makeId: () => string): string[];
