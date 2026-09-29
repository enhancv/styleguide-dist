/**
 * Stable keys for a controlled `string[]` (never index keys: an edit or a
 * removal must not remount the chips around it, or focus and the edit input
 * are lost).
 *
 * - `plan(next, ids)`: the field announces the ids it wants for the `next`
 *   it is about to emit. When the host renders exactly that array, the plan
 *   wins — so an edited chip keeps its id although its text changed.
 * - Anything else (a reset, a server response) is reconciled by value.
 *
 * Derived state uses React's "adjust state while rendering" pattern; the
 * compare is by items, so hosts passing `list.toArray()` each render are free.
 */
export declare function useChipIds(value: readonly string[]): {
    ids: readonly string[];
    makeId: () => string;
    plan: (next: readonly string[], ids: readonly string[]) => void;
};
