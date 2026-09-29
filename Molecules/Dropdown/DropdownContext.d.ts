import React from "react";
export interface DropdownContextValue {
    /** Items with `selected` render as menuitemradio (single) or menuitemcheckbox (multiple). */
    selectionMode: "single" | "multiple";
    /** Called by an item after its own `onSelect`; the menu decides whether to close. */
    onItemSelect: (closeOnSelect?: boolean) => void;
}
export declare const DropdownContext: React.Context<DropdownContextValue>;
