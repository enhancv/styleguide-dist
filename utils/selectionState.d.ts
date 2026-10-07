/**
 * The ARIA state that carries "selected" for an element's role: pressed for a
 * toggle button, checked for the checkable roles, selected for options and
 * tabs. Roles that carry no selection (a link, a generic container) get none.
 * Spread it before the caller's props, so an explicit aria-* still wins.
 */
export declare const selectionState: (role: string | undefined, selected: boolean) => {
    "aria-pressed": boolean;
    "aria-checked"?: undefined;
    "aria-selected"?: undefined;
} | {
    "aria-checked": boolean;
    "aria-pressed"?: undefined;
    "aria-selected"?: undefined;
} | {
    "aria-selected": boolean;
    "aria-pressed"?: undefined;
    "aria-checked"?: undefined;
} | {
    "aria-pressed"?: undefined;
    "aria-checked"?: undefined;
    "aria-selected"?: undefined;
};
